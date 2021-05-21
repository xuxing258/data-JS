const express = require("express")
const app = express();
const {dirName} = require("./componets/cotrlos.js")




app.use(express.static('public'));
app.get("/img",dirName);
app.listen(3000,()=>{console.log("执行成功");});


