const lengthValidation = (string) => {

    if (string.length < 1) {
        return false
    } else {
        return true
    }
}

const emailValidation = (email) => {
    const validar = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

    return validar.test(email)

}

const passwordValidation = (password1, password2) => {
    if (password1 === password2) {
        return true
    } else {
        return false
    }
}


export {
    lengthValidation,
    emailValidation,
    passwordValidation
}