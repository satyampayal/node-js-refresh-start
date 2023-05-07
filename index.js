const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'files');;
/*
for(i=0;i<4;i++){
    fs.writeFileSync(dirpath+"/file"+i+".txt","crete file by new method at a time 1 or more file");
    this is crete file in files folder 
    if i want to create file in current folder then not give path durpath..
}
*/
// now read file how much create
fs.readdir(dirpath,(err,file)=>{
    console.log(file);// this give an array file=[fil11.txt,....]
    file.forEach((item)=>{
        console.log("this file name is "+item);
    })
})
