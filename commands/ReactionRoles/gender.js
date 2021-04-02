

const { MessageEmbed } = require('discord.js')

module.exports ={
    name: 'gender',

    run : async(client, message) =>{
        message.delete();
        const gender = new MessageEmbed()
        .setColor("#343638")
        .setTitle("***ЧТОБЫ ВЫБРАТЬ ПОЛ НАЖМИТЕ НА РЕАКЦИЮ!***")
        .setDescription("<a:14:781899382962126915> - <@&726906806072246414>  <a:13:781899382697754666> - <@&726906576891412541>")
        .setImage("https://i.pinimg.com/originals/b1/22/66/b122663bf418f48012ca5c123a9f00b0.gif")
        const msg = await message.channel.send(gender)
        await msg.react('<a:14:781899382962126915>')
        await msg.react('<a:13:781899382697754666>')
    }
}