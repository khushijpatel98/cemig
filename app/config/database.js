const mongoose = require("mongoose");
const db = require("../models");

const { MONGO_URI } = process.env.DB_URL;

// mongoose.connect(db.url,function(err, db) {

//     if (err) throw err;  
//     var myobj = {
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//         '_id' : objId
//     };  

//     console.log(myobj);

//     db.collection("users").insertOne(myobj, function(err, res) {  
//         if (err) throw err;  
//         console.log("1 record inserted");  
//         console.log(res);  
//         db.close(); 

//     });
//     return res.status(200).json(myobj);
// });

exports.connect = () => {
  // Connecting to the database
  console.log("URL", db.url)
  mongoose
    .connect(db.url, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
