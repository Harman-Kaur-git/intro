const http = require("node:http");
const fs = require("node:fs");0
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html",
        "Server": "Node.js"
    })
    if (req.url === "/home") {
        res.end("this is a home page")
    }
    else if (req.url === "/product") {
        res.end("product page")
    }
    else if (req.url === "/file") {
        fs.readFile("index.html", "utf8", (err, data) => {
            if (err) {
                res.end(err)
            }
            else {
                res.end(data)
            }
        })
    }
    else if (req.url === "/html") {
        res.end(`
                <html>
                <body>
                this is a html page
                </body>
                </html>
                `)
    }
    else {
        res.end("page not found")
    }

})
server.listen(8080, () => {
    console.log("server started at http://localhost:8080")
})