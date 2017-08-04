var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(results, medicalIssue) {
  results.forEach(function(result) {
    $('#results').text(medicalIssue + " " + result.data);
    console.log(result);
  });
  // $('#results').text("the illness you have typed is" + medicalIssue + ". Here are some doctors" + doctorData);
};

$(document).ready(function() {
  var doctorObject = new Doctor();
  $('#medical-issue').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#illness').val();
    $('#illness').val("");
    doctorObject.getDoctor(medicalIssue, displayDoctor);

  });
});
