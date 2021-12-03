import {
  lengthValidation,
  emailValidation,

} from "./validation.js";



const url = "http://localhost:8080/api/user";

const dataGetData = async () => {
  try {
    const res = await fetch(url + "/all");
    const data = await res.json();
    drawTable(data);
  } catch (err) {
    console.log(err);
  }
};

const updateData = async (dataToUpdate) => {

  try {
    const res = await fetch(url + '/update', {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToUpdate)
    })
    const data = await res.json()
    console.log(data)
    alert("Usuario actualizado correctamente")
    location.reload()
  } catch (err) {
    console.log(err)
  }
}
const deleteData = async (id) => {

  try {
    const res = await fetch(url + `/${id}`, {
      method: "DELETE"
    })
    console.log(res)
    alert("Usuario eliminado correctamente")
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

const drawTable = (data) => {

  data.forEach((element) => {
    const tableList = document.createDocumentFragment();

    const tr = document.createElement("tr");

    const th = document.createElement("th");
    th.setAttribute("scope", "row");

    const tdId = document.createElement("td");
    const tdIdentification = document.createElement("td");
    const tdName = document.createElement("td");
    const tdZona = document.createElement("td");
    const tdTelefono = document.createElement("td");
    const tdDireccion = document.createElement("td");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML = "Eliminar";

    deleteBtn.addEventListener("click", (e) => {
      deleteData(element.id);
    });

    tdId.innerHTML = `${element.id}`;
    tdIdentification.innerHTML = `${element.identification}`;
    tdName.innerHTML = `${element.name}`;
    tdDireccion.innerHTML = `${element.address}`;
    tdTelefono.innerHTML = `${element.cellPhone}`;
    tdZona.innerHTML = `${element.zone}`;

    tr.appendChild(tdId);
    tr.appendChild(tdIdentification);
    tr.appendChild(tdName);
    tr.appendChild(tdDireccion);
    tr.appendChild(tdTelefono);
    tr.appendChild(tdZona)

    tr.appendChild(deleteBtn);

    tableList.appendChild(tr);

    bodyTable.appendChild(tableList);


  });
};

const updateBtn = document.getElementById("updateBtn");

updateBtn.addEventListener('click', (e) => {


  e.preventDefault();

  let ident = document.getElementById("identification").value;
  let user = document.getElementById("name").value;
  let telephone = document.getElementById("cellphone").value;
  let direction = document.getElementById("address").value;
  let zoneU = document.getElementById("zone").value;
  let idUser = document.getElementById("id").value;

  const client = {
    id: idUser,
    name: user,
    identification: ident,
    address: direction,
    cellPhone: telephone,
    zone: zoneU,
  };

  if (
    lengthValidation(idUser) == true &&
    lengthValidation(user) == true &&
    lengthValidation(ident) == true &&
    lengthValidation(direction) == true &&
    lengthValidation(zoneU) == true &&
    lengthValidation(telephone) == true
  ) {
    errorReg.innerHTML = "";

    updateData(client)

  } else {
    errorReg.innerHTML = "Los campos no deben estar vacios";
  }

})















dataGetData();