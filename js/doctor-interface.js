var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(medicalIssue, doctorData) {
  $('#results').text("the illness you have typed is" + medicalIssue + ".");
};

$(document).ready(function() {
  var doctorObject = new Doctor();
  $('#medical-issue').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#illness').val();
    $('#illness').val("");
    // doctorObject.getDoctor(medicalIssue, displayDoctors);
    $('#results').text("the illness you have typed is" + medicalIssue + ".");
    doctorObject.getDoctor(medicalIssue, displayDoctor);


  });
});
