const yaml = require('yaml');
const fs = require('fs');
const YAML = require('yaml');

const readFile = (filePath) => {
  // TODO check if file exists
  const file = fs.readFileSync(filePath, 'utf8');
  // TODO check valid YAML
  return YAML.parse(file);
};

module.exports = { readFile };
