const express = require('express')
const app = express()
const port = 3000

// /SERVE STATIC FILE 

// const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//   res.send('Got a POST request')
// })

// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// })

// app.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })

// app.all('/bye', (req, res) => {
//   res.send('Hello By!')
// })

// app.use('/hello', (req, res) => {
//   res.send('Hello World!')
// })


// app.use('/', (req, res, next) => {
//   console.log('Accessing the secret section ...')
//   next() // pass control to the next handler
// })

// app.get('/secret', (req, res) => {
//   res.send('Hello World!')
// })



// app.use("/helmet",(req,res)=>{
//   res.send("THIS IS HELMET ROUTE");
// });

// app.use("/cloud2",(req,res)=>{
//   res.send("THIS IS CLOUD2 ROUTE");
// })
// app.use("/cloud",(req,res)=>{
//   res.send("THIS IS CLOUD ROUTE");
// })


// app.use("/",(req,res)=>{
//   res.send("THIS IS ERRROR");
// })



// app.get('ab?c',(req,res)=>{
//   res.send("THIS IS ABC")
// })

// app.get(/.*fly$/, (req, res) => {
//   res.send('/.*fly$/')
// })

// app.get('{/*splat}', async (req, res) => {
//   res.send('ok')
// })

// app.get('/example/a', (req, res) => {
//   res.send('Hello from A!')
// })

// app.get('/example/b', (req, res, next) => {
//   console.log('the response will be sent by the next function ...')
//   next()
// }, (req, res) => {
//   res.send('Hello from B!')
// })

// const cb0 = function (req, res, next) {
//   console.log('CB0')
//   next()
// }

// const cb1 = function (req, res, next) {
//   console.log('CB1')
//   next()
// }

// const cb2 = function (req, res,next) {
//   console.log('Hello from C!')
//   next()
// }

// app.get('/example/c', cb0, cb1, cb2 , function( req,res){
//   res.send("OKK")
// })

// const birdRouter = require("./router.js");

// app.use("/bird",birdRouter);

// const timelog = function(req,res,next){
//    console.log('Time: ', Date.now())
//   next();
// }

// app.use(timelog)

// app.get("/", (req,res)=>{
//   res.send("THIS IS HOME PAGE MAIN")
// })

// app.get("/dashboard", (req,res)=>{
//   res.send("THIS IS DASHBOArD PAGE MAIN")
// })

// app.get("/page", (req,res)=>{
//   res.send("THIS IS PAGE PAGE MAIN")
// })


//ERROR HANDLING




app.get("/",(req,res)=>{
  try{
    // res.send("THIS IS HOME")
    throw new Error("ERROR OCCURED")
  }
  catch(err){
    res.status(500).send("ERROR OCCURRED: " + err.message);
  }
})

app.get("/dashboard",(req,res)=>{
  try{
    res.send("THIS IS DASHBOARD")
  }
  catch(err){
    res.status(500).send("ERROR OCCURRED: ", err.message);
  }
})

app.get("/profile",(req,res)=>{
  try{
    res.send("THIS IS PROFILE")
  }
  catch(err){
    res.status(500).send("ERROR OCCURRED: ", err.message);
  }
})

app.get("/cart",(req,res)=>{
  throw Error("THIS IS ERRR|OR")
  // res.send("THIS IS cart")
})


// WILD CARD IS FOR REQUEST ERROR
app.use((err,req,res,next)=>{
  console.log("CATCH BY WILDCARD REQUEST HANDLER", err)
  res.status(500).send("ERORR AGYA CATCHED BY WILDCARD HANDLER"+ err)
})


// //WILD CARD FOR THE URL ERROR
app.use("/",(req,res)=>{
  res.status(500).send("ERORR AGYA CATCHED BY WILDCARD HANDLER")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
