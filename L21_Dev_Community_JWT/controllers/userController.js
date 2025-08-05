const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const generateToken = (user)=>{
    return jwt.sign({user},process.env.JWT_SECRET)

}

const registerUser = async (req,res) =>{
    const { firstName, lastName, emailId, password} = req.body;

    //VALIDATION

    if (!firstName || !emailId || !password){
        return res.status(400).send({message:"Please Add all mandatory fields"});
    }

    //Check the user existing already in db or not
    const userExists = await User.findOne({emailId});
    if (userExists){
        return res.status(400).json({message: "Already Exist"});
    }

    //CREATE USER IN YOUR DATABASE

    try{
        const newUser = await User.create({
        firstName,
        lastName,
        emailId,
        password
    });

    await newUser.save();
    const token = generateToken(newUser._id);

    
    return res.status(201).json({
        message:"USER REGISTERED",
        newUser:{
            firstName,
            emailId
        },
        token

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

    const userExists = await User.findOne({emailId});

    if (!userExists){
        return res.status(400).send("User Not Found")
    }

    try{
        if (userExists.password != password){
            return res.status(400).send("CHALA JAA...");
        }
        const token = generateToken(userExists);
        return res.status(201).json({
        message:"USER LOGIN",
        token

    });
    }catch(err){
        return res.status(400).json({
            err
        })
    }


}

module.exports = { registerUser , loginUser}