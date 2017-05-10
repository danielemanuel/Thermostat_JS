'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE_PSM = 25;
  this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
  this.TEMPERATURE_LOW_USAGE = 18;
  this.powerSave = true;
}

Thermostat.prototype.getTemperature = function() {
    return this.temperature;
};

Thermostat.prototype.up= function() {
    if(this.maxTemperature()) {
      return;
    }
    return this.temperature +=  1;
};

Thermostat.prototype.down= function() {
  if(this.isMinTemperature()) {
    return;
  }
  this.temperature -=  1;
};

Thermostat.prototype.maxTemperature = function () {
  if(this.powerSave === true) {
    return this.temperature === this.MAXIMUM_TEMPERATURE_PSM
  }
  return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_OFF
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

Thermostat.prototype.resetTemperature = function() {
  return this.temperature = 20
};

Thermostat.prototype.energyUsage = function() {
  if(this.temperature < this.TEMPERATURE_LOW_USAGE) {
    return 'low usage';
  }
  if(this.temperature > this.MAXIMUM_TEMPERATURE_PSM) {
    return 'high usage';
  }
  return 'medium usage';
};
