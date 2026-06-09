const http = require('http')
const fs = require('fs')

const myServer = http.createServer((req,res)=>{
    // console.log('New Rquest Req Rec.');
    // console.log(req);
    const log =`${Date.now() }:${req.url} New Req Received\n `
    fs.appendFile('log.txt',log,(err,data)=>{
        switch (req.url) {
            case '/':
                res.end('homepage')
                break;
            case '/about':
                res.end('I Am Anjan Pajiyar')
                break
            default:
                res.end('404 Not Found')
        }
        
    })
   
}) 

myServer.listen(8000,()=> console.log('server started')
)

