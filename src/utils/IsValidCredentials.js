export async function IsValidCredentials({
    userName, 
    userPassword, 
    userLabel, 
    passwordLabel,
}) {
    let isValid = true;

    const isUserValid = userName.length >= 6;
    if (userLabel?.current) {
        userLabel.current.innerHTML = isUserValid ? "nome de usuário:" : "mínimo 6 caracteres!";
        userLabel.current.style.color = isUserValid ? "var(--SolidBlack)" : "var(--FadeRed)";
    }
    if (!isUserValid) isValid = false;

    const isPasswordValid = userPassword.length >= 8;
    if (passwordLabel?.current) {
        passwordLabel.current.innerHTML = isPasswordValid ? "senha:" : "mínimo 8 caracteres!";
        passwordLabel.current.style.color = isPasswordValid ? "var(--SolidBlack)" : "var(--FadeRed)";
    }
    if (!isPasswordValid) isValid = false;

    return isValid;
}