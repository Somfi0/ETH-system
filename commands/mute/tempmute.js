const {Message, MessageEmbed}= require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'tempmute',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        let perms = message.member.hasPermission('ADMINISTRATOR')
        if(!perms) return message.reply('у вас не достаточно прав на использование данной команды')

        let logchannel = message.guild.channels.cache.find(ch => ch.name === "︱⚪・пользователи")

        let role = message.guild.roles.cache.find(ch => ch.name === "⌇ JB-MUTED")

        const user = message.mentions.members.first()
        if(!user) return message.reply('вы не выбрали пользователя для совершения этой команды')
        if(!user.roles.highest.position>=message.member.roles.highest.position) return message.reply('Вы не можете замьютить участника выше вашей роли или администратора')
        if(user.roles.cache.has(role.id)) return message.channel.send(`${user} в данном моменте замьючен`)

        let time = args [1]
        if(!time) time = "Перманентный мьют"

        let reason = args.slice(2).join(' ')
        if(!reason) reason = "без причины"

        let mutembed = new MessageEmbed()
        .setTitle('Команда мьют:')
        .addField('Замьюченный участник :', `${user}`)
        .addField('Причина мьюта:', `${reason}`)
        .addField('Был замьючен на:',`${time}`)
        .addField('Его замьютил:',`${message.author}`)
        .setTimestamp()

        user.roles.add(role)
        logchannel.send(mutembed)
        message.channel.send(`${user} был замьючен. Его замьютил ${message.author}. На ${time} времени. По причине ${reason}.`)

        setTimeout(function(){
            user.roles.remove(role)
            message.channel.send(`${user} теперь розмьючен`)
        }, ms(time))
    }
}