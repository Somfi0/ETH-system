const Discord = module.require('discord.js');
const pated = require('./pat.json')

module.exports = {
    name: "pat",
    description: "just pat someone",
    run: async(client, message, args) => {
   
        var member= message.mentions.members.first();
        const pics = pated[Math.floor(Math.random() * pated.length)];
        let patEmbed = new Discord.MessageEmbed()
        .setColor('#343638')
        .setDescription(`${message.author} обнял всех`)
        .setTitle('Реакция обнимашки:')
        .setImage(pics)
        if(!member) return message.channel.send(patEmbed)
        let patEmbed2 = new Discord.MessageEmbed()
          .setDescription(`${message.author} самолюбие не лучшая твоя черта`)
          .setColor("#343638")
            if(member.id === message.author.id) return message.channel.send(patEmbed2);
         let patEmbed3 = new Discord.MessageEmbed()
          .setTitle('Реакция обнимашки:')
          .setDescription(`**${message.author} обнял(-а) ${member.user}**`)
          .setImage(pics)
          .setColor('#343638')
         return message.channel.send(patEmbed3);

    },
};