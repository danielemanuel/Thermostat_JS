'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSave = true;
}

Thermostat.prototype.getTemperature = function() {
    return this.temperature;
};

Thermostat.prototype.up= function() {
    return this.temperature +=  1;
};

Thermostat.prototype.down= function() {
  if(this.isMinTemperature()) {
    return;
  }
  this.temperature -=  1;
};

Thermostat.prototype.isMinTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.powerSavingOn = function() {
     this.powerSave = true;
};

Thermostat.prototype.powerSavingOff = function() {
     this.powerSave = false;
};
