var fs = require("fs");

var path = "resource/";

var file_path = fs.readdirSync(path);

file_path.forEach((file) => {
  fs.readFile(path + file, 'utf8', (err, text) => {
    if (err) throw err;
    console.log('File: ' + file);
    console.log(text);
  });
});
