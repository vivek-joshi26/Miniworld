const mongoose = require('mongoose')

const ScholarshipSchema = new mongoose.Schema({

    creatorId: {
        type: mongoose.Schema.Types.ObjectId
    },
    name : {
        type: String,
        trim: true
    },
    description : {
        type: String,
        trim: true
    },

    // should we create an array for university and program? because the same scholarship can be available for multiple universities and programs and in UI we can show the list of universities an programs
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
    },
    applications : [
        {
            applicantId: {
                type: mongoose.Schema.Types.ObjectId
            },
            applicantEmailId: {
                type: String,
                trim: true
            },
            applicantName: {
                type: String,
                trim: true
            },
            applicantUniversity: {
                type: String,
                trim: true
            },
            applicantProgram: {
                type: String,
                trim: true
            },
            applicantGPA: {
                type: Number,
                trim: true
            },
            status : {
                type: String,
                trim: true
            },
            scholarshipAmount: {
                type: Number
            },
            dateApplied: {
                type: Date
            },
            dateUpdated: {
                type: Date
            }
        }
    ]
});


const ScholarshipModel = mongoose.model("scholarship", ScholarshipSchema)
module.exports = ScholarshipModel;