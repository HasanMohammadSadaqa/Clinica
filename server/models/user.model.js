const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
// const myTime = moment(dateFromDB).format('hh:mm:ss')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    phone: {
        type: Number,
        required: [true, "Phone is required"],
        minlength: [10, "your phone must be at least 10 characters"]
    },
    birthday: {
        type: Date,
        required:["Birthday is required"],
        default: Date.now,
    },
    password: {
        type: String,
        required: ["password is required"],
        minlength:[8, "password must have at least 8 characters"]

    }
},
    { timestamps: true }
);

//create (getter and setter) a virtual confirm password to compare it with password we want to save it in our db
// and we use get() to extract information from the form and .set() to set the value from the form
UserSchema.virtual("confirm")
    .get(function(){
        return this._confirm
    })
    .set(function(value){
        this._confirm = value
    })


//now i want to compare actuall passwored with the virtual one 
UserSchema.pre("validate", function(next){
    if(this.password !== this.confirm){
        this.invalidate("confirm", "passwords must match")
    }
    //if not do the next step (save the user to db or show validation errors)
    next();
})

//but before store the user in db, please hash this password
UserSchema.pre("save", function(next){
    bcrypt.hash(this.password, 10)
        .then(hashedPassword => {
            this.password = hashedPassword;
            next();
        })
        .catch(err=>{
            console.log("HASHING PASSWORD DIDN'T WORK THO", err)
            next()
        });
});


const User = mongoose.model("User", UserSchema);
module.exports = User;