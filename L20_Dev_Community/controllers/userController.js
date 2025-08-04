const mongoose = require("mongoose");
const User = require("../models/UserModel");


const registerUser = async (req,res) => {
    const { firstName, lastName, emailId, password} = req.body;

    // WE WILL CHECK VALIDATION

    if(!firstName || !lastName || !emailId || !password){
        res.status(400).send({message: " PLEASE ADD ALL FIELDS"})
    }

    const alreadyUser = await User.findOne({emailId});
    // console.log(alreadyUser);

    if(alreadyUser){
        res.status(400).send({message: "User Already Registered"});
    }

    // MAPPING OBJECT => MODEL

    const newUser = new User({
        firstName,
        lastName,
        emailId,
        password
    })
    await newUser.save();
    res.status(201).json({message:"USER CREATED SUCCESSFULLY"});
}


module.exports = { registerUser };

// const loginUser = () => { 

// }