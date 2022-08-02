const config = require('../config');
const prefix = '.'
async function react(conn , mek, q) {
  
  const reactionMessage = {
    react: {
        text: q,
        key: mek.key
    }
}

const sendMsg = await conn.sendMessage(mek.key.remoteJid, reactionMessage)

}

module.exports =  react ;
