var apiKey = require('./../.env').exports;
/// having exports up here breaks code

function Doctor() {

}

Doctor.prototype.getDoctor = function(medicalIssue, displayDoctors) {
  console.log("Yes, we are working, captin Sparkle Farts!");
};

exports.doctorModule = Doctor;
