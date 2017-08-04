var apiKey = require('./../.env').apiKey;
///have been changing this from .apiKey to .exports but .apikey makes more sense becasue that's what is at the end of our get

function Doctor() {

}

Doctor.prototype.getDoctor = function(medicalIssue, displayDoctor) {
   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     var lastName = result.data;
     displayDoctor(medicalIssue, result.data);
      console.log(medicalIssue);
      console.log(lastName);
      console.log(displayDoctor);

    })
   .fail(function(error){
      console.log("fail");
    });
  };

exports.doctorModule = Doctor;
