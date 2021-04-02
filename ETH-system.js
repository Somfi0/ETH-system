const {Collection, Client, Discord, MessageEmbed} = require('discord.js')
const fs = require('fs')
const mongoose = require('mongoose')
const client = new Client({
    disableEveryone: true,
    partials : ["MESSAGE", "CHANNEL", "REACTION"]
});


mongoose.connect('mongodb+srv://Somfii00:ferari2662@cluster0.qllal.mongodb.net/Data', {
    useUnifiedTopology : true,
    useNewUrlParser: true,
}).then(console.log('conect to db'))


const config = require('./config.json')
const token = config.token
client.commands = new Collection();
module.exports = client;
client.aliases = new Collection();
client.categories = fs.readdirSync('./commands/');
["command", ].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});


    client.on('messageReactionAdd', async(reaction, user) => {
        if(reaction.message.partial) await reaction.message.fetch();
        if(reaction.partial) await reaction.fetch();
        if(user.bot) return;
        if(!reaction.message.guild) return;
        if(reaction.message.id === '813365185992458240'){
            if(reaction.emoji.name === '13') {
                await reaction.message.guild.members.cache.get(user.id).roles.add('726906576891412541')
            }
        }
        if(reaction.message.id === '813365185992458240'){
            if(reaction.emoji.name === '14') {
                await reaction.message.guild.members.cache.get(user.id).roles.add('726906806072246414')
            }
        }

    })
    client.on('messageReactionRemove', async(reaction, user) => {
        if(reaction.message.partial) await reaction.message.fetch();
        if(reaction.partial) await reaction.fetch();
        if(user.bot) return;
        if(!reaction.message.guild) return;
        if(reaction.message.id === '813365185992458240'){
            if(reaction.emoji.name === '13') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove('726906576891412541')
            }
        }
        if(reaction.message.id === '813365185992458240'){
            if(reaction.emoji.name === '14') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove('726906806072246414')
            }
        }    })

    client.login(token)