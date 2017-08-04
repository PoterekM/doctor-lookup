var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(medicalIssue, doctorData) {
  doctorData.forEach(function(doctor) {
    $('#results').text(medicalIssue + " " + result.data.profile.last_name);
    console.log(doctor);
    console.log(doctorData);

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
