const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    date: { type: Date },
    hour: { type: Number },
    reserved:{type:Boolean},
    note:{type:String}
}, { timestamps: true });
module.exports.Appointment = mongoose.model('Appointment', AppointmentSchema);


const PatientSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    phone: { type: Number },
    gender: { type: Boolean },
    birthDate: { type: Date },
    appointments:[AppointmentSchema],
}, { timestamps: true });


module.exports.Patient = mongoose.model('Patient', PatientSchema);