const ApplicationModel = require("../models/Application");
const ScholarshipModel = require("../models/Scholarship");
const ScholarshipApplicationModel = require("../models/ScholarshipApplication");
const UserModel = require("../models/Users");



exports.registerScholarship = ( req, res ) => {


    const scholarship = req.body;
    const newScholarship = new ScholarshipModel(scholarship);
    newScholarship.save((err, result) => {
        if (err){
            res
            .status(500)
            .send(JSON.stringify({ message: "Something went wrong!", err }));

        } else {
            res.send(JSON.stringify({newScholarship : result}));
        }
    });


}


exports.findById = async (req, res) => {
    try{
        console.log("param value:" + req.params.scholarshipId)
        const scholarship = await ScholarshipModel.findOne({_id: req.params.scholarshipId});
        console.log("Scholarship "+scholarship);
        if(scholarship === null){
            res.status(204).send("scholarship not present")
        }
        else {
            res.status(200).send(scholarship)
        }
    }
    catch(err){
        console.log("Inside scholarshipController findById");
    }

}




exports.find = async (req, res) => {
    try{
        var university = req.query.university
        var program = req.query.program
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const skipIndex = (page - 1) * limit;
        
        const results = {};
        if (university != undefined || program != undefined){

            if (university != undefined && program != undefined){
                results.results = await ScholarshipModel.find({    university:university,
                      program: program
                })
                .limit(limit)
                .skip(skipIndex);
            }
            else if (university != undefined ){
                results.results = await ScholarshipModel.find({    university:university  })
                .limit(limit)
                .skip(skipIndex);;
            }else{
                results.results = await ScholarshipModel.find({    
                    program: program
              }).sort({ scholarshipAmount: -1 })
              .limit(limit)
              .skip(skipIndex);;
            }
            

        }
       
        else{
            results.results = await ScholarshipModel.find().sort({ scholarshipAmount: -1 })
            .limit(limit)
            .skip(skipIndex);;
        }

        res.status(200).send(results)
        
    }
    catch(err){
        console.log("Inside scholarshipController find : " + err);
    }
}


exports.search= async (req, res) => {
    try{
        var search = req.query.search
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const skipIndex = (page - 1) * limit;
        
        const results = {};

        const query = { $text : { $search : search}};
        results.results = await ScholarshipModel.find(query).sort({ scholarshipAmount: -1 })
        .limit(limit)
        .skip(skipIndex);;
       

        res.status(200).send(results)
        
    }
    catch(err){
        console.log("Inside scholarshipController find : " + err);
    }
}



exports.applyScholarship = async( req, res ) => {


    const userId = req.body.userId;
    const scholarshipId = req.body.scholarshipId;

    console.log(userId + " " + scholarshipId)

    const scholarship = await ScholarshipModel.findOne({_id: scholarshipId}, {name:1, _id : 0});
    const user = await UserModel.findOne({_id: userId}, {name: 1, university: 1, program: 1, _id : 0});
   
    const application = {
        "applicantId": userId,
        "scholarshipId": scholarshipId,
        "scholarshipName": scholarship.name,
        "status" : "PENDING",
        "applicantUniversity": user.university,
        "applicantProgram": user.program,
        "dateApplied" : new Date(Date.now())
    };
    const newApplication = new ApplicationModel(application);
    newApplication.save((err, result) => {
        if (err){
            res
            .status(500)
            .send(JSON.stringify({ message: "Something went wrong!", err }));

        } else {
            res.send(JSON.stringify({newApplication : result}));
        }
    });
}



exports.applyScholarship2 = async( req, res ) => {


    const userId1 = req.body.userId;
    const scholarshipId = req.body.scholarshipId;

    console.log(userId1 + " " + scholarshipId)

    const scholarship = await ScholarshipModel.findOne({_id: scholarshipId}, {name:1, _id : 0});
    const user = await UserModel.findOne({_id: userId1}, {name: 1, university: 1, program: 1, emailId: 1, _id : 0});
    const scholarshipApplication = await ScholarshipApplicationModel.findOne({userId: userId1})

    const data = {
        "scholarshipId" : scholarshipId,
        "scholarshipName": scholarship.name,
        "status" : "PENDING",
        "dateApplied" : new Date(Date.now())
    }

    console.log(scholarshipApplication)
    if (scholarshipApplication === null || scholarshipApplication === undefined){
        console.log(scholarshipApplication)
        const completeData = {
            "userId" : userId1,
            "applicantEmailId" : user.emailId,
            "applicantName" : user.name,
            "applicantUniversity": user.university,
            "applicantProgram": user.program,
            "applications" : [data]
        }


        const newScholarshipApplication = new ScholarshipApplicationModel(completeData);
        newScholarshipApplication.save((err, result) => {
            if (err){
                res
                .status(500)
                .send(JSON.stringify({ message: "Something went wrong!", err }));
    
            } else {
                res.send(JSON.stringify({newScholarshipApplication : result}));
            }
        });


    }
    else{
        try {
            scholarshipApplication.applications.push(data);
            scholarshipApplication.save((err, result) => {
                if (err){
                    res
                    .status(500)
                    .send(JSON.stringify({ message: "Something went wrong!", err }));
        
                } else {
                    res.send(JSON.stringify({newScholarshipApplication : result}));
                }
            });
    

        } catch (error) {
            console.log(error)
        }
    }
}





exports.findApplications = async (req, res) => {

    console.log("date: " + new Date(Date.now()) )
    
    try{

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skipIndex = (page - 1) * limit;
    console.log(req.params.applicantId)
    
    const results = await ApplicationModel.find({    
    applicantId: req.params.applicantId
    }).sort({ dateApplied: -1})
    .limit(limit)
    .skip(skipIndex);
             
    res.status(200).send(results)
        
    }
    catch(err){
        console.log("Inside scholarshipController findApplications : " + err);
    }
}



exports.findApplicationsApplied = async (req, res) => {
    try{
        const scholarshipApplication = await ScholarshipApplicationModel.findOne({userId: req.params.userId})
        if(scholarshipApplication === null){
            res.status(204).send("scholarshipApplications not present")
        }
        else {
            res.status(200).send(scholarshipApplication)
        }
    }
    catch(err){
        console.log("Inside findApplicationsApplied findById");
    }

}