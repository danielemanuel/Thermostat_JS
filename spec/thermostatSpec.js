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
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('temperature decreasses with 1 degree', function(){
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function() {
    for (var i = 0; i < 11; i++){
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10)
  });
});
