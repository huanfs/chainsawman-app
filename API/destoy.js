import { CurrentUser} from "./database/model.js";

export async function Destroy(){
    try{
        const RemoverUsuario = await CurrentUser.destroy({
            where: {username: 'EMILIZINHAAA'}
        })
    }catch(err){
        console.log(err)
    }
}