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
    expect(thermostat.getTemperature()).toEqual(10);
  });

  it('can be reset to default', function() {
    thermostat.up();
    thermostat.resetTemperature();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  describe('Saving mod on', function() {
    it('checks if saving mod is on ', function() {
      thermostat.powerSavingOn();
      expect(thermostat.powerSave).toBe(true);
    });

    it('has the temperature is at 25 degrees when PSM is on', function(){
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

    it('has a maximum temperature of 32 when PSM is off', function() {
      thermostat.powerSavingOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(32);
    });
  });

  describe('Energy usage', function() {
      it('shows low usage of energy, temperature < 18 degrees', function() {
        for(var i = 0; i < 3 ; i++){
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low usage');
      });

      it('shows maximum usage of energy, temperature > 25 degrees', function() {
        for(var i = 0; i < 6 ; i++){
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high usage');
      });

      it('shows medium usage of energy, temp between 25 && 18 ', function() {
        expect(thermostat.energyUsage()).toEqual('medium usage');
      });


  });

});
