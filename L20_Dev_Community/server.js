const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4500;

app.use(express.json());

app.use(function(req,res,next){
    console.log("THIS IS APPLICATION LEVEL MIDDLEWARE");
    next();
})

app.get("/",(req,res)=>{
    res.send("HELLO WORLD");
})

app.use("/api/user/",userRoute);




async function connectDb() {
  try {
    await mongoose.connect(process.env.CONNECTION_URI).then(() => {
      console.log("DATABASE CONNECTION SUCCESSFULLY");
    });
  } catch (err) {
    console.log("ERROR OCCURED: DATABASE ISSUE");
  }
}

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
  });
});

// console.log("DATA OF ENV: ",process.env);
