const {MessageEmbed, Message} = require('discord.js')

module.exports ={
    name: "unmute",

   /**
     * @param {Message} message
     */

    run : async(client, message, args) =>{
        let perms = message.member.hasPermission('MANAGE_MESSAGES')
        if(!perms) return message.reply('вы не можете использовать данную команду')

        let logchannel = message.guild.channels.cache.find(ch => ch.name === "︱⚪・пользователи")

        let role = message.guild.roles.cache.find(ch => ch.name === "⌇ JB-MUTED")

        let user = message.mentions.members.first()
        if(!user) return message.reply('вы не выбрали пользователя для совершения этой команды')

        let unmute = new MessageEmbed()
        .setTitle('Участник розмьючен')
        .addField('Розмьюченный пользователь:',`${user}`)
        .addField('Его розмьютил:',`${message.author}`)

        user.roles.remove(role)
        logchannel.send(unmute)
        message.channel.send(`${user} теперь розмьючен. Его розмьютил: ${message.author}`)
    }
}