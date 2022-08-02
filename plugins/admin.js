
const Language = require('../language');
const Lang = Language.getString('admin');
const Config = require('../config');
const config = require('../config');
const { sms } = require('../lib/message');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep } = require('../lib/functions')

async function kick( conn , mek , q ) {
 if (config.WORK_TYPE == 'private') { 
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const botNumber = conn.user.id.split(':')[0]
  const isMe = botNumber.includes(senderNumber)
  const from = mek.key.remoteJid
  const isGroup = from.endsWith('@g.us')
  const groupMetadata = isGroup ? await conn.groupMetadata(from) : {}
  const groupMembers = isGroup ? groupMetadata.participants : []
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : false
  const isBotAdmin = isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false
  if (!isMe ) return
  if (!isGroup ) return
  if (!isBotAdmin)  return await conn.sendMessage(from , { text: Lang.IM_NOT_ADMIN }, { quoted: mek } )
  
  const m = sms(conn , mek )
  if (m.mentionUser[0] === undefined) return await conn.sendMessage(from , { text: Lang.GIVE_ME_USER }, { quoted: mek } )
  if (groupAdmins.includes(m.mentionUser[0])) return conn.sendMessage(from , { text: Lang.USER_IS_ADMIN }, { quoted: mek } )
  const users = m.mentionUser[0]
  if (Config.BANMSG == 'default') {
    
  await conn.sendMessage(from , { text: '@' + m.mentionUser[0].split('@')[0] + ' , ```' + Lang.BANNED + '```'}, { quoted: mek } )
  await conn.groupParticipantsUpdate(from, [m.mentionUser[0]] ,"remove" )
} else {
 await conn.sendMessage(from , { text: '@' + users.split('@')[0] + ' , ' + Config.BANMSG }, { quoted: mek } )
 await conn.groupParticipantsUpdate(from, [m.mentionUser[0]] ,"remove" )

}
 
 
 } else if (config.WORK_TYPE == 'public') {
 
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const botNumber = conn.user.id.split(':')[0]
  const isMe = botNumber.includes(senderNumber)
  const from = mek.key.remoteJid
  const isGroup = from.endsWith('@g.us')
  const groupMetadata = isGroup ? await conn.groupMetadata(from) : {}
  const groupMembers = isGroup ? groupMetadata.participants : []
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : false
  const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
  const isBotAdmin = isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false
  if (!isGroup ) return
  if (!isGroupAdmins) return await conn.sendMessage(from , { text: Lang.UR_NOT_ADMIN }, { quoted: mek } )
  if (!isBotAdmin)  return await conn.sendMessage(from , { text: Lang.IM_NOT_ADMIN }, { quoted: mek } )
  
  const m = sms(conn , mek )
  if (m.mentionUser[0] === undefined) return await conn.sendMessage(from , { text: Lang.GIVE_ME_USER }, { quoted: mek } )
  if (groupAdmins.includes(m.mentionUser[0])) return conn.sendMessage(from , { text: Lang.USER_IS_ADMIN }, { quoted: mek } )
  const users = m.mentionUser[0]
  if (Config.BANMSG == 'default') {
    
  await conn.sendMessage(from , { text: '@' + m.mentionUser[0].split('@')[0] + ' , ```' + Lang.BANNED + '```'}, { quoted: mek } )
  await conn.groupParticipantsUpdate(from, [m.mentionUser[0]] ,"remove" )
} else {
 await conn.sendMessage(from , { text: '@' + users.split('@')[0] + ' , ' + Config.BANMSG }, { quoted: mek } )
 await conn.groupParticipantsUpdate(from, [m.mentionUser[0]] ,"remove" )

}
 }
}

async function add(conn , mek , q )
{
if (config.WORK_TYPE == 'private') { 
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const botNumber = conn.user.id.split(':')[0]
  const isMe = botNumber.includes(senderNumber)
  const from = mek.key.remoteJid
  const isGroup = from.endsWith('@g.us')
  const groupMetadata = isGroup ? await conn.groupMetadata(from) : {}
  const groupMembers = isGroup ? groupMetadata.participants : []
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : false
  
  const isBotAdmin = isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false
  if (!isMe ) return
  if (!isGroup ) return
  if (!isBotAdmin)  return await conn.sendMessage(from , { text: Lang.IM_NOT_ADMIN }, { quoted: mek } )
  if(!q)  await conn.sendMessage(from , { text: Lang.E_USER }, { quoted: mek } )
  if(q.includes('+'))  await conn.sendMessage(from , { text: Lang.E_USER }, { quoted: mek } )
  if (Config.ADDMSG == 'default') {
    
 
  await conn.groupParticipantsUpdate(from, [q + "@s.whatsapp.net"] ,"add" )
  await conn.sendMessage(from , { text: '@' + q + ' , ```' + Lang.ADDED + '```'}, { quoted: mek } ) 
} else {
 
 await conn.groupParticipantsUpdate(from, [q + "@s.whatsapp.net"] ,"add" )
 await conn.sendMessage(from , { text: '@' + q + ' , ' + Config.ADDMSG }, { quoted: mek } )

}





}
else if (config.WORK_TYPE == 'public') { }
const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const botNumber = conn.user.id.split(':')[0]
  const isMe = botNumber.includes(senderNumber)
  const from = mek.key.remoteJid
  const isGroup = from.endsWith('@g.us')
  const groupMetadata = isGroup ? await conn.groupMetadata(from) : {}
  const groupMembers = isGroup ? groupMetadata.participants : []
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : false
  const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
  const isBotAdmin = isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false
  if (!isGroup ) return
  if (!isGroupAdmins) return await conn.sendMessage(from , { text: Lang.UR_NOT_ADMIN }, { quoted: mek } )
  if (!isBotAdmin)  return await conn.sendMessage(from , { text: Lang.IM_NOT_ADMIN }, { quoted: mek } )
  if(!q)  await conn.sendMessage(from , { text: Lang.E_USER }, { quoted: mek } )
  if(q.includes('+'))  await conn.sendMessage(from , { text: Lang.E_USER }, { quoted: mek } )
  if (Config.ADDMSG == 'default') {
    
 
  await conn.groupParticipantsUpdate(from, [q + "@s.whatsapp.net"] ,"add" )
  await conn.sendMessage(from , { text: '@' + q + ' , ```' + Lang.ADDED + '```'}, { quoted: mek } ) 
} else {
 
 await conn.groupParticipantsUpdate(from, [q + "@s.whatsapp.net"] ,"add" )
 await conn.sendMessage(from , { text: '@' + q + ' , ' + Config.ADDMSG }, { quoted: mek } )

}




}
module.exports =  { kick , add };
