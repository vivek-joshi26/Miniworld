const ScholarshipModel = require("../models/Scholarship")



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
