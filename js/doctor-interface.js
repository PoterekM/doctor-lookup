// var apiKey = require('./../.env').apiKey;
var apiKey = "a47b406800ec21f758db433265785eb4";



$(document).ready(function() {
  $('#medical-issue').click(function() {
    var illness = $('#illness').val();
    $('#illness').val("");

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
  });
  });




//
//
// $(document).ready(function() {
//   var doctorObject = new Doctor();
//   $('#medical-issue').click(function() {
//     var illness = $('#illness').val()
//     $('#illness').val("");
//     doctorObject.getDoctor(illness);
//   });
// });
