

const Axzi = require("../Axzi");
const GM = "it sends good morning message";
const GN = "it sends Night message";

Axzi.addCommand(
  { pattern: ["gm"], desc: GM, sucReact: "π", category: [ "chat", "all" ] },
  async (message, client) => {
    var r_text = new Array();

    r_text[0] = "βπGoodβ βmorningβπ₯°β ";
    r_text[1] = "βοΈπΊπππ ππππππππ π ";
    r_text[2] = "ππΆπππ π»πππππππ π₯° ";
    r_text[3] = "πππΌπΌπ± ππΊπΌπΏπ»πΆπ»π΄ πΈ ";
    r_text[4] = "π»ππΈπΈπ­ πΆπΈπ»π·π²π·π° π ";
    r_text[5] = "πΌππππ πππ‘ππππ πΆ ";
    r_text[6] = "πβΌβββ πβββ‘ββββ π₯° ";

    const i = Math.floor(7 * Math.random());

    await client.sendMessage(
      message.client.jid,
      { text: r_text[i] + message.client.name },
      { quoted: message }
    );
    
  }
);

Axzi.addCommand(
  { pattern: ["gn"], desc: GN, sucReact: "π", category: ["chat", "all"] },
  async (message, client) => {
    var r_text = new Array();

    r_text[0] = "πππ€π€π ππ£ππππ© π«β¨";
    r_text[1] = "π€ππΈπΈπ­ π§ββπ·π²π°π±π½ βοΈβ¨";
    r_text[1] = "πβ‘α α α± πβ©Ι¨β‘Ο¦Ζ¬ π";
    r_text[3] = "πΦΦΦΥͺ β­οΈΥ²Γ­ΦΥ°Τ΅ π";
    r_text[4] = "πααͺαͺα πααααΌα’ π«β¨";

    const i = Math.floor(5 * Math.random());

    await client.sendMessage(
      message.client.jid,
      { text: r_text[i] + message.client.name },
      { quoted: message }
    );
    
  }
);
