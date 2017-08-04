var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(doctors) {
  doctors.forEach(function(doctor) {
    $('#results').append("<li>" + doctor.profile.last_name + ",   " + doctor.profile.first_name + "</li>");
    console.log(doctor.specialties);
  });
};

var displayAilment = function(medicalIssue) {
  $('.reported-illness').text("here's what you searched for" + medicalIssue);
};

$(document).ready(function() {
  var doctorObject = new Doctor();
  $('#medical-issue').submit(function(event) {
    var medicalIssue = $('#illness').val();
    event.preventDefault();
    console.log(medicalIssue);
    $('#illness').val("");
    $('#results').empty();
    doctorObject.getDoctor(medicalIssue, displayDoctor);

  });
});
