const faker = require("faker");
const MongoClient = require("mongodb").MongoClient;

// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

//server/dummydataScholarship.js

async function seedDB() {


    const { mongoDB } = require('./config');

    


    // Connection URL
    const uri = "mongodb+srv://cmpe297:cmpe297@project.bios0vn.mongodb.net/miniworld?retryWrites=true&w=majority";

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 100
    }, (err, res) => {
        if (err) {
            console.log(err);arr
            console.log(`MongoDB Connection Failed`);
        } else {
            console.log(`MongoDB Connected`);
            // load the bit array into the program from local file        
            
           
            
        }
    });

    try {
        //await client.connect();
        console.log("Connected correctly to server");

        const collection = client.db("miniworld").collection("users");

        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.
        //collection.drop();

        // make a bunch of time series data
        let usersData = [];
        var universityNameArray = ['California State University Long Beach', 'San Jose State University', 'San Francisco State University', 'Arizona State University', 'CSULA']; 
        var programArray = ['MSSE', 'MSCS', 'MSIS', 'PhD', 'Undergrad']; 
        var scholarshipAmountArray = [5000,6000,7000,8000,9000,10000,11000,12000,13000,14000,15000,20000,30000]; 
        var gpaArray = [3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4.0]; 
        var ageArray = [22,23,24,25,26,27,28,29,30,31,32,33,34]; 

        for (let i = 0; i < 20000; i++) {

            const universityName = universityNameArray[(Math.random() * universityNameArray.length) | 0]

            const firstName = faker.name.firstName()
            const lastName = faker.name.lastName()
           
            var domain = "@gmail.com"

            if(universityName == 'San Jose State University')
            {
                domain = "@sjsu.edu"
            }
            else if(universityName == 'San Francisco State University')
                {
                    domain = "@sfsu.edu"
            }
            else if(universityName == 'Arizona State University')
            {
                domain = "@asu.edu"
            }
            else if(universityName == 'Arizona State University')
            {
                domain = "@csu.edu"
            }
    


            const name = firstName + " " + lastName
            var age = ageArray[(Math.random() * ageArray.length) | 0]
            const emailId = firstName + "." + lastName + domain;
            const university = universityName
            const program = programArray[(Math.random() * programArray.length) | 0]
            var gpa = gpaArray[(Math.random() * gpaArray.length) | 0]
            const role = "Student"
            const password = "$2a$08$6nX3Nu/oarAPfyHG9tVLn.Li3UWpmWfQBY2EanM6Z1zYd6TRcoYh."
           

            const newUser = {
               
                "name" : name,
                "age" : age,
                "emailId" : emailId,
                "password" : password,
                "university" : university,
                "program" : program,
                "gpa" : gpa,
                "role": role
            }
            
            usersData.push(newUser);
        }
        //console.log(usersData)

        collection.insertMany(usersData);

        console.log("Database seeded! :)");

        
         await new Promise(resolve => setTimeout(resolve, 20000));
         process.exit()
        // client.close();
    } catch (err) {
        console.log(err.stack);
      //  client.close();
    }
}

seedDB();