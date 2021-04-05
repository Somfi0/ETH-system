const Discord = module.require('discord.js');
const kissed = require('../jsons/kiss.json')

module.exports = {
    name: "kiss",
    description: "just kiss someone",
    run: async(client, message, args) => {
   
        var member= message.mentions.members.first();
        const pics = kissed[Math.floor(Math.random() * kissed.length)];
        if(!member) return message.channel.send(`${message.author} вы не выбрали пользователя`)
        let kissEmbed2 = new Discord.MessageEmbed()
          .setDescription(`${message.author} самолюбие не лучшая твоя черта`)
          .setColor("#343638")
            if(member.id === message.author.id) return message.channel.send(kissEmbed2);
         let kissEmbed3 = new Discord.MessageEmbed()
          .setTitle('Реакция поцелуй:')
          .setDescription(`**${message.author} поцеловал(-а) ${member.user}**`)
          .setImage(pics)
          .setColor('#343638')
         return message.channel.send(kissEmbed3);

    },
};