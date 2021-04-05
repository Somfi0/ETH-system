const Discord = module.require('discord.js');
const pated = require('../jsons/pat.json')

module.exports = {
    name: "pat",
    description: "just pat someone",
    run: async(client, message, args) => {
   
        var member= message.mentions.members.first();
        const pics = pated[Math.floor(Math.random() * pated.length)];
        let patEmbed = new Discord.MessageEmbed()
        .setColor('#343638')
        .setDescription(`${message.author} погладил(-а) всех по голове`)
        .setTitle('Реакция погладил:')
        .setImage(pics)
        if(!member) return message.channel.send(patEmbed)
        let patEmbed2 = new Discord.MessageEmbed()
          .setTitle('еакция погладил:')
          .setDescription(`${message.author} ты расстроен(-а)? Давай я тебя поглажу`)
          .setColor("#343638")
          .setImage(pics)
            if(member.id === message.author.id) return message.channel.send(patEmbed2);
         let patEmbed3 = new Discord.MessageEmbed()
          .setTitle('Реакция погладил:')
          .setDescription(`**${message.author} полгадил(-а) ${member.user}**`)
          .setImage(pics)
          .setColor('#343638')
         return message.channel.send(patEmbed3);

    },
};