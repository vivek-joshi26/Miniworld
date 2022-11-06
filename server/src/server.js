const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel =  require("./models/Users")
const cors = require("cors")
const userRouter = require("./routers/userRouter")

app.use(express.json());
app.use(cors());

const { mongoDB } = require('../config');

var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 100
};

mongoose.connect(mongoDB, options, (err, res) => {
    if (err) {
        console.log(err);
        console.log(`MongoDB Connection Failed`);
    } else {
        console.log(`MongoDB Connected`);
    }
});


app.get("/", function(req,resp){
    resp.send("Miniworld Endpoints");
});

app.use("/user", userRouter);


app.listen(8000, () => {
    console.log("Server is running on port 8000")
})


module.exports = app;