const exec = require('child_process').exec;
const os = require("os");
async function startdiana() {
  var sdn = 'RUN git  https://github.com/diabykavi/queendiabykaviaah /root/queendiana' + '\n'
  exec('sed -n 3p /root/queendiana/queendiabykaviaah/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("😒 Fake User Found •• Only For QUEEN DIANA-Bot Users !!");
    }
  })
}
     
module.exports = startdiana
