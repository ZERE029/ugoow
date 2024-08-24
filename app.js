const express = require('express');
const app = express();

app.use(express.json());



app.get("/", (req, res) => {
    res.send("Bem vindo a nossa API.");
});



app.listen(3333, ()=>{
    console.log("servidor iniciando na parte da 3333: http://localhost:3333");
});



app.get("/users/:id", (req, res) =>{
const {id} = req.params;
const {sit} = req.query;

return res.json({
    id,
    name: "matheus", 
    email: "matheusvital@gmail.com",
    sit
});
})
