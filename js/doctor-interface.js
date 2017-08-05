var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(medicalIssue, doctors) {
  doctors.forEach(function(doctor) {
    $('#results').append("<li>" + doctor.profile.last_name + ", " + doctor.profile.first_name + "</li>" + "<ul>" + doctor.specialties[0].description + "</ul>" + "<ul>" + doctor.practices[0].visit_address.street + " || " + doctor.practices[0].visit_address.city + ", " + doctor.practices[0].visit_address.state + "</ul>");
  });
  $('.reported-illness').text("Your search for '" + medicalIssue + "' returned these doctors:");
};

$(document).ready(function() {
  $('#medical-issue').submit(function(event) {
    var medicalIssue = $('#illness').val();
    var doctorObject = new Doctor(medicalIssue);
    event.preventDefault();
    $('#results').empty();
    $('.illness-display').show();
    doctorObject.getDoctor(medicalIssue, displayDoctor);
    $('#illness').val("");
  });
});
