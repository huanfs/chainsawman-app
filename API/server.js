import express from 'express';

import cors from "cors";

import bodyParser from "body-parser";

import { CurrentUser } from "./database/model.js";

const server = express();

server.use(cors({
    origin: 'http://localhost:5173'
})); //usando o cors

server.use(bodyParser.json()); //usando o body parser para ler a URL

server.get("*", (req, res)=>{
    res.sendFile(__dirname + '404.html');
})
//rota adicionar finalizada
server.post("/adicionar", async(req, res)=>{
    const usuario = req.body.userName;
    const senha = req.body.userPassword;
    try{
        await CurrentUser.create({
            username: usuario,
            userpassword: senha,
        })
    }catch(err){
        console.log(err)
    }
})



server.post("/autenticar", async(req, res)=>{
    const usuario = req.body.usuario;
    const senha = req.body.senha;

    const BuscarDados = await CurrentUser.findOne({
        where:{ username: usuario}
    })
    const resposta = await BuscarDados;
    if(resposta){
        if(resposta.username == usuario && resposta.userpassword == senha){
            console.log("a autenticação foi um sucesso, usuário e senha encontrados!")
        }
    }
    res.send(resposta)  
})



server.get("/destruir", async(req, res)=>{
    await CurrentUser.destroy({
        where: {username: 'emiliSouza'}
    })
}).listen(3000, ()=>{
    console.log("servidor rodando")
})


//aqui está dando tudo certo quando a rota é / adiciona e quando a rota é /destruir deleta