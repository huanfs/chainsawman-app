
export async function IsValidCredentials({
    userName, 
    userPassword, 
    userLabel, 
    passwordLabel
}) {
    let isValid = true;

    // Validação do usuário
    const isUserValid = userName.length >= 6;
    if (userLabel?.current) {
        userLabel.current.innerHTML = isUserValid ? "nome de usuário:" : "mínimo 6 caracteres!";
        userLabel.current.style.color = isUserValid ? "var(--SolidBlack)" : "var(--FadeRed)";
    }
    if (!isUserValid) isValid = false;

    // Validação da senha
    const isPasswordValid = userPassword.length >= 8;
    if (passwordLabel?.current) {
        passwordLabel.current.innerHTML = isPasswordValid ? "senha:" : "mínimo 8 caracteres!";
        passwordLabel.current.style.color = isPasswordValid ? "var(--SolidBlack)" : "var(--FadeRed)";
    }
    if (!isPasswordValid) isValid = false;

    
    if(isValid){
        console.log("validando")
        const login = await Handler({userName,userPassword})
    }

    return isValid;
}