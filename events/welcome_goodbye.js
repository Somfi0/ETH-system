const { MessageEmbed } = require("discord.js");
const client = require("../ETH-system");

client.on('guildMemberAdd', (member) =>{
    let emoji = '811331385108987944'
    let channelId = '726881104052748362'
    if(member.guild.id !='726881104052748358')return;
    const welcome = new MessageEmbed()
    .setDescription(`<a:bot_hello:818835310661468182> **Пользователь** ${member.user} **зашёл на сервер ETHEREUM**\n<@&760946409573711872> уважаемый!\n <#809438149213421578> **- канал, в котором собрана вся информация о каналах и ролях**`)
    .setColor("#343638")
    .setImage('https://media.discordapp.net/attachments/732668563407765507/818927338325934081/1.jpg?width=1020&height=422')
    .setFooter('Хорошего настроения')
    client.channels.cache.get(channelId).send(welcome)
})
