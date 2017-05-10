'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('temperature starts at 20 degrees', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('temperature increses with 1 degree', function(){
    expect(thermostat.up()).toEqual(21);
  });

  it('temperature decreasses with 1 degree', function(){
    expect(thermostat.down()).toEqual(19);
  });
});
