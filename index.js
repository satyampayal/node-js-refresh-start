const express=require('express');
const app = express();

app.get("",(req,res)=>{
    console.log("send data by Browser",req.query);
    res.send("this,is home page,"+req.query.name);

});

app.get("/about ",(req,res)=>{
    res.send("this,isAbout us page");
});

app.get("/help ",(req,res)=>{
    res.send("this,isAbout us page");
});

app.listen(1000);