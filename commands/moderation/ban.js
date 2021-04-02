const { MessageEmbed, Message } = require('discord.js')

module.exports ={
    name: 'ban',

        /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args)=>{
          let perms = message.member.hasPermission('BAN_MEMBERS')
          if(!perms) return message.reply('у вас не достаточно прав на использование данной команды')

          let reason = args.slice(2).join(' ')

          if(!user){
            const nouser = new MessageEmbed()
            .setTitle('Команда бан:')
            .setDescription(`**Причина не функционирования команды:** ${message.author} Вы не выбрали участника`)
            .addField('Правильность использования команды:',`:ban <@member> [reason]`)
            .addField('Пример использования команды:',`:ban <@699865741276610630> нарушение правил и создание твинка`)
            message.channel.send(nouser)
            message.delete(noreason)
          }


          if(!reason){
            let noreason = new MessageEmbed()
            .setTitle('Команда бан:')
            .setDescription(`**Причина не функционирования команды:** ${message.author} Вы не выбрали причину`)
            .addField('Правильность использования команды:',`:ban <@member> [reason]`)
            .addField('Пример использования команды:',`:ban <@699865741276610630> нарушение правил и создание твинка`)
            message.channel.send(noreason)
            message.delete(nouser)
          }

          if(message.guild.member(user).bannable){
            await user.send(`Вы были забанены на сервере ${message.guild.name}, по причине ${reason}, кикнул вас ${message.author.id}`)
            message.guild.member(user).ban().then(user=>{
              let ban = new MessageEmbed()
              .setTitle('Команда бан:')
              .addField('Забаненный участник:', `${user}`)
              .addField('Его забанили по причине:',`${reason}`)
              .addField('Модератор который его забанил:',`${message.author}`)
              message.channel.send(ban)
            })
          }
    }        
}