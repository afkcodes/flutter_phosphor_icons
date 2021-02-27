const fs = require("fs");
const inputFile = "./../font/phosphor-codes.scss";
let raw_icons;
let raw_codes;
let icons = [];

const readIcons = function () {
  return fs
    .readFileSync(inputFile)
    .toString()
    .match(/ph(.*)-\w+/gm);
};
const readIconsCode = function () {
  return fs
    .readFileSync(inputFile)
    .toString()
    .match(/\\[a-z](.*)\w+/gm);
};

raw_icons = readIcons();
raw_codes = readIconsCode();

raw_icons.forEach((el, index) => {
  let obj = {};
  obj.icon = el;
  obj.code = `$raw_codes[index].replace("\\", "0x")`;
  icons.push(obj);
  obj = {};
});

fs.writeFile("icons.txt", JSON.stringify(icons, null, 2), (err) => {
  if (err) throw err;
  console.log("Font data write complete");
});
