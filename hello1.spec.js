// test for hello.js
// execute test with: jasmine-node .

var HelloMyNameIs = require('./hello1.js');

describe("chapter 1: ", function() {
  var slimShady = new HelloMyNameIs();

  it('says Hello my name is Slim Shady', function() {
    var me = {
      name: "Slim Shady"
    };
    expect(slimShady.speak( me )).toEqual('Hello, my name is SLIM SHADY');
  });

  it('says Slim Shady', function() {
    var me = {
        name: "Slim Shady"
    };
    expect(slimShady.identify( me )).toEqual('SLIM SHADY');
  });
});
