const express =require('express')
const Users = require('./MOCK_DATA.json')
const app = express()
const PORT = 8000


app.get('/users',(req,res)=>{
    const html = `
    <ul>
        ${Users.map((users)=> `<li>${users.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html)
})

// Routes


app.get('/api/users',(req,res)=>{
    return res.json(Users)
})

app
    .routes('/api/users/:id')
    .get((req,res)=>{
        const id= Number(req.params.id)
        const user = Users.find(user => user.id ===id)

        return res.json(user)
    })

    .patch('/api/users/:id',(req,res)=>{
    // TODO: Edit the user with id
    return res.json({status:"pending"})
    })

    .delete('/api/users/:id',(req,res)=>{
    // TODO: Delete the user with id
    return res.json({status:"pending"})
    })
    

// app.get('/api/users/:id',(req,res)=>{
//     const id= Number(req.params.id)
//     const user = Users.find(user => user.id ===id)

//     return res.json(user)
// })

app.post('/api/users',(req,res)=>{
    // TODO: Create new User
    return res.json({status:"pending"})
})

// app.patch('/api/users/:id',(req,res)=>{
//     // TODO: Edit the user with id
//     return res.json({status:"pending"})
// })

// app.delete('/api/users/:id',(req,res)=>{
//     // TODO: Delete the user with id
//     return res.json({status:"pending"})
// })

app.listen(PORT,()=>console.log(`Server Started at PORT:${PORT}`)
)