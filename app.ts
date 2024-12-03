/*app.ts controla as entradas e chamada as rotas*/
import express from "express";
import clientsRouter from "./Router/clients";
import db from "./db";

const app = express();

//setando as rotas 
app.use(clientsRouter);

//setando as Views usando o template PUG
app.set('view engine', 'pug'); //definindo o template
app.set('views', './Views'); //definindo o caminho das views

//Configurando banco de dados
db.sync().then(() =>{
    console.log("Conectado com Banco de Dados:"+ process.env.DB_NAME);
}).then(() => {
    //Servidor só será criado se a conexão com o banco de dados acontecer
    /*para criar o servidor passando a porta que será usada
    passando a variavel de acesso ao DB no arquvo .env*/
    app.listen(process.env.PORT, () => {
        console.log("Servidor criado...");
    });
});

