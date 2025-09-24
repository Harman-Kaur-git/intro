user = {
    id: 123,
    name: "abc",
    age: 42,
    city: "pnp"
}
const http = require("http")
const server = http.createServer((req, res) => {
    if (req.url === "/json") {
        res.end(JSON.stringify(user))
    }
})
server.listen(8080, () => {
    console.log("server started")
})