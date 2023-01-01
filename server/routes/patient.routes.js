const PatientController = require('../controllers/patient.controller');
module.exports = function(app){
    app.get('/api', PatientController.index);
    app.post('/api/patients', PatientController.createPatient);
    app.post('/api/new/:num/:id', PatientController.newAppointment);
    app.put('/api/patients/:id', PatientController.updatePatient);
    app.delete('/api/patients/:id', PatientController.deletePatient);
}