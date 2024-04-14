export const checkValidateData = (email, password, name) => {

    const isEmailValid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);

    //Minimum eight characters, at least one letter, one number and one special character:
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
    
    const isNameValid = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name);
    if(!isEmailValid) return "Email id is not valid";
    if(!isPasswordValid) return "Password invalid (min 8 charaters including numbers & special char)"
    if(!isNameValid) return "Name is not valid"; 
    return null;
}
