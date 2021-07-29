const express = require("express")
const app = express()
const port = 5000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const connection = require("./database/database")
const Postagem = require("./database/Postagem")

//database
connection.authenticate()
.then(()=>{
    console.log("conexão com database sucesso!")
})
.catch((msgErro)=>{
    console.log(msgErro)
})


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res) =>{
    res.json({
        status: "API running!",
        description: "Aplicação de postagem para Instagram"
    })
})

//postagem
app.post("/cadastro", (req, res) =>{  
    let titulo = req.body.titulo
    let desc1 = req.body.desc1
    let desc2 = req.body.desc2
    const postagem = {
        titulo, desc1, desc2
    }
    
    Postagem.create({
        titulo: postagem.titulo,
        conteudo1: postagem.desc1,
        conteudo2: postagem.desc2
    }).then(()=>{
        res.redirect("http://192.168.15.55:8080/")
    })
})

app.listen(port, (error)=>{
    if(error){
        console.log('Erro ao rodar aplicação!')
    }else{
        console.log('Aplicação rodando na URL: http://localhost:5000')
    }
})