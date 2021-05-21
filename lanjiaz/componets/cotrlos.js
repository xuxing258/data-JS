const fs = require("fs");

// 读取目录文件名
exports.dirName =  function (req,res) {
  console.log(11)
    res.header("Access-Control-Allow-Origin","*");
    readfileDir(res,req.headers.host+req.url)
};

function readfileDir(res,url){
  fs.readdir("./public/img",function (err,success) {
    let result = success.map(item=>url+item)
    res.send(result)
  });
}