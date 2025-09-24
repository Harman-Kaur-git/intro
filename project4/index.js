let user={
    name:"abc",
    id:1,
    age:42
}
const http=require("node:http")
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-type":"application/json"
    })
    if(req.url==="/user")
    {
        res.end(JSON.stringify(user))
    }
})
server.listen(3000,()=>{
    console.log("server started")
})