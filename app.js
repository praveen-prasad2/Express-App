const express = require("express")
const app = express()

app.use(express.urlencoded({extended:false



}))
const path = require("path")
app.get("/", (req, res) => {
   res.send("request working")
})
app.get("/main", (req, res) => {
   res.send("Hello")
})
app.get("/home", (req, res) => {
   res.sendFile(path.join(__dirname, "index.html"))
})


   // Form Data
   app.post("/home", (req, res) => {
      let a = req.body.username
      let p=req.body.password
      console.log(a);
      res.send(a+p)

      
   })


app.listen(5000, (err) => {
   if (err) {
      console.log("Program Errror404")
   } else {
      console.log("Success")
   }



})