const fs = require("fs");
const inputFile = "./../fonts/phosphor-codes.css";
let raw_icons;
let raw_codes;

const tempDartClass = [];

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
    .match(/\\[a-z0-9](.*)\w+/gm);
};

raw_icons = readIcons();
raw_codes = readIconsCode();

const phosphorClassStart = `
/* This file is automatically generated
    Phosphor Icons for flutter
    visit: https://phosphoricons.com/
*/

import 'package:flutter/material.dart';

class PhosphorIconsData extends IconData {
  const PhosphorIconsData(int code)
      : super(
          code,
          fontFamily: 'Phosphor',
          fontPackage: 'flutter_phosphor_icons',
        );
}

class PhosphorIcons{
`;

tempDartClass.push(phosphorClassStart);

raw_icons.forEach((el, index) => {
  let name = el.replace("ph-", "").replace(/-/g, "_");
  let code = `${raw_codes[index].replace("\\", "0x")}`;
  tempDartClass.push(
    `static const IconData ${name} = PhosphorIconsData(${code});\n`
  );
  obj = {};
});

tempDartClass.push("}");

fs.writeFile("../lib/phosphor_icons.dart", tempDartClass.join('\n'), (err) => {
  if (err) throw err;
  console.log("Font data write complete");
});
