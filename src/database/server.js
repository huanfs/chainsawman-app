import user from "../../public/user.js";

import Sequelize from "sequelize";
//conectando ao mysql
const sequelize = new Sequelize('chainsawman','root','shavershian',{
    host: 'localhost',
    dialect: 'mysql'
})
//criando um model da tabela usuarios no banco chainsawman
const User = sequelize.define('usuarios',{
    username: {
        type: Sequelize.STRING
    },
    userpassword: {
        type: Sequelize.STRING
    }
})
//criando dados
User.create({
    username: user[0].username,
    userpassword: user[0].userpassword,
    createdAt: new Date()
})
// User.sync() // isto foi usado para criar o model


//eu preciso importar as variaveis que contem os nomes e senhas para cá
//para que eu possa então passar para dentro do banco de dados, talvez eu possa criar uma condicional
//para checar se a senha e usuário já estão salvos no banco... vou ver isto
