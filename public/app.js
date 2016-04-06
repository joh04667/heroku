$(function() {
 var today = new Date();

 // pull out icky time stuff just get date
 $('h1').text('Now is: ' + today.toString().match(/\w+ \w+ \d+ \d+/i));





}); //
