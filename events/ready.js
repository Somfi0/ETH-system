const client = require('../ETH-system')

client.on('ready', () => {
        client.user.setPresence({
            status: 'dnd',
            activity: {
              type: "WATCHING",
              name: `за сервером ETHEREUM || на котором ${client.users.cache.size} участников`
            }
          })
        console.log(`${client.user.username} ✅`)
    })