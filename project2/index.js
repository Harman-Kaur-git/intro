const http=require("node:http")
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-type":"text/plain",
        "Server":"Node.js"
    })
    if(req.url==="/home")
    {
        res.end("This is home page")
    }
    else if(req.url==="/product")
    {
        res.end("This is product page")
    }
    else if(req.url==="/contact")
    {
        res.end("This is contact page")
    }
    else
    {
        res.end("page not found")
    }
})
server.listen(3000,()=>{
    console.log("server started")
})