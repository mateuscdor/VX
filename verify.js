const exec = require('child_process').exec;
const os = require("os");
async function startdiana() {
  var sdn = 'RUN git  https://github.com/methu45/VX /root/queendiana' + '\n'
  exec('sed -n 3p /root/queendiana/VX/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("😒 Fake User Found •• Only For QUEEN DIANA-Bot Users !!");
    }
  })
}
     
module.exports = startdiana
