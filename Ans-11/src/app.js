const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const usersFile = require('../database/users.json')

app.use(express.static('public'))
app.use(express.json())

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html/index.html'))
})


app.post('/userSignUp',(req,res)=>{
    const userdata = {...req.body}
    usersFile.push(userdata);
    fs.writeFileSync(path.join(__dirname,'./../database/users.json'), JSON.stringify(usersFile,null,4))
    res.sendFile(path.join(__dirname,'../public/html/loginPage.html'))

})

app.listen(3000,()=>{
    console.log('Server Started');
})
