import {
    lengthValidation,
    emailValidation,

} from "./validation.js";



const url = "http://localhost:8080/api/clothe";

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
        alert("Ropa actualizada correctamente")
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
        alert("Ropa eliminada correctamente")
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

        const tdRef = document.createElement("td");
        const tdCategory = document.createElement("td");
        const tdSize = document.createElement("td");
        const tdDescription = document.createElement("td");
        const tdPrice = document.createElement("td");
        const tdQuantity = document.createElement("td");
        const tdPhoto = document.createElement("td");

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.innerHTML = "Eliminar";

        deleteBtn.addEventListener("click", (e) => {
            deleteData(element.reference);
        });

        tdRef.innerHTML = `${element.reference}`;
        tdCategory.innerHTML = `${element.category}`;
        tdSize.innerHTML = `${element.size}`;
        tdDescription.innerHTML = `${element.description}`;
        tdPrice.innerHTML = `${element.price}`;
        tdQuantity.innerHTML = `${element.quantity}`;
        tdPhoto.innerHTML = `${element.photography}`;


        tr.appendChild(tdRef);
        tr.appendChild(tdCategory);
        tr.appendChild(tdSize);
        tr.appendChild(tdDescription);
        tr.appendChild(tdPrice);
        tr.appendChild(tdQuantity);
        tr.appendChild(tdPhoto);

        tr.appendChild(deleteBtn);

        tableList.appendChild(tr);

        bodyTable.appendChild(tableList);


    });
};

const updateBtn = document.getElementById("updateBtn");

updateBtn.addEventListener('click', (e) => {


    e.preventDefault();

    let ref = document.getElementById("reference").value
    let cat = document.getElementById("category").value
    let sizeC = document.getElementById("size").value
    let descrip = document.getElementById("description").value
    let priceC = document.getElementById("price").value
    let quanty = document.getElementById("quantity").value
    let photo = document.getElementById("photography").value


    const clothe = {
        reference: ref,
        category: cat,
        sieze: sizeC,
        description: descrip,
        price: priceC,
        quantity: quanty,
        photography: photo
    };

    if (
        lengthValidation(ref) == true &&
        lengthValidation(cat) == true &&
        lengthValidation(sizeC) == true &&
        lengthValidation(descrip) == true &&
        lengthValidation(priceC) == true &&
        lengthValidation(quanty) == true &&
        lengthValidation(photo) == true
    ) {
        errorReg.innerHTML = "";

        updateData(clothe);

    } else {
        errorReg.innerHTML = "Los campos no deben estar vacios";
    }

})















dataGetData();