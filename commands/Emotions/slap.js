const Discord = module.require('discord.js');
const slaped = require('../jsons/slap.json')
const hug = require('../jsons/hug.json')

module.exports = {
    name: "slap",
    description: "just slap someone",
    run: async(client, message, args) => {
   
        var member= message.mentions.members.first();
        const pics = slaped[Math.floor(Math.random() * slaped.length)];
        const picshug = hug[Math.floor(Math.random() * hug.length)];
        if(!member) return message.channel.send(`${message.author} не бейте всех на єтом сервере есть и хорошие люди`)
        let slapEmbed2 = new Discord.MessageEmbed()
          .setDescription(`${message.author} у тебя все нормально? Иди сюда я тебя обниму`)
          .setColor("#343638")
          .setImage(picshug)
            if(member.id === message.author.id) return message.channel.send(slapEmbed2);
         let slapEmbed3 = new Discord.MessageEmbed()
          .setTitle('Реакция пощечина:')
          .setDescription(`**${message.author} дал(-а) пощечину ${member.user}**`)
          .setImage(pics)
          .setColor('#343638')
         return message.channel.send(slapEmbed3);

    },
};