
$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#current-temperature').text(displayWeather($.session.get("city"));
  
  function postFormData() {
    $.ajax({
      type:'POST',
      data:dataString,
      url:'/city/new',
    });
  }

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current_city').val();
    displayWeather(city);
    postFormData();
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&APPID=650c8439d8d5cb38cb74c66ab402ac74';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      console.log("got here")
     $('#current-temperature').text(data.main.temp);
    })
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
