var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(doctors, medicalIssue) {
  doctors.forEach(function(doctor) {
    $('#results').append("<li>" + doctor.profile.last_name + ", " + doctor.profile.first_name + " " + "</li>");
    console.log(doctor.specialties);
  });
};

var displayAilment = function(doctors, medicalIssue) {
  console.log("boop");
  $('.reported-illness').text("<p>" + "here's what you searched for" + medicalIssue + "</p>");
};

$(document).ready(function() {
  var doctorObject = new Doctor();
  $('#medical-issue').submit(function(event) {
    var medicalIssue = $('#illness').val();
    event.preventDefault();
    $('#results').empty();
    doctorObject.getDoctor(medicalIssue, displayAilment, displayDoctor);
    $('#illness').val("");
  });
});
