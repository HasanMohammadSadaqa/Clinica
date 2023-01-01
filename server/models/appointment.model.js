const mongoose = require('mongoose');
const AppointmentSchema = new mongoose.Schema({
    date: { type: Date },
    hour: { type: Number },
    reserved:{type:Boolean},
    note:{type:String}
}, { timestamps: true });
module.exports.Appointment = mongoose.model('Appointment', AppointmentSchema);
