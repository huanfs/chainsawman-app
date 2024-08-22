import Sequelize from "sequelize";

import { User } from "./db.js";

export const CurrentUser = User.define('usuarios',{
    username: {
        type: Sequelize.STRING,
    },
    userpassword: {
        type: Sequelize.STRING,
    }
})

CurrentUser.sync()

