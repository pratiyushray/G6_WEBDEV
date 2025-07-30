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



app.get('ab?c',(req,res)=>{
  res.send("THIS IS ABC")
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
