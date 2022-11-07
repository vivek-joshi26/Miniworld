var scholarshipController = require("../controllers/scholarshipController")
var express = require('express');
var router = express.Router();

// Register a scholarship
router.post("/register", scholarshipController.registerScholarship);

// Fetch all the scholarships
router.get("/find", scholarshipController.find);


// Fetch scholarships based on program and university (both can be present or only 1 can be present)
router.get("/find/filtered", scholarshipController.findForProgramAndUniversity);


module.exports = router;