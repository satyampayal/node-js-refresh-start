const express = require('express');
const path=require('path');

const dirpath=path.join(__dirname,'htmlFolder');
//console.log(dirpath);//check
const app = express();
let port=399;


app.get("/", (req, resp) => {
    resp.send(`<h1>this is main page</h1> <a href="/help" >Help</a> <a href="/data">Data</a>  `);


});

app.get("/help", (req, resp) => {
    resp.send(" <input type='text' placeholder='enter text'/> <input type='button' value='submit'/> ");/*only one resp.send in 
    any get if you put more than resp.send in one  */
});


//json

app.get("/data",(req,resp)=>{
    resp.send([
        {
            'name':'satyam',
            'mob':'9711051397'
        },
        {
            'name':'satyam',
            'mob':'9711051397'
        },
        {
            'name':'satyam',
            'mob':'9711051397'
        },
        {
            'name':'satyam',
            'mob':'9711051397'
        }
    ])
})


// now html make again
app.use(express.static(dirpath));
//without static method and also help to remove extension


//app.get('',(_,resp)=>{
//    resp.sendFile(`${dirpath}/about.html`);
//});



// not found page 404 paga

app.get('*',(_,resp)=>{
    resp.sendFile(`${dirpath}/notFound.html`);
});


app.listen(port);