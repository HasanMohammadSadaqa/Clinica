const UserController = require("../controllers/user.controller");
const {authenticate} = require('../config/jwt.config')
// const Joke = require("../models/joke.model");
// const Joke = require("../");

module.exports = app =>{
    app.post('/api/register', UserController.register)
    app.post('/api/login', UserController.login)
    app.get('/api/user/loggedIn',authenticate, UserController.getLoggedInUser)
    app.get('/api/user/logout', UserController.logOut)
    app.get('/api/users', UserController.getAllUsers);
    app.get('api/user/:id', UserController.getUser);
    app.put('/api/update/:id', UserController.updateUser);
    app.delete('/api/users/:id', UserController.deleteUser);
    app.post('/api/new/:num/:id', UserController.newAppointment);
    app.post('/api/note/:id',UserController.addNote);
    app.get('/api/appointments', UserController.allAppointments);
    
    app.post('/api/appointments/date', UserController.dateAppointments);
    app.get('/api/appointments/:id', UserController.userAppointments);
    // app.get('/api/appointments/:id', ()=>console.log("==========================="));

}
