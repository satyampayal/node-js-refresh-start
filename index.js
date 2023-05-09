const express=require('express');
const app=express();

app.get("",(req,resp)=>{
    resp.send("this is main page");
   
    
});

app.get("/help",(req,resp)=>{
    resp.send("this is help section");
    resp.send(`
    <input type="number" placeholder=" Enter name"/>
    `);
});

app.listen(45);