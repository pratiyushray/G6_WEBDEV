const express = require('express')
const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })
const app = express()
const port = 3000

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const extension = file.originalname.split(".");

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + "."+ extension[extension.length-1])
  }
})

const upload = multer({ storage: storage })

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    console.log(req.body);
    console.log(req.file)
    return res.redirect("/home")
})

app.post('/profile2', upload.single('avatar'), function (req, res, next) {
    console.log(req.body);
    console.log(req.file)
    return res.redirect("/home")
})



/////// TEMPLATE ENGINE : HANDLEBARS
var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get("/home",(req,res)=>{
  res.render("home.hbs",{
    studentName: "Jitendra",
    studentClass: "G6"
  })
} )

app.get("/products",(req,res)=>{
  res.render("products.hbs",{
    products: ["WATCHES", "SHIRTS", "SHOES"]
  })
} )


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
