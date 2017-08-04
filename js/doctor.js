var apiKey = require('./../.env').apiKey;
///

function Doctor() {

}

Doctor.prototype.getDoctor = function(medicalIssue, displayDoctors) {
  console.log("Yes, we are working, captin Sparkle Farts!");
};

exports.doctorModule = Doctor;
