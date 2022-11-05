const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel =  require("./models/Users")
const cors = require("cors")

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://cmpe297:cmpe297@project.bios0vn.mongodb.net/miniworld?retryWrites=true&w=majority");


// testing basic get and post request
app.get("/getUsers", (req, res) => {

    UserModel.find({}, (err, result) => {
        if (err){
            console.log("Error in  UserModel.find , " + err)
        } else{
            res.json(result);
        }
    })


})



app.post("/createUser",async (req, res) => {
    

    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
})



app.listen(8000, () => {
    console.log("Server is running on port 8000")
})