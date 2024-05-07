import { sequelize, DataTypes } from "./conection.js";

export const User = sequelize.define('usuarios',{
    username: {
        type: DataTypes.STRING
    },
    userpassword: {
        type: DataTypes.STRING
    }
})

//criação da tabela no banco de dados