

$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#city-weather').submit(function(){
    var city = $('#city').val();
    var weather = lookupWeather(city);
    // console.log(weather);
    // $('#ajax-temperature').text(weather.responseJSON.main.temp);
  });

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

 function lookupWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var token = '&APPID=f180ca4ce410541755d28824b3c2f10d';
  console.log(city)
  return $.get(url + city + token, function(data) {
    $('#ajax-temperature').text(data.main.temp);
  });
 }

});
