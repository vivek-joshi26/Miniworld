const mongoose = require('mongoose')

const ScholarshipApplicationSchema = new mongoose.Schema({


    userId: {
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
    applications : [
        {
            scholarshipId: {
                type: mongoose.Schema.Types.ObjectId
            },
            scholarshipCreatorId: {
                type: mongoose.Schema.Types.ObjectId
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
]


}
)

const ScholarshipApplicationModel = mongoose.model("ScholarshipApplication", ScholarshipApplicationSchema)
module.exports = ScholarshipApplicationModel;