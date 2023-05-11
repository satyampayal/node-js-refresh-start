const express=require('express');
const app=express();

const reqFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("please provide age");
    }
    else  if(req.query.age<18){
        resp.send("<h1>You cannot access this page</h1>");
    }
    else
       next();
};

app.use(reqFilter);

app.get('/',(req,resp)=>{
    resp.send('welcome to front page');
});

app.get('/help',(req,resp)=>{
    resp.send("hii wecome in help page");
});

app.listen(1000);