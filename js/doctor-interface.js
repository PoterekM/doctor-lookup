var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(doctors, medicalIssue) {
  doctors.forEach(function(doctor) {
    $('#results').append(medicalIssue + "<li>" + doctor.profile.last_name + ",   " + doctor.profile.first_name + "</li>");
    console.log(doctor.profile);
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
