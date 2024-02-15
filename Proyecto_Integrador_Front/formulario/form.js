const form = document.querySelector("#contact-form");

const obtenerDatosform = (form) => {
  const formData = new FormData(form);
  const jsonData = {};
  console.log("formData.entries", formData.entries);
  for (const [key, value] of formData.entries()) {
    jsonData[key] = value;
    //if (jsonData[key] == "") {
    //event.preventDefault();
    //  alert(`campo ${key} vacio`);
    //const alert= document.getElementById("alert")
    //alert.style.display='block';
    //console.log("alert",alert);
    // }
    // console.log("json", jsonData[key]);
  }
  return jsonData;
  //console.log("json", jsonData);
  //console.log("json.value", jsonData.nombreCompleto);

  // console.log("json", jsonData);
  //alert("el formulario se ha enviado corectamnete");
  //form.reset();
};

const validarform = (jsonData) => {
  let emptyfields = [];
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  for (const key in jsonData) {
    if (jsonData[key].trim() == "") {
      emptyfields.push(key);
    }
  }

  if(jsonData.nombreCompleto.length <= 3 ){
    //alert(" el nombre debe tener mas de 3 caracteres");
    //const alert= document.getElementById("alert")
      //alert.style.display='block';
    emptyfields.push("nombreCompleto");

  }
  if(jsonData.numeroTelefono.length <=9){
  //alert(" el numero de telefono debe tener mas de 9 caracteres");
    const alert= document.getElementById("alert")
    alert.style.display='block';
    emptyfields.push("numeroTelefono");
  }
  if(jsonData.password.length <=5){
    //alert(" la contraseña debe tener mas de 5 caracteres");
    const alert= document.getElementById("alert")
      alert.style.display='block';
    emptyfields.push("password");
  }
  if (!emailRegex.test(jsonData.email)) {
    //alert("El email ingresado no es valido");
    const alert= document.getElementById("alert")
      alert.style.display='block';
    emptyfields.push("email");
  }
  if(jsonData.nombreTarjeta.length <=3){
    //alert("el nombre debe tener mas de 3 caracteres");
    const alert= document.getElementById("alert")
      alert.style.display='block';
    emptyfields.push("nombreTarjeta");
  }
  if(jsonData.numeroTarjeta.length <=4){
    //alert("la contraseña debe tener mas de 5 caracteres");
    const alert= document.getElementById("alert")
      alert.style.display='block';
    emptyfields.push("numeroTarjeta");
  }
  if(jsonData.fecha == ""){
   // alert("Indique la fecha de caducidad de la tarjeta");
    const alert= document.getElementById("alert")
      alert.style.display='block';
    emptyfields.push("fecha");
  }
  if(jsonData.cvv.length <=2){
    //alert("el codigo de la tarjeta debe tener mas de 2 caracteres");
    const alert= document.getElementById("alert")
      alert.style.display='block';
    emptyfields.push("cvv");
  }

  return emptyfields.length > 0 ? emptyfields : false;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = obtenerDatosform(form);
  const validation = validarform(data);
  console.log(validation);
  if (validation) {
    alert(
      "el formulario tiene los siguientes datos vacios: " +
        validation.toString()
    );
  } else {
    //console.log("json", jsonData);
    console.log("data",data);
    alert("el formulario se ha enviado corectamnete");
    form.reset();
  }
});
