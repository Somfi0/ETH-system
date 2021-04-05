const db = require('../../models/wans')

module.exports = {
    name : 'rwarn',
    run : async(client, message, args) => {
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send('У вас не достаточно прав на использование данной команды')        
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send('Вы не выбрали участника')
        db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                let number = parseInt(args[1]) - 1
                data.content.splice(number, 1)
                message.channel.send('Предупреждение удалено')
                data.save()
            } else {
                message.channel.send(`${user} не имеет предупреждений`)
            }
        })
    }
}
