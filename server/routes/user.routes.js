const userController = require("../controllers/user.controller");
// const Joke = require("../models/joke.model");
// const Joke = require("../");

module.exports = app =>{
    app.post('/api/register', userController.register)
    app.post('/api/login', userController.login)
}