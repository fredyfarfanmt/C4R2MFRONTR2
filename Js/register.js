import {
  lengthValidation,
  emailValidation,
 
} from "./validation.js";

const registerBtn = document.getElementById("register");

const url = "http://localhost:8080/api/user";

const createUser = async (client) => {

  const confExistence = await fetch(url + `/emailexist/${client.email}`);
  let res = await confExistence.json();
  console.log(res)

  if (res == false) {
    try {
      const res = await fetch(url + "/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(client),
      });
      alert("Usuario creado con exito");
      location.reload();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  } else {
    alert("No se ha podido crear el usuario, email ya registrado");
  }
};

const errorReg = document.getElementById("errorReg");

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let ident = document.getElementById("identification").value;
  let user = document.getElementById("user").value;
  let emailU = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let telephone = document.getElementById("telephone").value;
  let direction = document.getElementById("direction").value;
  let zoneU = document.getElementById("zona").value;
  let idUser = document.getElementById("idUser").value;

  const client = {
    id:idUser,
    name: user,
    email: emailU,
    password: password,
    identification: ident,
    address: direction,
    cellPhone: telephone,
    zone: zoneU,
  };

  if (
    lengthValidation(idUser) == true &&
    lengthValidation(user) == true &&
    lengthValidation(emailU) == true &&
    lengthValidation(password) == true &&
    lengthValidation(ident) == true &&
    lengthValidation(direction) == true &&
    lengthValidation(zoneU) == true &&
    lengthValidation(telephone) == true
  ) {
    errorReg.innerHTML = "";
    if (emailValidation(emailU) == true) {
      
        createUser(client);
        
    } else {
      errorReg.innerHTML = "Email no valido";
    }
  } else {
    errorReg.innerHTML = "Los campos no deben estar vacios";
  }
});
