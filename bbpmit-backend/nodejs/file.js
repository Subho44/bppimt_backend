const fs = require('fs');
const os = require('os');

const userinfo = os.userInfo();
const systeminfo = {
    username:userinfo.username,
    platform:os.platform(),
    arch:os.arch(),
    cpus:os.cpus().length
};
const systemdata = `
username:${systeminfo.username}
platform:${systeminfo.platform}
arch:${systeminfo.arch}
cores:${systeminfo.cpus}
`
fs.writeFileSync('file.txt','all system info added: \n');
fs.appendFileSync('file.txt',systemdata);
const data = fs.readFileSync('file.txt','utf-8');

console.log(data);
