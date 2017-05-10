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
describe('Saving mod on', function() {
  it('checks if saving mod is on ', function() {
    thermostat.powerSavingOn();
    expect(thermostat.powerSave).toBe(true);
  });

  it('checks the temperature is at 25 degrees', function(){
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  });
});

describe('Saving mod off', function() {
  it('checks if saving mod is off ', function() {
    thermostat.powerSavingOff();
    expect(thermostat.powerSave).toBe(false);
  });
});

});
