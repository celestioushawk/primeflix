export const formValidation = (email, password, name, isSignInForm) => {
    
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid) {
        return "Invalid email address";
    }

    if (!isPasswordValid) {
        return "Password must contain at least 8 characters, including uppercase, lowercase, and numbers";
    }

    if (!isSignInForm && name.length < 3) {
        return "Name must contain at least 3 characters";
    }   

    return null;
}