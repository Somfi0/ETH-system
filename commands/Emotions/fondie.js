const Discord = module.require('discord.js');
const fondieed = require('./fondie.json')

module.exports = {
    name: "fondie",
    description: "just fondie someone",
    run: async(client, message, args) => {
   
        var member= message.mentions.members.first();
        const pics = fondieed[Math.floor(Math.random() * fondieed.length)];
        let fondieEmbed = new Discord.MessageEmbed()
        .setColor('#343638')
        .setDescription(`${message.author} обнял всех`)
        .setTitle('Реакция обнимашки:')
        .setImage(pics)
        if(!member) return message.channel.send(fondieEmbed)
        let fondieEmbed2 = new Discord.MessageEmbed()
          .setDescription(`${message.author} самолюбие не лучшая твоя черта`)
          .setColor("#343638")
            if(member.id === message.author.id) return message.channel.send(fondieEmbed2);
         let fondieEmbed3 = new Discord.MessageEmbed()
          .setTitle('Реакция обнимашки:')
          .setDescription(`**${message.author} обнял(-а) ${member.user}**`)
          .setImage(pics)
          .setColor('#343638')
         return message.channel.send(fondieEmbed3);

    },
};