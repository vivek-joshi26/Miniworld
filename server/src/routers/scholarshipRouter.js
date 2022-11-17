var scholarshipController = require("../controllers/scholarshipController")
var express = require('express');
var router = express.Router();

// Register a scholarship
router.post("/register", scholarshipController.registerScholarship);

// Paginated API to get scholarships, can be utilized to get for specific university and programs as well
router.get("/", scholarshipController.find);


router.get("/:scholarshipId", scholarshipController.findById);

router.get("/search", scholarshipController.search);


// apply for a scholarship
router.post("/apply", scholarshipController.applyScholarship);

router.get("/apply/:applicantId", scholarshipController.findApplications);

module.exports = router;