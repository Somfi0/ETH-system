const Discord = module.require('discord.js');
const hug = require('../jsons/hug.json')
const cry = require('../jsons/cry.json')

module.exports = {
    name: "cry",
    description: "just cry someone",
    run: async(client, message, args) => {
   
        var member= message.mentions.members.first();
        const picshug = hug[Math.floor(Math.random() * hug.length)];
        const picscry = cry[Math.floor(Math.random() * cry.length)];
        let cryEmbed = new Discord.MessageEmbed()
        .setTitle('Реакция плач:')
        .setDescription(`${message.author} расплакался(-ась)...`)
          .setColor("#343638")
          .setImage(picscry)
        if(!member) return message.channel.send(cryEmbed)
        let cryEmbed2 = new Discord.MessageEmbed()
        .setColor('#343638')
        .setDescription(`У тебя депресия? иди сюда обниму милый(-ая) ${message.author}`)
        .setTitle('Реакция плач:')
        .setImage(picshug)  
            if(member.id === message.author.id) return message.channel.send(cryEmbed2);
         let cryEmbed3 = new Discord.MessageEmbed()
          .setTitle('Реакция плач:')
          .setDescription(`${message.author} расплакался(-ась) из-за ${member.user}`)
          .setImage(picscry)
          .setColor('#343638')
         return message.channel.send(cryEmbed3);

    },
};