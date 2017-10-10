const path = require("path");
const publicPath = path.join(__dirname,"../public");
const express = require('express');

const PORT = process.env.port || 8000;

const app = express();

app.use(express.static(publicPath));

app.get("/", (req,res)=>{
    res.render("index");
})


app.listen(PORT,()=>{
    console.log("server started");
});



console.log(__dirname+"/../public");
console.log("")