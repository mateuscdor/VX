const lusifar = require('../events');
const Heroku = require('heroku-client');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const fs = require('fs');
const Db = require('./sql/plugin');

const Language = require('../language');
const Lang = Language.getString('_plugin');
const NLang = Language.getString('updater');

let msg = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Bu Plugin Resmi Olarak Onaylanmıştır!* ✅' : '*This Plugin is Officially Approved by Lusifar!* ✅'
let unmsg = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Bu Plugin Resmi Değildir!* ❌' : '*Lusifar not accptt this Plugin please remove this!* ❌'

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});

let baseURI = '/apps/' + Config.HEROKU.APP_NAME;
var LANG = {
            unaffinfo: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Yüklenen Pluginin Tehlike Derecesi:* _%' : '*Danger Level of Installed Plugin:* _%',
            harmful: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Bu Plugin Zararlı Olduğundan Yüklenemez!*' : '*This Plugin Cannot Be Installed As It Is Harmful!*',
            duplicate: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Aynı Plugini 2 Defa Yüklemeyezsiniz!*' : '*You Cannot Install the Same Plugin 2 Times!*',
            limit: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Bu Plugin Güvenlik Sınırını Aşıyor!*\n*Zararlılık Yüzdesi:* _%' : '*This Plugin Exceeds Security Limit!*\n*Percentage of Harm:* _%',
            imside: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Varolan Pluginleri Tekrar Yükleyemezsin!*' : '*You Cant Reinstall Existing Plugins!*'
};


async function plkg(conn , mek, q) {
const from = mek.key.remoteJid
    if (q == '') return await conn.sendMessage(from, { text: Lang.NEED_URL + '.install https://gist.github.com/kavishkaya/4232b1c8c4734e1f06c3d991149c6fbd'}, { quoted: mek })
    
        try {
        var url = new URL(q);
    } catch {
        return await conn.sendMessage(from, { text: Lang.INVALID_URL } , { qouted:mek })
    }
    
    if (url.host === 'gist.github.com') {
        url.host = 'gist.githubusercontent.com';
        url = url.toString() + '/raw'
    } else {
        url = url.toString()
    }
    var response = await got(url);
    if (response.statusCode == 200) {
        // Plugin Name
        var plugin_name = response.body.match(/addCommand\({.*pattern: ["'](.*)["'].*}/);
        if (plugin_name.length >= 1) {
            plugin_name = "__" + plugin_name[1];
        } else {
            plugin_name = "__" + Math.random().toString(36).substring(8);
        }

        fs.writeFileSync('./plugins/' + plugin_name + '.js', response.body);
        try {
            require('./' + plugin_name);
        } catch (e) {
            fs.unlinkSync('/root/queendiana/plugins/' + plugin_name + '.js')
            return await conn.sendMessage(from, { text: Lang.INVALID_PLUGIN + ' ```' + e + '```'}, { quoted: mek });
        }
        var DEG = { level: 5 }
        if (response.body.includes('fs.')) DEG.level = DEG.level + 8
        if (response.body.includes('message.client.user.name')) DEG.level = DEG.level + 6
        if (response.body.includes('Buffer')) DEG.level = DEG.level + 14
        if (response.body.includes("require('fs')")) DEG.level = DEG.level + 9
        if (response.body.includes('quotedMessage')) DEG.level = DEG.level + 5
        if (response.body.includes('fs.unlinkSync')) DEG.level = DEG.level + 16
        if (response.body.includes('findAll')) DEG.level = DEG.level + 20
        if (response.body.includes('MessageType.location')) DEG.level = DEG.level + 9
        if (response.body.includes('message.client.user.jid')) DEG.level = DEG.level + 8
        if (response.body.includes('exec')) DEG.level = DEG.level + 14
        if (response.body.includes('setMessage')) DEG.level = DEG.level + 22
        if (response.body.includes('/sql/notes') || response.body.includes('/sql/lydia') || response.body.includes('/sql/plugin') || response.body.includes('/sql/greetings') || response.body.includes('/sql/filters')) DEG.level = DEG.level + 33
        if (response.body.includes('neofetch')) DEG.level = DEG.level + 12
        if (response.body.includes('groupMetadata')) DEG.level = DEG.level + 29
        if (response.body.includes('similarity')) DEG.level = DEG.level + 18
        if (response.body.includes('format')) DEG.level = DEG.level + 26
        var plugins = await Db.PluginDB.findAll()
        var find = '';
        await plugins.map((plugin) => { find += plugin.dataValues.name })
        if (find.includes(plugin_name)) {
            await conn.sendMessage(from, { text:  LANG.duplicate}, { quoted: mek })
            await new Promise(r => setTimeout(r, 400))
            fs.unlinkSync('/root/queendiana/plugins/' + plugin_name + '.js')
        }
        else if (response.body.includes('formation') && !q.includes('kavishkaya')) {
            await conn.sendMessage(from, { text:  LANG.harmful}, { quoted: mek })
            await new Promise(r => setTimeout(r, 400))
            fs.unlinkSync('/root/queendiana/plugins/' + plugin_name + '.js')
        } 
        else if ((response.body.includes('commands.map') || response.body.includes('PluginDB') || response.body.includes('groupRemove') || response.body.includes('groupAdd') || response.body.includes('groupMakeAdmin') || response.body.includes('groupDemoteAdmin') || response.body.includes('groupSettingChange') || response.body.includes('groupInviteCode') || response.body.includes('Math.round((new Date()).getTime() / 1000)') || response.body.includes('https://thiccyscarbonapi.herokuapp.com/?code=') || response.body.includes('filtreler.map') || response.body.includes('heroku.delete') || response.body.includes('heroku.patch') || response.body.includes('Chrome/80.0.3987.149 Mobile Safari/537.36') || response.body.includes('groupLeave') || response.body.includes('updateProfilePicture') || response.body.includes('blockUser') || response.body.includes("Language.getString('system_stats')") || response.body.includes("commits['all'].map") || response.body.includes('await git.fetch') || response.body.includes('jids.push')) && !q.includes('kavishkaya')) {
            await conn.sendMessage(from, { text:  LANG.imside}, { quoted: mek })
            await new Promise(r => setTimeout(r, 400))
            fs.unlinkSync('/root/queendiana/plugins/' + plugin_name + '.js')
        } 
        else {
            if (!q.includes('kavishkaya') && DEG.level > 99) {
                await conn.sendMessage(from, { text: LANG.limit + DEG.level + '_'}, { quoted: mek })
                fs.unlinkSync('/root/queendiana/plugins/' + plugin_name + '.js')
            }
             if (!q.includes('lkruwan') && DEG.level > 99) {
                await conn.sendMessage(from, { text: LANG.limit + DEG.level + '_'}, { quoted: mek })
                fs.unlinkSync('/root/queendiana/plugins/' + plugin_name + '.js')
            }
            else if (!q.includes('kavishkaya') && DEG.level < 100) {
                await Db.installPlugin(url, plugin_name)
                await new Promise(r => setTimeout(r, 400))
                await conn.sendMessage(from, { text:  Lang.UNOFF}, { quoted: mek })
                await new Promise(r => setTimeout(r, 400))
                await conn.sendMessage(from, { text:  LANG.unaffinfo + DEG.level + '_'}, { quoted: mek })
            }
            else if (!q.includes('lkruwan') && DEG.level < 100) {
                await Db.installPlugin(url, plugin_name)
                await new Promise(r => setTimeout(r, 400))
                await conn.sendMessage(from, { text:  Lang.UNOFF}, { quoted: mek })
                await new Promise(r => setTimeout(r, 400))
                await conn.sendMessage(from, { text:  LANG.unaffinfo + DEG.level + '_'}, { quoted: mek })
            }
            else {
                await new Promise(r => setTimeout(r, 400))
                await Db.installPlugin(url, plugin_name)
                await conn.sendMessage(from, { text:  Lang.INSTALLED}, { quoted: mek })
            }
        }
    }
}

module.exports =  plkg ;
