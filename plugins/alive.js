const config = require('../config');
const prefix = '.'
async function alive(conn , mek) {
  const from = mek.key.remoteJid

  var alivemsg = ''
	if (config.ALIVEMSG == 'default') alivemsg = '```👋 ```Hey there, I\'m alive now```\n\n_Version:_ ```' + config.VERSION + '```\n\n_POWERED BY KAVIYAAH``` \n\n\n'
  if (!config.ALIVEMSG == 'default') alivemsg = config.ALIVEMSG
const alivebuttond = [
{buttonId: prefix +'menu',  buttonText: {displayText: 'MENU'}, type: 1},
{buttonId: prefix +'owner', buttonText: {displayText: 'OWNER'}, type: 1},
]
await conn.sendMessage(from, { image: {url: config.ALIVE_LOGO  }, caption: alivemsg , footer: 'Queen Diana' , buttons: alivebuttond , headerType: 4} , { quoted: mek } )				
  }

module.exports =  alive ;
