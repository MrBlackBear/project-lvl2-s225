import genDiff from '../src/genDiff';

const expected = '{\n    host: hexlet.io\n  + timeout: 20\n  - timeout: 50\n  - proxy: 123.234.53.22\n  + verbose: true\n}';

test('json', () => {
  const firstFile = `/home/dream/SecondProject/project-lvl2-s225/__tests__/__fixtures__/before.json`;
  const secondFile = `/home/dream/SecondProject/project-lvl2-s225/__tests__/__fixtures__/after.json`;
  const difference = genDiff(firstFile, secondFile);
  expect(difference).toEqual(expected);
});