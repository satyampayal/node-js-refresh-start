const express=require('express');
const app = express();

app.get('',(req,res)=>{
    res.send("this,is home page");
});
app.get('/Aboutus ',(req,res)=>{
    res.send("this,isAbout us page");
});

app.listen(1000);