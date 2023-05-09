let a=20,b=0;
let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
           b=20;
           resolve(b)
    },2000)
})
waitingData.then((data)=>{
       console.log(a+data)
})

// console.log(a+b);// 20 