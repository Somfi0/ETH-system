const Discord = module.require('discord.js');
const nomed = require('./nom.json')

module.exports = {
    name: "nom",
    description: "just nom someone",
    run: async(client, message, args) => {
   
        var member= message.mentions.members.first();
        const pics = nomed[Math.floor(Math.random() * nomed.length)];
        let nomEmbed = new Discord.MessageEmbed()
        .setColor('#343638')
        .setDescription(`${message.author} обнял всех`)
        .setTitle('Реакция обнимашки:')
        .setImage(pics)
        if(!member) return message.channel.send(nomEmbed)
        let nomEmbed2 = new Discord.MessageEmbed()
          .setDescription(`${message.author} самолюбие не лучшая твоя черта`)
          .setColor("#343638")
            if(member.id === message.author.id) return message.channel.send(nomEmbed2);
         let nomEmbed3 = new Discord.MessageEmbed()
          .setTitle('Реакция обнимашки:')
          .setDescription(`**${message.author} обнял(-а) ${member.user}**`)
          .setImage(pics)
          .setColor('#343638')
         return message.channel.send(nomEmbed3);

    },
};