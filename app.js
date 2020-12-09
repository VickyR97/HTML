const http = require('http')
const port = 3000
const fs = require('fs')


const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/html'})
    fs.readFile('index.html',(error, data)=>{
        if(error){
            res.writeHead(404)
            res.write('Page not found')
        }else{
            res.write(data)
        }
        res.end()
    })
})


console.log("Check merge branch")

server.listen(port, (error)=>{
    if(error){
        console.log('Something wrong',error)
    }else{
        console.log('Server is listening on:',port)
    }
})