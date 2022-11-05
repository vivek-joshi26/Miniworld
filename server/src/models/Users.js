const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName : {
        type: String,
        trim: true
    },
    lastName : {
        type: String,
        trim: true
    },
    age : {
        type: Number,
        trim: true
    },
    emailId : {
        type: String,
        trim: true
    },
    password : {
        type: String,
        trim: true
    },
    university : {
        type: String,
        trim: true
    },
    program : {
        type: String,
        trim: true
    }
});


const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;