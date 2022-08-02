const commdia = require("../bot")
const diacomm = commdia
const lusifarapi = require('textmaker-kaviyaah');
switch (diacomm) {
case 'diaw':
const from = mek.key.remoteJid

    if (!q) return conn.sendMessage(from , { text: "need text" }, { quoted: mek } )
lusifarapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${q}`
    ).then(async(data) => {
        try {
        
           
             conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                   conn.sendMessage(from , { text: cantfind}, { quoted: mek } )  
        }
    });
break
	
}
