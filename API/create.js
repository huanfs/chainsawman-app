import{ CurrentUser} from "./database/model.js";

 export async function Create(nome, senha){
    try{
        const NovoValor = await CurrentUser.create({
            username: nome,
            password: senha
        })
    }catch(err){
        console.log("não foi possível cadastrar" + err)
    }
}
