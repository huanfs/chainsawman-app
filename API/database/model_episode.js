import Sequelize from "sequelize";

import { User } from "./db.js";

export const ShowEpisode = User.define('episodios',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    titulo: {
        type: Sequelize.STRING,
    },
    episodio: {
        type: Sequelize.STRING,
    },
    createdAt: {
        type: Sequelize.CHAR,
    },
    updatedAt : {
        type: Sequelize.CHAR,
    }
})

ShowEpisode.sync().then(()=>{console.log("listando episódios no banco de dados")})