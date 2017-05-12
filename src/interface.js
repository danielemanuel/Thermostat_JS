
$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();

    displayWeather(city);
        debugger;
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=AIzaSyBmojkscRaRaL0sNyyG0BqolpKdQebuJik';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      console.log("got here")
     $('#current-temperature').text(data.main.temp);
    })
    debugger;
  };

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
  };
});
