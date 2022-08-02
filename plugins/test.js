
const events = require("../events");


events.cmd({ name : 'hi' , desc : 'nothing'}  , ( async (conn , mek , q) => {
  const from = mek.key.remoteJid
  await conn.sendMessage(from, { text: 'hi hello' }, { quoted: mek }) 
} 
           
))
           
           
  



      
