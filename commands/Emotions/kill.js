const Discord = module.require('discord.js');
const killed = require('./kill.json')

module.exports = {
    name: "kill",
    description: "just kill someone",
    run: async(client, message, args) => {
   
        var member= message.mentions.members.first();
        const pics = killed[Math.floor(Math.random() * killed.length)];
        let killEmbed = new Discord.MessageEmbed()
        .setColor('#343638')
        .setDescription(`${message.author} обнял всех`)
        .setTitle('Реакция обнимашки:')
        .setImage(pics)
        if(!member) return message.channel.send(killEmbed)
        let killEmbed2 = new Discord.MessageEmbed()
          .setDescription(`${message.author} самолюбие не лучшая твоя черта`)
          .setColor("#343638")
            if(member.id === message.author.id) return message.channel.send(killEmbed2);
         let killEmbed3 = new Discord.MessageEmbed()
          .setTitle('Реакция обнимашки:')
          .setDescription(`**${message.author} обнял(-а) ${member.user}**`)
          .setImage(pics)
          .setColor('#343638')
         return message.channel.send(killEmbed3);

    },
};