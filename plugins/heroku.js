const Config = require('../config');
const Heroku = require('heroku-client');
const got = require('got');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

async function setvar(conn , mek , q) {
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const botNumber = conn.user.id.split(':')[0]
  const isMe = botNumber.includes(senderNumber)
  if (!isMe) return
  if (!q) return
  const from = mek.key.remoteJid
   if ((varKey = q.split(':')[0]) && (varValue = q.split(':')[1])) {
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                [varKey]: varValue
            }
        }).then(async (app) => {
            await conn.sendMessage(from , { text: 'setted' }, { quoted: mek } )
        });
    } else {
        await conn.sendMessage(from , { text: 'err' }, { quoted: mek } )
    }


}
  module.exports =  setvar ;
