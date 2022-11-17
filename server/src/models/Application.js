const mongoose = require('mongoose')

const ApplicationSchema = new mongoose.Schema({


    applicantId: {
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
    
    scholarshipId: {
        type: String,
        trim: true
    },
    scholarshipCreatorId: {
        type: String,
        trim: true
    },
    scholarshipName: {
        type: String,
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
    }


}
)

const ApplicationModel = mongoose.model("application", ApplicationSchema)
module.exports = ApplicationModel;