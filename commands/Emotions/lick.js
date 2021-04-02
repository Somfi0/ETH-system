const Discord = module.require('discord.js');
const licked = require('./lick.json')

module.exports = {
    name: "lick",
    description: "just lick someone",
    run: async(client, message, args) => {
   
        var member= message.mentions.members.first();
        const pics = licked[Math.floor(Math.random() * licked.length)];
        let lickEmbed = new Discord.MessageEmbed()
        .setColor('#343638')
        .setDescription(`${message.author} обнял всех`)
        .setTitle('Реакция обнимашки:')
        .setImage(pics)
        if(!member) return message.channel.send(lickEmbed)
        let lickEmbed2 = new Discord.MessageEmbed()
          .setDescription(`${message.author} самолюбие не лучшая твоя черта`)
          .setColor("#343638")
            if(member.id === message.author.id) return message.channel.send(lickEmbed2);
         let lickEmbed3 = new Discord.MessageEmbed()
          .setTitle('Реакция обнимашки:')
          .setDescription(`**${message.author} обнял(-а) ${member.user}**`)
          .setImage(pics)
          .setColor('#343638')
         return message.channel.send(lickEmbed3);

    },
};