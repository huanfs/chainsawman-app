import Sequelize from "sequelize";

export const sequelize = new Sequelize('chainsawman', 'root', 'shavershian', {
    host:'localhost',
    dialect: 'mysql',
})


//****fins de autenticação*/
// sequelize.authenticate().then(()=>{
//     console.log('autenticado com sucesso')
// }).catch((err)=>{
//     console.log(`não foi possível fazer a conexão, erro: ${err}`)
// })
