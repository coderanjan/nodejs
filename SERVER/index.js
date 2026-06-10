const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    return res.send('hello from home page')
})
app.get('/about',(req,res)=>{
    return res.send(`hello from about page and hi ${req.query.myname}`)
})

// const myserver = http.createServer(app)

// myserver.listen(8000, () => console.log('server started'))

app.listen(8000,()=>console.log('server started'))