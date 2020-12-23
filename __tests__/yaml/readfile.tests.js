const { TestScheduler } = require('jest');
const { readFile } = require('../../src/yaml');

test('read template and parse yaml', () => {
  const result = readFile('./__tests__/template1.yml');

  expect('AWSTemplateFormatVersion' in result).toBe(true);
});
