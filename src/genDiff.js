import fs from 'fs';
import _ from 'lodash';


const parse = pathToFile => JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));

const genDiff = (before, after) => {
  const fileBefore = parse(before);
  const fileAfter = parse(after);

  const union = _.union(Object.keys(fileBefore), Object.keys(fileAfter));
  const result = union.reduce((acc, key) => {
    if (fileBefore[key] === fileAfter[key]) {
      return `${acc}    ${key}: ${fileBefore[key]}\n`;
    }
    if (key in fileBefore && key in fileAfter) {
      return `${acc}  + ${key}: ${fileAfter[key]}\n  - ${key}: ${fileBefore[key]}\n`;
    }
    if (key in fileBefore) {
      return `${acc}  - ${key}: ${fileBefore[key]}\n`;
    }

    return `${acc}  + ${key}: ${fileAfter[key]}\n`;
  }, '');

  return `{\n${result}}`;
};

export default genDiff;