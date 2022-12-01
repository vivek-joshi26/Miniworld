const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel =  require("./models/Users")
const cors = require("cors")
const userRouter = require("./routers/userRouter")
const scholarshipRouter = require("./routers/scholarshipRouter")



const {readFileSync, promises: fsPromises, writeFileSync, writeFile, createWriteStream} = require('fs');
const path = require('path')


app.use(express.json());
app.use(cors());

const { mongoDB } = require('../config');

var bloomArray = [];

var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 100
};

mongoose.connect(mongoDB, options, (err, res) => {
    if (err) {
        console.log(err);arr
        console.log(`MongoDB Connection Failed`);
    } else {
        console.log(`MongoDB Connected`);
        // load the bit array into the program from local file        
        var filePath = path.join(__dirname, '/bloomfilter/example.txt');
        console.log("Bloomfilter backup file path: " , filePath)
        const contents = readFileSync(filePath, 'utf-8');
        const arr = contents.split(/\r?\n/);
        for(i in arr){
            if ( (arr[i]) != "NaN" ){
                bloomArray.push(parseInt(arr[i]))
            }
        }
        console.log("Updated the bloomArray with the backup values")
        console.log(bloomArray);
        updateBloomFilterBackup()
       
        
    }
});


function updateBloomFilterBackup(){
    var filePath = path.join(__dirname, '/bloomfilter/example.txt');
    writeFileSync(filePath, bloomArray.join('\n'))
}


app.get("/", function(req,resp){
    resp.send("Miniworld Endpoints");
});

app.use("/users", userRouter);

app.use("/scholarships", scholarshipRouter)


app.listen(8000, () => {
    console.log("Server is running on port 8000")
})


module.exports = app;
