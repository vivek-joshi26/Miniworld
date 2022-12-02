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

        const collection = client.db("miniworld").collection("scholarships");

        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.
        //collection.drop();

        // make a bunch of time series data
        let scholarshipData = [];
        var universityNameArray = ['California State University Long Beach', 'San Jose State University', 'San Francisco State University', 'Arizona State University', 'CSULA']; 
        var programArray = ['MSSE', 'MSCS', 'MSIS', 'PhD', 'Undergrad']; 
        var scholarshipAmountArray = [5000,6000,7000,8000,9000,10000,11000,12000,13000,14000,15000,20000,30000]; 


        for (let i = 0; i < 20000; i++) {

            const universityName = universityNameArray[(Math.random() * universityNameArray.length) | 0]
            const name = faker.name.firstName() + " " + faker.name.lastName() + " Scholarship for students"
            const creatorId = "6387ee711486d0f835a7a1e1";
            const university = universityName
            const program = programArray[(Math.random() * programArray.length) | 0]
            var description = "Scholarship opportunity for all students."
            if(program == 'MSSE' || program == 'MSCS' || program == 'MSIS')
                {
                    description = "Scholarship opportunity for Masters students."
            }
            else if(program == 'Undergrad')
                {
                    description = "Scholarship opportunity for Undergrad students."
            }
            else{
                description = "Scholarship opportunity for all students."
            }
            const scholarshipAmount =  scholarshipAmountArray[(Math.random() * programArray.length) | 0]

            const newScholarship = {
                "creatorId": creatorId,
                "name" : name,
                "description" : description,
                "university" : university,
                "program" : program,
                "scholarshipAmount" : scholarshipAmount
            }
            
            scholarshipData.push(newScholarship);
        }
       // console.log(scholarshipData)

        collection.insertMany(scholarshipData);

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