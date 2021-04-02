const Discord = require('discord.js')
const zexed = require('../jsons/sex.json')

module.exports = {
name: "sex",
run: async (client, message, args) => {
  const user = message.mentions.users.first()
  let nonuser = new Discord.MessageEmbed()
  .setTitle('Ошибка:')
  .setDescription(`${message.author} Выберете пользователя`)
  .setColor('#343638')
  if(!user) return message.channel.send(nonuser)
  let bouser = new Discord.MessageEmbed()
  .setTitle('Ошибка:')
  .setDescription(`${message.author} Выберете пользователя который не являеться ботом`)
  .setColor('#343638')
  if(user.bot == true) return message.channel.send(bouser)
  let drochka = new Discord.MessageEmbed()
  .setTitle('Ошибка:')
  .setDescription(`${message.author} рука ваша верная слуга но найдите себе парня/девушку`)
  .setColor('#343638')
  if(user == message.author || message.author.id == user.id) return message.channel.send(drochka)
  let proposerID = message.author.id
  const sexpics = zexed[Math.floor(Math.random() * zexed.length)];

  let proposition = new Discord.MessageEmbed()
  .setTitle('Реакция секс:')
  .setDescription(`${message.author} предложил вам ${user} заняться сексом`)
  .setColor('#343638')

  message.channel.send(proposition).then(message =>{
    message.react('✅').then (() => message.react('⛔'));

    const filter = (reaction, sent) =>{
      return ['✅','⛔'].includes(reaction.emoji.name) && sent.id === user.id;
    };
    client.channels.cache.find(ch => ch.id === args[0])
    const proposer = message.guild.members.cache.find(p => p.id === proposerID)

    message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected =>{
      const reaction = collected.first()

      if(reaction.emoji.name === '✅') {
        let sex = new Discord.MessageEmbed()
        .setTitle('Реакция секс:')
        .setDescription(`${proposer} занялся(-ась) сексом с ${user}`)
        .setColor('#343638')
        .setImage(sexpics)
        message.channel.send(sex)
        message.delete(proposition);
      }
      if(reaction.emoji.name === '⛔') {
        let nosex = new Discord.MessageEmbed()
        .setTitle('Реакция секс:')
        .setDescription(`${user} отказал (-ла) вам ${proposer} в сексе`)
        .setColor('#343638')
        message.channel.send(nosex)
        message.delete(proposition)
      }
    })
    .catch(collected =>{
      let timeoff = new Discord.MessageEmbed()
      .setTitle('Реакция секс:')
      .setDescription(`Прости ${proposer} мы не услышали ответа от ${user}`)
      .setColor('#343638')
      message.channel.send(timeoff)
      message.delete(proposition)
    })
  })
}
}
