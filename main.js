/* using direct importing
//const a=require("./sum.js")
console.log(a.sum(80,10)); 
*/


const fs=require("fs");

/* reading file*/
//fs.readFileSync()
const data=fs.readFileSync("sum.txt");
console.log(data.toString())
//     if(err)
//     {
//         console.log(err)
//     }


//     else{
//         console.log(data)
//     }
// })

console.log("reading file")

//appending file
/*
fs.appendFile("sum.txt","append content",(err)=>{
    if(err)
    {
        console.log(err)
    }
})
    */

//deleting file
/*
fs.unlink("sum.txt",(err)=>{
    if(err)
    {
        console.log(err)
    }
})
    */