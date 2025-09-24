const http=require("node:http")
const server=http.createServer((req,res)=>{
    if(req.url==="/home")
    {
        res.end("Hello World!")
    }
   
})
server.listen(3000,()=>{
    console.log("server started")
})