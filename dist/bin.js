#!/usr/bin/env node
const { exec } = require('child_process');
exec('npx degit https://github.com/ricardo-jrm/nova.git', (err, stdout, stderr) => {
  if (err) {
    return;
  }

  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});