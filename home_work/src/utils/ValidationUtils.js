import validator from "validator";

export const isFirstNameValid = (firstName) => {
    return firstName.length > 0 && !containsDigits(firstName);
}

export const  isLastNameValid = (lastName) => {
    return lastName.length > 0 && !containsDigits(lastName);
}

export const  isPasswordValid = (password) => {
    return password.length >= 6 && password.length < 20
        && containsSymbolsUpperCase(password)
        && containsSymbolsLowerCase(password)
        && containsDigits(password);
}

export const isEmailValid = (email) => {
    return validator.isEmail(email);
}


export const containsDigits = (value) => {
    return/\d/.test(value);
}

const containsSymbolsUpperCase = (value) => {
    return /(?=.*?[A-Z])/.test(value);
}

const containsSymbolsLowerCase = (value) => {
    return /(?=.*?[a-z])/.test(value);
}
