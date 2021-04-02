const Discord = module.require('discord.js');
const slaped = require('./slap.json')

module.exports = {
    name: "slap",
    description: "just slap someone",
    run: async(client, message, args) => {
   
        var member= message.mentions.members.first();
        const pics = slaped[Math.floor(Math.random() * slaped.length)];
        let slapEmbed = new Discord.MessageEmbed()
        .setColor('#343638')
        .setDescription(`${message.author} обнял всех`)
        .setTitle('Реакция обнимашки:')
        .setImage(pics)
        if(!member) return message.channel.send(slapEmbed)
        let slapEmbed2 = new Discord.MessageEmbed()
          .setDescription(`${message.author} самолюбие не лучшая твоя черта`)
          .setColor("#343638")
            if(member.id === message.author.id) return message.channel.send(slapEmbed2);
         let slapEmbed3 = new Discord.MessageEmbed()
          .setTitle('Реакция обнимашки:')
          .setDescription(`**${message.author} обнял(-а) ${member.user}**`)
          .setImage(pics)
          .setColor('#343638')
         return message.channel.send(slapEmbed3);

    },
};