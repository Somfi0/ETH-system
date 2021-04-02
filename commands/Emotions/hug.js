const Discord = module.require('discord.js');
const huged = require('../jsons/hug.json')

module.exports = {
    name: "hug",
    description: "just hug someone",
    run: async(client, message, args) => {
   
        var member= message.mentions.members.first();
        const pics = huged[Math.floor(Math.random() * huged.length)];
        let HugEmbed = new Discord.MessageEmbed()
        .setColor('#343638')
        .setDescription(`${message.author} обнял всех`)
        .setTitle('Реакция обнимашки:')
        .setImage(pics)
        if(!member) return message.channel.send(HugEmbed)
        let HugEmbed2 = new Discord.MessageEmbed()
          .setDescription(`${message.author} самолюбие не лучшая твоя черта`)
          .setColor("#343638")
            if(member.id === message.author.id) return message.channel.send(HugEmbed2);
         let HugEmbed3 = new Discord.MessageEmbed()
          .setTitle('Реакция обнимашки:')
          .setDescription(`${message.author} обнял(-а) ${member.user}`)
          .setImage(pics)
          .setColor('#343638')
         return message.channel.send(HugEmbed3);

    },
};