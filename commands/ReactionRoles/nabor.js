

const { MessageEmbed } = require('discord.js')

module.exports ={
    name: 'nabor',

    run : async(client, message, args) =>{
        const nabor = new MessageEmbed()
        .setTitle("Набор в команду 𝘠𝘶𝘮𝘪𝘬𝘰:")
        .setColor("#f5ec42")
        .setDescription("[ссылка на тест](https://forms.gle/JaXBG76hZDMvRMtK6)")
        .setImage("https://images-ext-1.discordapp.net/external/1JUO2bwcUkIvaF5tMtoq2HIDnXFKt97-15E6aM_43vs/https/i.gifer.com/3uvT.gif?width=360&height=202")
        message.channel.send(nabor)
    }
}