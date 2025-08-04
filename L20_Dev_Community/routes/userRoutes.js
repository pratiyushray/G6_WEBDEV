const express = require("express");
const { registerUser} = require("../controllers/userController");
const router = express.Router();

router.use(function (req,res,next){
    console.log("THIS IS ROUTER USER VALA MIDDLEWARE");
    next();
})

router.post("/register", registerUser)





module.exports = router;