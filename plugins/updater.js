
const Config = require('../config');
const config = require('../config');
const events = require("../events");
const {
	default: makeWASocket,
	useSingleFileAuthState,
	DisconnectReason,
	getContentType
} = require('@adiwajshing/baileys')
const fs = require('fs')
const P = require('pino')

const simpleGit = require('simple-git');
const git = simpleGit();
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })
const { state, saveState } = useSingleFileAuthState('./session.json')
const Language = require('../language');
const Lang = Language.getString('updater');


events.cmd({ name : 'update' , desc : 'updater' , fromMe : true }  , ( async (conn , mek , q) => {
  const from = mek.key.remoteJid



const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
			const senderNumber = sender.split('@')[0]
			const botNumber = conn.user.id.split(':')[0]
			const pushname = mek.pushName || 'Sin Nombre'
			
			const isMe = botNumber.includes(senderNumber)
		

					if (!isMe) return
					 await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
       // reply('no updates')    
await  conn.sendMessage(from , { text: Lang.UPDATE }, { quoted: mek } )
    } else {

        var newzels = Lang.NEW_UPDATE ;
        commits['all'].map(
            (commit) => {
                newzels += '\n\n' +'🔹 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' ◁◁' + commit.author_name + '▷▷\n';
            }
        );
     
await  conn.sendMessage(from , { text: newzels }, { quoted: mek } )

    }


} 
           
))
