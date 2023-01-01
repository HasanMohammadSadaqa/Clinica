const { Patient,Appointment } = require('../models/patient.model');
// const { Appointment } = require('../models/appointment.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPatient = (request, response) => {
  const { firstName, lastName,email,password,phone,gender,birthDate } = request.body;
    Patient.create({
        firstName,
        lastName,
        email,
        password,
        phone,
        gender,
        birthDate,
    })
        .then(patient => response.json(patient))
        .catch(err => response.json(err));
}

// module.exports.newAppointment = (request, response) => {
//   const { id,date,num } = request.params;
//     const appointment=Appointment.create({
//         date,
//         hour:num,
//     })
//     .then(patient => response.json(patient))
//     .catch(err => response.json(err));

//     Patient.findOne({_id:id})
//     .then(patient=>patient.appointments.push(appointment))
//     .catch(err => response.json(err));
// }


module.exports.newAppointment = (request, response) => {
  const { id,num } = request.params;
  Appointment.create({
    hour: num
  })
  .then(appointment => {
    Patient.findOne({ _id: id })
    .then(patient => {
      patient.appointments.push(appointment);
      patient.save()
      .then(() => response.json(appointment))
      .catch(err => response.json(err));
    })
    .catch(err => response.json(err));
  })
  .catch(err => response.json(err));
  
}



module.exports.getPatient = (request, response) => {
    Patient.findOne({_id:request.params.id})
        .then(patient => response.json(patient))
        .catch(err => response.json(err))
}

module.exports.getAllPatients = (request, response) => {
    Patient.find({})
        .then(patients => response.json(patients))
        .catch(err => response.json(err))
}

module.exports.updatePatient = (request, response) => {
    Patient.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPatient => response.json(updatedPatient))
        .catch(err => response.json(err))
}

module.exports.deletePatient = (request, response) => {
    Patient.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

