

const { MessageEmbed } = require('discord.js')

module.exports ={
    name: 'colorsbar',

    run : async(client, message, args) =>{
        const color = new MessageEmbed()
        .setTitle("Выберете себе цвет на свой вкус:")
        .setColor("#f5ec42")
        .setDescription("<:5052_googleblueheart:805888492260950127>‎‎‎‏‏‎ : Голубенький\n<:3680_googleredheart:805888492760072243> : Красненький\n<:GreenHeart:805888492420595752> : Зелененький\n<:5052_googleblueeheart:806077333604794399> : Синенький\n<:PurpleHeart:805888492323602483> : Фиолетовенький\n<:3680_googleorangeheart:806077311408799755> : Оранжевенький\n<:YellowHeart:805888492378128385> : Желтый\n<:whiteHeart:806077357805797406> : Беленький\n<:BlackHeart:805888492403949568> : Черненький\n<:pinkHeart:806077378803662858> : Розовенький")
        .setImage("https://media.discordapp.net/attachments/750777214525767780/805901050195476581/cd0ac53c65a93a2ccfabb720e1dcb0fe1.gif?width=432&height=223")
        .setFooter("Поспешу заметить тебе очень идет")
        message.channel.send(color)
    }
}