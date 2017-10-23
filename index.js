#!/usr/bin/env node
console.info('wordpress theme assets builder');
const { spawn } = require('child_process');
const argv = process.argv.splice(2);
const cwd = process.cwd();
const npm = /^win/.test(process.platform) ? 'npm.cmd' : 'npm';
process.env.THEME_ROOT = cwd;
if (/dev/.test(argv)) {
    var sp = spawn(npm, ['run', 'dev'], { cwd: __dirname, stdio: 'inherit' });
    sp.on('error', (err) => {
        console.log(err);
    });
}
else {
    var sp = spawn(npm, ['run', 'pro'], { cwd: __dirname, stdio: 'inherit' });
    sp.on('error', (err) => {
        console.log(err);
    });
}







