import Sequelize from "sequelize";

export const User = new Sequelize('chainsawman','root','shavershian', {
    host:'localhost',
    dialect: 'mysql',
});
