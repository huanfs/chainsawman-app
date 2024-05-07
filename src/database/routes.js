import express from "express";

import { User } from "./model.js";

export const router = express.Router();

router.get("/", async(req, res)=>{
    try{
        const usuarios = await User.findAll();
        res.json(usuarios);
    }
    catch(err){
        console.log("houve um erro" + err)
    }
})