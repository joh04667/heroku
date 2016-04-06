$(function() {
 var today = new Date();

 // pull out icky time stuff just get date
 $('.time').text(today.toString().match(/\w+ \w+ \d+ \d+/i));

 $.get("http://api.wunderground.com/api/18786a60dc483697/conditions/q/MN/Minneapolis.json").done(function(response) {
  var data = response.current_observation;
  $('.weather').append('<h3>'+ data.weather+'<h3>' + '<h4>' + data.temperature_string + '</h4>' + '<img src=' + data.image.url + ' />');
 });



}); //
