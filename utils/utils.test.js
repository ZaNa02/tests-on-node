const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}.`)
  }
});

it('Should multiply two numbers', () => {
  var res = utils.square(6);

  if (res !== 36) {
    throw new Error(`Expected 36, but got ${res}.`);
    }
  });
