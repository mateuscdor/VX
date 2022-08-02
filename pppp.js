const lusifarapi = require('textmaker-kaviyaah');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const NEED = "*🍭YOU MUST TYPE SOME WORDS*"
const desc = "Text to image Pack";
let wk = Config.WORKTYPE == 'public' ? false : true

const cantfind = "*can't find anything*"





case 'devil':

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


case 'bear':


    lusifarapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${q}`
    ).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'wolf':


    var topText, bottomText;
    if (q.includes('/')) {
        var split = q.split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = q ;
        bottomText = '';
    }
    lusifarapi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [`${topText}`, `${bottomText}`]).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'neon':


    lusifarapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
        `${q}`
    ).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case '2neon':


    lusifarapi.textpro("https://textpro.me/neon-text-effect-online-879.html",
        `${q}`
    ).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'light':


    lusifarapi.textpro("https://textpro.me/thunder-text-effect-online-881.html",
        `${q}`
    ).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'joker':


    lusifarapi.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${q}`
    ).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'ninja':


    var topText, bottomText;
    if (q.includes('/')) {
        var split = q.split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = q;
        bottomText = '';
    }
    lusifarapi.textpro("https://textpro.me/create-ninja-logo-online-935.html", [`${topText}`, `${bottomText}`]).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'glitter':


    lusifarapi.textpro("https://textpro.me/advanced-glow-text-effect-873.html",
        `${q}`
    ).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'bokeh':


    lusifarapi.textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${q}`
    ).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'marvel':


    var topText, bottomText;
    if (q.includes('/')) {
        var split = q.split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = q;
        bottomText = 'ㅤ';
    }
    lusifarapi.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [`${topText}`, `${bottomText}`]).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case '2marvel':


    var topText, bottomText;
    if (q.includes('/')) {
        var split = q.split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = q;
        bottomText = 'ㅤ';
    }
    lusifarapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [`${topText}`, `${bottomText}`]).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'avengers':


    var topText, bottomText;
    if (q.includes('/')) {
        var split = q.split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = q;
        bottomText = 'ㅤ';
    }
    lusifarapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [`${topText}`, `${bottomText}`]).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'glitch':


    var topText, bottomText;
    if (q.includes('/')) {
        var split = q.split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = q;
        bottomText = 'ㅤ';
    }
    lusifarapi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [`${topText}`, `${bottomText}`]).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'graf':


    var topText, bottomText;
    if (q.includes('/')) {
        var split = q.split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = q;
        bottomText = 'ㅤ';
    }
    lusifarapi.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html", [`${topText}`, `${bottomText}`]).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case '2graf':


    var topText, bottomText;
    if (q.includes('/')) {
        var split = q.split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = q;
        bottomText = 'ㅤ';
    }
    lusifarapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [`${topText}`, `${bottomText}`]).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'lion':


    var topText, bottomText;
    if (q.includes('/')) {
        var split = q.split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = q;
        bottomText = 'ㅤ';
    }
    lusifarapi.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [`${topText}`, `${bottomText}`]).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case '3neon':


    lusifarapi.textpro("https://textpro.me/neon-text-effect-online-963.html",
        `${q}`
    ).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'ice':


    lusifarapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${q}`
    ).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'space':


    var topText, bottomText;
    if (q.includes('/')) {
        var split = q.split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = q;
        bottomText = 'ㅤ';
    }
    lusifarapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [`${topText}`, `${bottomText}`]).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'smoke':


    lusifarapi.photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
        `${q}`
    ).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break





case 'fire':


    lusifarapi.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
        `${q}`
    ).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'harry':


    lusifarapi.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
        `${q}`
    ).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case '4neon':


    lusifarapi.photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
        `${q}`
    ).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'cemetery':


    lusifarapi.photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${q}`
    ).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break


case 'cup':


    lusifarapi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${q}`
    ).then(async(data) => {
        try {
        
           
            await conn.sendMessage(from ,{ image: { url : data }  , caption: config.CAPTION } , { quoted: mek })


        } catch (err) {
                    await conn.sendMessage(from , { text: cantfind}, { quoted: mek } )
        }
    });
break



