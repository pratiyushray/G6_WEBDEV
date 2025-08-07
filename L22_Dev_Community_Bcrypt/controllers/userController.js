const User = require("../models/userModel");
const bcrypt = require("bcrypt");
// const generateToken = require("../utils/generateToken")
const validator = require("validator");



const registerUser = async (req,res) =>{
    const { firstName, lastName, emailId, password} = req.body;

    //VALIDATION
    if (!firstName || !emailId || !password){
        return res.status(400).send({message:"Please Add all mandatory fields"});
    }

    if (!validator.isEmail(emailId)){
        return res.status(400).send({message:"Give a Valid Email"});
    }

        if (!validator.isStrongPassword(password)){
        return res.status(400).send({message:"Please provide a Strong Password"});
    }

    //Check the user existing already in db or not
    const userExists = await User.findOne({emailId});

    if (userExists){
        return res.status(400).json({message: "Already Exist"});
    }


    //CREATE USER IN YOUR DATABASE

    try{
        const hashedPassword = await bcrypt.hash(password,10);
        console.log(hashedPassword);

        const newUser = await User.create({
        firstName,
        lastName,
        emailId,
        password:hashedPassword
    });

    await newUser.save();
    // const token = generateToken(newUser._id);

    
    return res.status(201).json({
        message:"USER REGISTERED",
        data:{
            firstName,
            emailId
        },

    });
    
    }catch(err){
        return res.status(500).send(err);
    }
}


const loginUser = async (req,res) => {
    const { emailId, password} = req.body;

    // VALIDATIONS 

    if (!emailId || !password){
        return res.status(400).send("PLEASE ADD ALL FIELDS");
    }

    if (!validator.isEmail(emailId)){
        return res.status(400).send({message:"Give a Valid Email"});
    }

    const userExists = await User.findOne({emailId});

    if (!userExists){
        return res.status(400).send("User Not Found")
    }

    try{
        //THIS IS NORMAL WAY TO DO PASSWORD CHECK
        // if (userExists.password != password){
        //     return res.status(400).send("NOT A CORRECT PASSWORD");
        // }


        const isMatched = await bcrypt.compare(password,userExists.password);
        if(!isMatched){
            return res.status(401).json({
                message: "Please give a correct password"
            })
        }

        // const token = generateToken(userExists);
        return res.status(201).json({
        message:"USER LOGIN",
        data: {
            emailId
        }


    });
    }catch(err){
        return res.status(400).json({
            err: err.message
        })
    }


}

module.exports = { registerUser , loginUser}