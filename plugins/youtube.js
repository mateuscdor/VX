const config = require('../config');
const fs = require('fs');
const yts = require( 'yt-search' )
const { yt720 ,  yt480 ,  yt360 } = require('../lib/ytmp4');
const ytmp3 = require('../lib/ytmp3');
const ytinfo = require('../lib/ytinfo');
const Language = require('../language');
const Lang = Language.getString('yt');
const prefix = '.'
const diathumb = fs.readFileSync('./media/diana.jpg');
async function song( conn , mek , name ) {
const from = mek.key.remoteJid
if (!name) return await conn.sendMessage(from , { text: Lang.N_SONG }, { quoted: mek } )
  
  
 //await conn.sendMessage(from ,{ image: { url : 'https://telegra.ph/file/3217c19d381ae34b38012.jpg' } , caption: config.CAPTION ,jpegThumbnail:diathumb} , { quoted: mek })

  
  let ytmsg = await ytinfo(name)
if (!ytmsg.thumbnail) {
await conn.sendMessage(from , { text: Lang.NOT_song }, { quoted: mek } )
} else {
const songbuttons = [
{buttonId: prefix +'dsong ' + ytmsg.yuturl, buttonText: {displayText: 'DOCUMENT'}, type: 1},
{buttonId: prefix +'asong ' + ytmsg.yuturl, buttonText: {displayText: 'AUDIO'}, type: 1},
]
await conn.sendMessage(from, { image: {url: ytmsg.thumbnail  }, caption: ytmsg.songmsg , footer: config.FOOTER , buttons: songbuttons , headerType: 4} , { quoted: mek } )				
}
}



async function dsong(conn , mek , q ) {
const from = mek.key.remoteJid	
if (!q) return await conn.sendMessage(from , { text: Lang.NOT_SONG }, { quoted: mek } )
if (!q.includes('youtu')) return await conn.sendMessage(from , { text: Lang.NOT_SONG }, { quoted: mek } )
let docsong = await ytmp3(q)
const docsongdown = await conn.sendMessage(from , { text: config.SONG_DOWN }, { quoted: mek } )
await conn.sendMessage(from, { delete: docsongdown.key })
const docsongup = await conn.sendMessage(from , { text: config.SONG_UP }, { quoted: mek } )
await conn.sendMessage(from , { document : { url : docsong.mp3  } , mimetype : 'audio/mpeg' , fileName : docsong.title + '.mp3' } , { quoted: mek })
await conn.sendMessage(from, { delete: docsongup.key })
}



async function asong(conn , mek , q ) {
const from = mek.key.remoteJid	
if (!q) return await conn.sendMessage(from , { text: Lang.NOT_SONG }, { quoted: mek } )
if (!q.includes('youtu')) return await conn.sendMessage(from , { text: Lang.NOT_SONG }, { quoted: mek } )
let docsong = await ytmp3(q)
const docsongdown = await conn.sendMessage(from , { text: config.SONG_DOWN }, { quoted: mek } )
await conn.sendMessage(from, { delete: docsongdown.key })
const docsongup = await conn.sendMessage(from , { text: config.SONG_UP }, { quoted: mek } )
await conn.sendMessage(from ,{ audio: { url: docsong.mp3 }, mimetype: 'audio/mp4' } , { quoted: mek })
await conn.sendMessage(from, { delete: docsongup.key })
}
/*
async function getyt(conn , mek , q) {
const from = mek.key.remoteJid	
if (!q) return await conn.sendMessage(from , { text: Lang.N_YT }, { quoted: mek } )
var srcmsg =  await conn.sendMessage(from , { text: Lang.S_YT }, { quoted: mek } )
try {
var arama = await yts(q);
} catch {
return await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
}
var mesaj = '';
arama.all.map((video) => {
mesaj += '🧞‍♂️ *' + video.title + '*' + '\n' + '*🧚‍♀️Duration:-* ' +  video.duration +  '\n' + '*📎Link:-* ' + video.url + '\n'+ '*📅time ago:-* ' + video.ago + '\n\n'
});
await conn.sendMessage(from , { text: '╔═══════════════╗\n║  *QUEEN DIANA YT SEARCH🎞️* ║\n╚═══════════════╝\n\n' + mesaj }, { quoted: mek } )
await conn.sendMessage(from, { delete: srcmsg.key })  
}

*/


async function getyt(conn , mek , q) {
const from = mek.key.remoteJid	
if (!q) return await conn.sendMessage(from , { text: Lang.N_YT }, { quoted: mek } )
var srcmsg =  await conn.sendMessage(from , { text: Lang.S_YT }, { quoted: mek } )
try {
var arama = await yts(q);
} catch {
return await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
}
var mesaj = '';
arama.all.map((video) => {
mesaj += `
*🧚Title :* _${video.title}_
*📎Link :* _${video.url}_
*⏰Duration :* _${video.timestamp}_
*👁Views :* _${video.views}_
*📅Time ago :* _${video.ago}_
*🌐Channel :* _${video.author.name}_
*🖇Channel Url :* _${video.author.url}_


`
});

var toltext = `
╔═══════════════╗
║  *QUEEN DIANA YT SEARCH 🎞️*      ║
╚═══════════════╝
`

await conn.sendMessage(from , { text: toltext + mesaj }, { quoted: mek } )
await conn.sendMessage(from, { delete: srcmsg.key })  
}

async function video( conn , mek , name ) {
const from = mek.key.remoteJid
if (!name) return await conn.sendMessage(from , { text: Lang.N_VID }, { quoted: mek } )
if (!name.includes('youtu')) return await conn.sendMessage(from , { text: Lang.N_VID }, { quoted: mek } )
var svid = name.replace("shorts/","watch?v=")
var s2vid = svid.replace("?feature=share","")
let ytmsg = await ytinfo(s2vid)
if (!ytmsg.thumbnail) {
await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
} else {
const vidbuttons = [
{buttonId: prefix +'vid720 ' + ytmsg.yuturl, buttonText: {displayText: '720P'}, type: 1},
{buttonId: prefix +'vid480 ' + ytmsg.yuturl, buttonText: {displayText: '480P'}, type: 1},
{buttonId: prefix +'vid360 ' + ytmsg.yuturl, buttonText: {displayText: '360P'}, type: 1}, 
]
await conn.sendMessage(from, { image: {url: ytmsg.thumbnail  }, caption: ytmsg.vidmsg , footer: config.FOOTER , buttons: vidbuttons , headerType: 4} , { quoted: mek } )				
}
}

async function yt480p(conn , mek , q ) {
const from = mek.key.remoteJid	
if (!q) return await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
if (!q.includes('youtu')) return await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
let docsong = await yt480(q)
const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
await conn.sendMessage(from, { delete: docsongdown.key })
const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
await conn.sendMessage(from ,{ video: { url : docsong.url }, caption: config.CAPTION } , { quoted: mek })
await conn.sendMessage(from, { delete: docsongup.key })
}



async function yt720p(conn , mek , q ) {
const from = mek.key.remoteJid	
if (!q) return await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
if (!q.includes('youtu')) return await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
let docsong = await yt720(q)
const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
await conn.sendMessage(from, { delete: docsongdown.key })
const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
await conn.sendMessage(from ,{ video: { url : docsong.url } , caption: config.CAPTION } , { quoted: mek })
await conn.sendMessage(from, { delete: docsongup.key })
}


async function yt360p(conn , mek , q ) {
const from = mek.key.remoteJid	
if (!q) return await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
if (!q.includes('youtu')) return await conn.sendMessage(from , { text: Lang.NOT_VID }, { quoted: mek } )
let docsong = await yt360(q)
const docsongdown = await conn.sendMessage(from , { text: config.VIDEO_DOWN }, { quoted: mek } )
await conn.sendMessage(from, { delete: docsongdown.key })
const docsongup = await conn.sendMessage(from , { text: config.VIDEO_UP }, { quoted: mek } )
await conn.sendMessage(from ,{ video: { url : docsong.url } , caption: config.CAPTION } , { quoted: mek })
await conn.sendMessage(from, { delete: docsongup.key })
}
module.exports = { song ,  asong ,  dsong , getyt , video , yt720p , yt480p , yt360p} 
