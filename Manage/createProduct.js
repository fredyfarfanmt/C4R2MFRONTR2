import { lengthValidation } from "../Js/validation.js";

const createC = document.getElementById("createC");

const url = "http://localhost:8080/api/clothe";

const createClothe = async (clothe) => {
  //   const confExistence = await fetch(url + "/all");
  //   let res = await confExistence.json();

  //   if (res.reference == null) {
  try {
    const res = await fetch(url + "/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clothe),
    });

    alert("Ropa creada con exito");
    location.reload();
    console.log(res);
  } catch (err) {
    console.log(err);
    alert("No se ha podido crear el articulo, referencia ya existe");
  }
};

const errorReg = document.getElementById("errorReg");

createC.addEventListener("click", (e) => {
  e.preventDefault();

  let referenceC = document.getElementById("reference").value;
  let categoryC = document.getElementById("category").value;
  let sizeC = document.getElementById("size").value;
  let descriptionC = document.getElementById("description").value;
  let availabilityC = document.getElementById("availability").value;
  let priceC = document.getElementById("price").value;
  let quantityC = document.getElementById("quantity").value;
  let photographyC = document.getElementById("photography").value;

  const clothe = {
    reference: referenceC,
    category: categoryC,
    size: sizeC,
    description: descriptionC,
    availability: availabilityC,
    price: priceC,
    quantity: quantityC,
    photography: photographyC,
  };

  if (
    lengthValidation(referenceC) == true &&
    lengthValidation(categoryC) == true &&
    lengthValidation(sizeC) == true &&
    lengthValidation(descriptionC) == true &&
    lengthValidation(availabilityC) == true &&
    lengthValidation(priceC) == true &&
    lengthValidation(quantityC) == true &&
    lengthValidation(photographyC) == true
  ) {
    errorReg.innerHTML = "";
    createClothe(clothe)
  } else {
    errorReg.innerHTML = "Los campos no deben estar vacios";
  }
});
