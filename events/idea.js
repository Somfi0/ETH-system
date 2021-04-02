const { MessageEmbed } = require("discord.js");
const client = require('../ETH-system')

client.on('message', async (message) =>{
    if(message.author.bot)return;
    if(message.channel.type === 'dm')return;
    if(message.guild.id != "726881104052748358")return;
    let channIdea = client.channels.cache.get('807270667685986304')
    if(message.channel.id === channIdea.id){
        message.delete()
        let ideaembed = new MessageEmbed()
        .setTitle(`${message.author.username} нужна помощь`)
        .setColor("#343638")
        .setDescription(`${message.author} хочет:\n ${message.content}`)
        .addField(`Оцените наданную помощь вам модерацей ETHERUM`, `Где:\n👍- Отлично\n\n👎- Ужасно`)
        .setThumbnail(message.author.avatarURL())
        .setTimestamp()
        const msg = await message.channel.send(ideaembed)
        await msg.react('👍')
        await msg.react('👎')
    }
})