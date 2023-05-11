const express=require('express');
const app=express();

const reqFilter=require('./middle-ware');

// for make group 
const route=express.Router();
route.use(reqFilter);

//app.use(reqFilter);

app.get('/',(req,resp)=>{
    resp.send("welcome to our website");
});

//app.get('/about',reqFilter,(req,resp)=>{
 //   resp.send("welcome to our website about ");
//});
route.get('/about',(req,resp)=>{
    resp.send("welcome to our website about");
});
route.get('/contact',(req,resp)=>{
    resp.send("welcome to our website contact");
});



app.get('/help',(req,resp)=>{
    resp.send("welcome to our website help");
});


app.use('/',route);
app.listen(1000);