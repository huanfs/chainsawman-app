export async function Authentication({userName, userPassword}){
    const user = {
        usuario:userName,
        senha:userPassword
    }
    try{
        const auth = await fetch("http://localhost:3000/autenticar",{
            method:"POST",
            body: JSON.stringify(user),
            headers:{
                "Content-Type": "application/json",
            }
        });
        if(auth.ok){
            return true;
        }
        else{
            console.log("erro ao autenticar");
            return false;
        }
    }
    catch(err){
        console.log("error:", err);
        return false;
    }
}