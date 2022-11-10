const mongoose = require('mongoose')

const ScholarshipSchema = new mongoose.Schema({
    name : {
        type: String,
        trim: true
    },
    description : {
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
    ,
    scholarshipAmount : {
        type: Number,
        trim: true
    }
});


const ScholarshipModel = mongoose.model("scholarship", ScholarshipSchema)
module.exports = ScholarshipModel;