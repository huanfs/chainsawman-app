
export async function Registration({userName, userPassword}) {
    const user = {
        userName: userName,
        userPassword: userPassword,
    };
        try {
        const register = await fetch("http://localhost:3000/adicionar", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(register.ok){
            return true;
        }
        else{
            return false;
        }
    } catch (err) {
        console.log("Não foi possível criar usuário:", err);
        return false;
    }
};