const express=require('express');
const app=express();

const port=200;

app.set('view engine','ejs');

app.get('/profile',(_,resp)=>{
    const user={
        name:"satyam payal",
        email:"satyampayal10@gmail.com",
        contact:9711,
        skills:["php","html","js"]
    }
        resp.render('profile',{user});
});

app.get("/login",(_,resp)=>{
    resp.render('login');
});

app.get("/contact",(_,resp)=>{
    resp.render('contact');
});

app.listen(port);