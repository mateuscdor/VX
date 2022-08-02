/*
const lusifarapi = require('textmaker-kaviyaah');

case 'diaw':
const from = mek.key.remoteJid

    if (!q) return await conn.sendMessage(from , { text: "need text" }, { quoted: mek } )
lusifarapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${q}`
    ).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )  
        }
    });
break
	
*/



const events = require("../events");


events.cmd({ name : 'diabtest' , desc : 'nothing'}  , ( async (conn , mek , q) => {
  const from = mek.key.remoteJid
  await conn.sendMessage(from, { text: 'hi hello' }, { quoted: mek }) 
} 
           
))
    
