export async function Authentication({userName, userPassword}){
    const apiUrl = import.meta.env.VITE_API_URL;
    const user = {
        userName:userName,
        userPassword:userPassword
    }
    try{
        const auth = await fetch(`${apiUrl}/autenticar`, {
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                "Content-Type":"application/json",
            }
        });
        const response = await auth.json();
        return {
            success: auth.ok,
            status: auth.status,
            message: response.message,
        }
    }
    catch(err){
        console.log("erro inesperado!");
        return {
            success: false,
            status:500,
            message: "erro no servidor!",
        }
    }
}