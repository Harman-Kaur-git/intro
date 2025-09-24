const fs = require("node:fs");
const http = require("node:http");
const server = http.createServer((req, res) => {
    res.writeHead(200,
        {
            "Content-type": "text/html",
            "Server":"Node.js"
        }
    )
    if (req.url === "/home") {
        fs.readFile("./home.html", "utf8", (err, data) => {
            if (err) {
                res.end(err)
            }
            else {
                res.end(data)
            }
        })
    }
    else if (req.url === "/about") {
        fs.readFile("./about.html", "utf8", (err, data) => {
            if (err) {
                res.end(err)
            }
            else {
                res.end(data)
            }
        })
    }
    else if (req.url === "/contact") {
        fs.readFile("./contact.html", "utf8", (err, data) => {
            if (err) {
                res.end(err)
            }
            else {
                res.end(data)
            }
        })
    }
    else {
        res.end("Oops!Page not found")
    }
})
server.listen(8080, () => {
    console.log("server started at 8080")
})