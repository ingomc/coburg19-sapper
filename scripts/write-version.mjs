import fs from 'fs';
import packageJson from '../package.json';
const { version } = packageJson;

const layoutFile = './src/routes/_layout.svelte';

fs.readFile(layoutFile, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/v\d+(\.\d+)+/g, 'v' + version);

  fs.writeFile(layoutFile, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
