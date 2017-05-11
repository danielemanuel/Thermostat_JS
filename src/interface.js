

$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#power-saving-on').click(function() {
    thermostat.powerSavingOn();
    $('#power-saving-on').text('on');
    updateTemperature();
  });

  $('#power-saving-off').click(function() {
    thermostat.powerSavingOff();
    $('#power-saving-off').text('off');
    updateTemperature();
  });

 function updateTemperature() {
   $('#temperature').text(thermostat.temperature);
   $('#temperature').attr('class', thermostat.energyUsage());
 }
});
