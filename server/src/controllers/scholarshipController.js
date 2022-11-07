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
        
        let scholarships ;
        if (university != undefined || program != undefined){

            if (university != undefined && program != undefined){
                scholarships = await ScholarshipModel.find({    university:university,
                      program: program
                });
            }
            else if (university != undefined ){
                scholarships = await ScholarshipModel.find({    university:university  });
            }else{
                scholarships = await ScholarshipModel.find({    
                    program: program
              });
            }
            

        }
       
        else{
            scholarships = await ScholarshipModel.find();
        }

        res.status(200).send(scholarships)
        
    }
    catch(err){
        console.log("Inside scholarshipController find : " + err);
    }
}
