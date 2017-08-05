var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(doctors, medicalIssue) {
  doctors.forEach(function(doctor) {
    $('#results').append("<li>" + doctor.profile.last_name + ", " + doctor.profile.first_name + " " + "</li>");
    console.log(doctor.specialties);
  });
  $('.reported-illness').text("Your search for '" + medicalIssue + "' returned these doctors:");
};



$(document).ready(function() {
  $('#medical-issue').submit(function(event) {
    var medicalIssue = $('#illness').val();
    var doctorObject = new Doctor(medicalIssue);
    event.preventDefault();
    $('#results').empty();
    doctorObject.getDoctor(medicalIssue, displayDoctor);

    $('#illness').val("");
  });
});
