const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');//for any info on this assertion go to: https://github.com/mjackson/expect (toBe below)
      // if (res !== 44) {
      //   throw new Error(`Expected 44, but got ${res}.`)
      // }
    });
  });


  it('should async add two numbers', (done) => {
    utils.asyncAdd(2, 8, (sum) => {
      expect(sum).toBe(10).toBeA('number');
      done();
    });
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(6, (res) => {
      expect(res).toBe(36).toBeA('number');
      done();
    });
  });

  it('Should multiply two numbers', () => {
    var res = utils.square(6);
  expect(res).toBe(36).toBeA('number');
    // if (res !== 36) {
    //   throw new Error(`Expected 36, but got ${res}.`);
    //   }
    });
});



it('Should contain first and last name', () => {
  var user = {location: 'Herzo', age: 30};
  var res = utils.setName(user, 'Ania Filipiak');
  expect(res).toInclude({
    firstName: 'Ania',
    lastName: 'Filipiak'
  });
});

  //it('should expect some values', () => {
    // expect({name: 'Anna'}).toNotEqual({name: 'Ania'});// 'toBe' will not work with arrays... need to use: 'toEqual'
    // expect({name: 'Ania'}).toEqual({name: 'Ania'});
    // expect(12).toNotBe(11);
    //expect([2,3,4]).toInclude(2);
    //expect([2,3,4]).toExclude(1);
    //expect({
      //name: 'Ania',
      //age: 30,
      //location: 'Herzo'
  //  }).toInclude({
      //age: 30
  //  })
  //});
