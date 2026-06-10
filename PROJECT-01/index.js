const express = require('express');
const fs=require('fs')
let Users = require('./MOCK_DATA.json');

const app = express();
const PORT = 8000;



app.get('/users', (req, res) => {
    const html = `
        <ul>
            ${Users.map((users) => `<li>${users.first_name}</li>`).join("")}
        </ul>
    `;

    res.send(html);
});

// Middleware - Plugin
app.use(express.urlencoded({extended:false}))

// Routes
app.get('/api/users', (req, res) => {
    return res.json(Users);
});

app
    .route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = Users.find(user => user.id === id);

        return res.json(user);
    })

    .patch((req, res) => {
        // TODO: Edit the user with id
        const id =Number(req.params.id)
        const user = Users.find((user)=> user.id === id)
        return res.json({ status: "pending" });
    })

    .delete((req, res) => {
        // TODO: Delete the user with id
        const id=Number(req.params.id)
        Users=Users.filter((user)=> user.id !==id)

        fs.writeFile('./MOCK_DATA.json',JSON.stringify(Users),(err,data)=>{
            return res.json({message:"user deleted successfully"})
        })
       
    });

app.post('/api/users', (req, res) => {
    // TODO: Create new User
    const body = req.body
    // console.log("Body",body);
    Users.push({...body,id:Users.length+1})
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(Users),(err,data)=>{
         return res.json({ status: "pending" , id :Users.length});
    })

})
    
   

// app.get('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = Users.find(user => user.id === id);

//     return res.json(user);
// });

// app.patch('/api/users/:id', (req, res) => {
//     // TODO: Edit the user with id
//     return res.json({ status: "pending" });
// });

// app.delete('/api/users/:id', (req, res) => {
//     // TODO: Delete the user with id
//     return res.json({ status: "pending" });
// });

app.listen(PORT, () =>
    console.log(`Server Started at PORT:${PORT}`)
);