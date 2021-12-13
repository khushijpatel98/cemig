const db = require("../models");
// const User = db.user;
const mongoose = require("mongoose");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require("../models/user");
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';



class UserController {

    async register(req, res) {

        try {
            // Get user input
            const { first_name, last_name, email, password } = req.body;
        
            // Validate user input
            if (!(email && password && first_name && last_name)) {
              res.status(400).send("All input is required");
            }
        
            // check if user already exist
            // Validate if user exist in our database
            const oldUser = await user.findOne({ email });
        
            if (oldUser) {
              return res.status(409).send("User Already Exist. Please Login");
            }
        
            //Encrypt user password
            let encryptedPassword = await bcrypt.hash(password, 10);


            let objId = randomString(10);
        
            const bufferText = Buffer.from(objId, 'utf8');
            objId = bufferText.toString();
            console.log("objId ==", objId);
        
            // Create user in our database
            let userData = await user.create({
              first_name,
              last_name,
              email: email.toLowerCase(), // sanitize: convert email to lowercase
              password: encryptedPassword,
              '_id' : objId
            });
        
            // Create token
            const token = jwt.sign(
              { user_id: userData._id, email },
              'secret',
              {
                expiresIn: "2h",
              }
            );
            // save user token
            userData.token = token;
            console.log(userData)
            console.log(token)
        
            // return new user
            res.status(201).json(userData);
          } catch (err) {
            console.log(err);
          }
        
    }
    async login(req, res) {
        
    }

    async create(req, res) {

        console.log("CREATE CALL")
    
        // res.send({data : "tes2222tw"});
    
    
        
        // Validate request
        if (!req.body.name) {
            res.status(400).send({ message: "Content can not be empty!" });
            return;
        }

        console.log(db.url)
    
    
        let objId = randomString(10);
        
        const bufferText = Buffer.from(objId, 'utf8');
        objId = bufferText.toString();
        console.log("objId ==", objId);


        mongoose.connect(db.url,function(err, db) {

            if (err) throw err;  
            var myobj = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                '_id' : objId
            };  

            console.log(myobj);

            db.collection("users").insertOne(myobj, function(err, res) {  
                if (err) throw err;  
                console.log("1 record inserted");  
                console.log(res);  
                db.close(); 

            });
            return res.status(200).json(myobj);
        });
    
    
        // Create a Tutorial
        // const tutorial = new User({
        //     name: req.body.name,
        //     email: req.body.email,
        //     password: req.body.password,
        //     '_id' : objId
        // });
    
        // // Save Tutorial in the database
        // tutorial
        //     .save(tutorial)
        //     .then(data => {
        //     res.send(data);
        //     })
        //     .catch(err => {
        //     res.status(500).send({
        //         message:
        //         err.message || "Some error occurred while creating the Tutorial."
        //     });
        //     });
    
      
    }

    

}

const randomString = (size)=>{
  
    const chars = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let objectId = '';
    for (var i = size; i > 0; --i) objectId += chars[Math.floor(Math.random() * chars.length)];
    return objectId;
  }



const controller = new UserController();
module.exports = controller;