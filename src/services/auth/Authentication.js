export async function Authentication({userName, userPassword}){
    const apiUrl = import.meta.env.VITE_API_URL;

    const user = {
        usuario:userName,
        senha:userPassword
    }
    try{
        const auth = await fetch(`${apiUrl}/autenticar`,{
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