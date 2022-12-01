const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")


const UserSchema = new mongoose.Schema({
    name : {
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
    },
    gpa : {
        type: Number,
        trim: true
    },
    role : {
        type: String,
        trim: true
    }
});

  

UserSchema.pre('save', function(next){
    if(this.isModified('password')){
        bcrypt.hash(this.password, 8, (err, hash) => {
            if(err){
                return next(err);
            }

            this.password = hash;
            next();
        });
    }
});


UserSchema.methods.comparePassword = async function(password) {
    if(!password) throw new Error('Password is missing.');
    try{
        const result = await bcrypt.compare(password, this.password);
        return result;
    } catch(err){
        console.log('Error while comparing password : '+err.message);
    }
}



const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;