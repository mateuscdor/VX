const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Language = require('../language');
const Lang = Language.getString('stic');
const Config = require('../config');
const config = require('../config');
const { sms } = require('../lib/message');
const { imageToWebp, videoToWebp, writeExif } = require('../lib/stic')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep } = require('../lib/functions')
const fs = require('fs');

async function sticker(conn , mek ){
  if (config.WORKTYPE == 'private') {
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const botNumber = conn.user.id.split(':')[0]
  const isMe = botNumber.includes(senderNumber)
  if (!isMe) return
  const from = mek.key.remoteJid
  const v = sms(conn , mek)
  const isQuotedViewOnce = v.quoted ? (v.quoted.type === 'viewOnceMessage') : false
	const isQuotedImage = v.quoted ? ((v.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (v.quoted.msg.type === 'imageMessage') : false)) : false
	const isQuotedVideo = v.quoted ? ((v.quoted.type === 'videoMessage') || (isQuotedViewOnce ? (v.quoted.msg.type === 'videoMessage') : false)) : false
  if ((v.type === 'imageMessage') || isQuotedImage) { 
       const cstic = await conn.sendMessage(from , { text: Lang.C_STIC }, { quoted: mek } )
	var nameJpg = getRandom('')
	isQuotedImage ? await v.quoted.download(nameJpg) : await v.download(nameJpg)
	var stik = await imageToWebp(nameJpg + '.jpg')
	writeExif(stik, {packname: 'ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᵇʸ QUEEN DIANA', author: ''})
		.then(x => v.replyS(x))
     await conn.sendMessage(from, { delete: cstic.key })
  }else if ((v.type === 'videoMessage') || isQuotedVideo) {
	const cstic = await conn.sendMessage(from , { text: Lang.C_STIC }, { quoted: mek } )  
	var nameMp4 = getRandom('')
	isQuotedVideo ? await v.quoted.download(nameMp4) : await v.download(nameMp4)
         writeExif(stik, {packname: 'ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᵇʸ QUEEN DIANA', author: ''})
		.then(x => v.replyS(x))
      await conn.sendMessage(from, { delete: cstic.key })
} else {
	v.reply(Lang.NEED)
}
    
  }
	if (config.WORKTYPE == 'public' ) {
  const from = mek.key.remoteJid
  const v = sms(conn , mek)
  const isQuotedViewOnce = v.quoted ? (v.quoted.type === 'viewOnceMessage') : false
	const isQuotedImage = v.quoted ? ((v.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (v.quoted.msg.type === 'imageMessage') : false)) : false
	const isQuotedVideo = v.quoted ? ((v.quoted.type === 'videoMessage') || (isQuotedViewOnce ? (v.quoted.msg.type === 'videoMessage') : false)) : false
  if ((v.type === 'imageMessage') || isQuotedImage) { 
const cstic = await conn.sendMessage(from , { text: Lang.C_STIC }, { quoted: mek } )	  
  var nameJpg = getRandom('')
	isQuotedImage ? await v.quoted.download(nameJpg) : await v.download(nameJpg)
	var stik = await imageToWebp(nameJpg + '.jpg')
	writeExif(stik, {packname: 'ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᵇʸ QUEEN DIANA', author: ''})
		.then(x => v.replyS(x))
await conn.sendMessage(from, { delete: cstic.key })

  }else if ((v.type === 'videoMessage') || isQuotedVideo) {
	const cstic = await conn.sendMessage(from , { text: Lang.C_STIC }, { quoted: mek } )

	var nameMp4 = getRandom('')
	isQuotedVideo ? await v.quoted.download(nameMp4) : await v.download(nameMp4)
	var stik = await videoToWebp(nameMp4 + '.mp4')
	writeExif(stik, {packname: 'ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᵇʸ QUEEN DIANA', author: ''})
		.then(x => v.replyS(x))
	await conn.sendMessage(from, { delete: cstic.key })
} else {
	v.reply(Lang.NEED)
}

  }
  





}

module.exports =  sticker ;
