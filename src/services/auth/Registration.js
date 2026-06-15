export async function Registration({userName, userPassword}){
    const apiUrl = import.meta.env.VITE_API_URL;
    const user = {
        userName: userName,
        userPassword: userPassword,
    };
        try {
        const register = await fetch(`${apiUrl}/adicionar`, {
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                "Content-Type":"application/json",
            }
        });
        const response = await register.json();
        return {
            success: response.ok,
            status: response.status,
            message: response.message,
        }
    } catch (err) {
        consoloe.log(response.message);
        return {
            success: false,
            status: 500,
            message: "erro no servidor",
        }
    }
};