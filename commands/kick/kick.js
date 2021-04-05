const { MessageEmbed } = require('discord.js')

module.exports ={
    name: 'kick',

        /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

        run : async(client, message, args)=>{
            if(!message.member.permissions.has("KICKEMBERS")) return message.channel.send(`У тебя ${message.author} нету прав на использование этой команды`)
            const user = message.mentions.users.first() || message.guild.users.cache.get(args[0])
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            var content = message.content.split(" ").slice(2).join(' ');
            var testCont = message.content.split(" ");
            if(!message.guild.me.hasPermission('KICK_MEMBER')) return message.channel.send(`Я не могу кикнуть ${user} у меня нету прав на это`)
            if(message.author === user) return message.reply('Вы не можете кикнуть себя')
            if(!member.kickable) return message.reply(`${message.author} я не могу кикнуть данного участника`)
            if (message.mentions.users.size < 1) {
                const infokick = new MessageEmbed()
                .setTitle('Информация по использованию команды Кик:')
                .setDescription('**\`Вы не выбрали пользователя\`**\n**Использование:**\n:kick <member> [reason]\n**Пример:**\n :kick <@699865741276610630> нарушение правил')
                .setColor('#343638')
                message.channel.send(infokick)
              } else if (testCont.length <= 2) {
                const infokick = new MessageEmbed()
                .setTitle('Информация по использованию команды Кик:')
                .setDescription('**\`Вы не написали причину кика\`**\n**Использование:**\n:kick <member> [reason]\n**Пример:**\n :kick <@699865741276610630> нарушение правил')
                .setColor('#343638')
                message.channel.send(infokick)
              }else if(message.guild.member(user).kickable){
                await member.send(`Вы были кикнуты с сервера ${message.guild.name}, по причине ${content}, кикнул вас ${message.author.tag}`)
                message.guild.member(user).kick().then(user => {
                    var kick = new MessageEmbed()
                    .setTitle('Кик:')
                    .setDescription(`**${user} был кикнут по причине:** \n\`${content}\`\n**Кикнул его ${message.author}**`)
                    .setColor('#343638')
                    .setTimestamp()
                    message.channel.send(kick)
                })

              }

        }
}