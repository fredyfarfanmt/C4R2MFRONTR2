import {
    lengthValidation,
    emailValidation
} from './validation.js'



const loginBtn = document.getElementById("login")
const errorLogin = document.getElementById("errorLogin")

const url = "http://localhost:8080/api/user"

const authUser = async (user) => {
    const res = await fetch(url + `/emailexist/${user.email}/${user.password}`)
    const data = await res.json()
    console.log(data)
    if (data.name != null) {
        alertify.alert(`BIENVENIDO ${data.name}`,
            function () {
                alertify.success('Ok')
            }
        ).setHeader("")
    } else {
        errorLogin.innerHTML = "Usuario o Contraseña incorrecto"
    }
}



loginBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const emailU = document.getElementById("email").value
    const passwordU = document.getElementById("password").value

    let user = {
        email: emailU,
        password: passwordU
    }

    if (lengthValidation(emailU) == true && lengthValidation(passwordU) == true) {
        errorLogin.innerHTML = ""
        if (emailValidation(emailU) == true) {
            errorLogin.innerHTML = ""
            authUser(user)
        } else {
            errorLogin.innerHTML = "El email es invalido"
        }
    } else {
        errorLogin.innerHTML = "Los campos no deben estar vacios"
    }
})