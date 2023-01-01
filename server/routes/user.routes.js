const userController = require("../controllers/user.controller");
const {authenticate} = require('../config/jwt.config')
// const Joke = require("../models/joke.model");
// const Joke = require("../");

module.exports = app =>{
    app.post('/api/register', userController.register)
    app.post('/api/login', userController.login)
    app.get('/api/user/loggedIn',authenticate, userController.getLoggedInUser)
    app.get('/api/user/logout', userController.logOut)
}