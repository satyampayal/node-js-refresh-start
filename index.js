const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'crud');
//fs.writeFileSync(dirpath+'/file1.txt',"make file Succesfully"); ---->>> also make with

//fs.writeFileSync(`${dirpath}/apple.txt`,"file succesfully created"); --->>> also by this 

const filepath=`${dirpath}/apple2.txt`;
// fs.writeFileSync(filepath,"apple2 is created");--->>> now creted file 
// we read filenow


/*fs.readFile(filepath,'utf8',(err,item)=>{
    console.log(item);
})
*/

// file update apple2.txt
//fs.appendFile(filepath," now this statement by appendFile",(err)=>{
//    if(!err) console.log("file is updated")
//})

// file name change by apple2.txt to satyam.txt

//fs.rename(filepath,`${dirpath}/satyam.txt`,(err)=>{
//    if(!err) console.log("file name is updated");
//})

// at end delete file
fs.unlinkSync(`${dirpath}/satyam.txt`);

