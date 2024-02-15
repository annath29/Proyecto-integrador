import { showCart } from "./modalCart.js";
import { getById } from "../module/functions_fetch.js";

// const changeSize =(selectedColorInput) =>{
//   console.log("acceder a las tallas",product.stock[`${selectedColorInput.value}`].talla)
//   const sizeSection = document.getElementById("sizeSection");
//   let sizesHtml=``
//   let count2=1;       
//   const tallas = product.stock[`${selectedColorInput.value}`].talla;
//   for (const tallaKey in tallas) {
//     sizesHtml += `
//       <div>
//         <input class="${count2 === 1 ? 'active_size' : ''}" type="radio" id="size${count2}" name="size" value="${tallaKey}"  ${count2 === 1 ? 'checked' : '' } >
//         <label class="${count2 === 1 ? 'active' : ''}">${tallaKey}</label>
//       </div>
//     `;
//     const value = tallas[tallaKey];
//     console.log(tallaKey, "=", value);
//     count2++;
//   }
//   sizeSection.innerHTML= sizesHtml;

//   const sizesInput = document.querySelectorAll('input[type="radio"][name="size"]');
//   console.log("sizesinput",sizesInput);
//   changeState(sizesInput,"active_size");
//   changeSubtitle(sizesInput,"Size")
//   // sizesInput.forEach(element => {
//   //   element.addEventListener("click", () => {
//   //     const subtitleSize = document.querySelector(`#subtitleSize`);
//   //     subtitleSize.innerHTML = `Size: ${element.value}`; 
//   //   });
//   // });

//

const changeQuantity=(quantityInput)=>{
  const decrementBtn = document.getElementById("decrement");
  const incrementBtn = document.getElementById("increment");
    decrementBtn.addEventListener("click", (e) => {
      e.preventDefault()
      const currentValue = parseInt(quantityInput.value);
      console.log("actual",currentValue);
      if (currentValue > 0) {
        quantityInput.value = currentValue - 1;
      }
    });

    incrementBtn.addEventListener("click", (e) => {
      e.preventDefault()
      const currentValue = parseInt(quantityInput.value);
      const maxValue = parseInt(quantityInput.max);
      if (currentValue < maxValue) {
        quantityInput.value = currentValue + 1;
      }
    });
}

const changeSize = (selectedColorInput) => {
  const selectedStock = product.stock[`${selectedColorInput.value}`];
  if (selectedStock && selectedStock.talla) {
    // console.log("acceder a las tallas", selectedStock.talla);
    const sizeSection = document.getElementById("sizeSection");
    let sizesHtml = ``;
    let count2 = 1;
    const sizes = selectedStock.talla;
    for (const sizeKey in sizes) {
      sizesHtml += `
        <div>
          <input class="${count2 === 1 ? 'active_size' : ''}" type="radio" id="size${count2}" name="size" value="${sizeKey}"  ${count2 === 1 ? 'checked' : '' } >
          <label class="${count2 === 1 ? 'active' : ''}">${sizeKey}</label>
        </div>
      `;
      count2++;
    }
    sizeSection.innerHTML= sizesHtml;
    
    const sizesInput = document.querySelectorAll('input[type="radio"][name="size"]');
    // console.log("sizesinput",sizesInput);
    changeState(sizesInput,"active_size");
    changeSubtitle(sizesInput,"Size", false); 

    const quantityInput = document.getElementById("quantity");
    sizesInput.forEach((size,index)=>{
      if(index==0){
        quantityInput.max = selectedStock.talla[size.value];
        console.log("cantidad maxima",quantityInput.max);
        quantityInput.value=0
      }
      size.addEventListener("click", () => {
        // changeQuantity(quantityInput)
        const selectedSize = size.value;
        quantityInput.max = selectedStock.talla[selectedSize];
        console.log("cantidad maxima",quantityInput.max)
        quantityInput.value = 0;
      });
    });
    
    // const selectedSizeInput = document.querySelector('input[type="radio"][name="size"]:checked');
    // if (selectedSizeInput) {
    //   const selectedSize = selectedSizeInput.value;
    //   quantityInput.max = selectedStock.talla[selectedSize];
    //   console.log(quantityInput.max);
    // }

  } else {
    sizeSection.innerHTML=`
      <p>No se encontró stock para el color seleccionado<p>
    `
    console.error("No se encontró stock para el color seleccionado.");
  }
};

const changeSubtitle = (inputs,subtitle, callChangeSize = true) =>{
  inputs.forEach((element,index) => {
    if(index==0){
      const subtitleElement = document.querySelector(`#subtitle${subtitle}`);
      subtitleElement.innerHTML = `${subtitle}: ${element.value}`; 
      if (callChangeSize) {
        changeSize(element);
      }
    }
    element.addEventListener("click", () => {
      const subtitleElement = document.querySelector(`#subtitle${subtitle}`);
      subtitleElement.innerHTML = `${subtitle}: ${element.value}`; 
      if (callChangeSize) {
        changeSize(element);
      }
    });
  });
}

// Funcion para cmbiar el estado activo de la talla y el color
const changeState = (elementos,clase) =>{
  elementos.forEach((elemento) => {
    elemento.addEventListener("click", () => {
      elementos.forEach((elem) => {
        elem.classList.remove(clase);
        elem.checked=false;
      });
      elemento.classList.add(clase);
      elemento.checked=true;
    });
  });
};

//trae el id de la pagina de products mediante el local storage
const idProduct = localStorage.getItem("id_product");
//  console.log(product,"product")

//trae el producto por id
const product = await getById(idProduct);
// const producto={};
// console.log("product", product);

const nameProduct = document.getElementById("breadcrumbs_name_product");
nameProduct.innerText = product.nombre;

const conteinerDescription = document.getElementById("description");
conteinerDescription.innerHTML = ``;
const conteinerVideo = document.getElementById("video");
conteinerVideo.innerHTML = ``;

const showContent = (product) => {
  if (product.length == 0) {
    document.body.innerHTML = `
        <div class="empty_products">
            <p>Error encontrando Producto</p>
        </div>
        `;
  } else {
    let html = `
      <figure class="description_images">
        <section class="other_images">
        </section>
        <img class="img_main"src="${product.imagenes[0]}" alt="" />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M16.2858 3.42847C14.4858 3.42847 12.943 4.37132 12.0001 5.74275C11.0572 4.37132 9.51439 3.42847 7.71439 3.42847C4.88582 3.42847 2.57153 5.74275 2.57153 8.57132C2.57153 13.7142 12.0001 21.4285 12.0001 21.4285C12.0001 21.4285 21.4287 13.7142 21.4287 8.57132C21.4287 5.74275 19.1144 3.42847 16.2858 3.42847Z" stroke="#171A1F" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
        </svg>
      </figure>
      <aside class="description_buy_product">
          <h1>${product.nombre}</h1>
          <p>Code: ${product.codigo}</p>
          <h1 class="price">$${product.precioUnitario}</h1>
          <form id="formAddProduct">
            <fieldset class="colors">
              <legend id="subtitleColor"class="subtitle"></legend>
              <section id="colorSection">
              </section>
            </fieldset>
            <fieldset class="sizes">
              <legend>
                  <p id="subtitleSize" class="subtitle"></p>
                  <a>What is my size?</a>
              </legend>
              <section id="sizeSection">
              </div>
            </fieldset>
            <fieldset class="quantity">
              <legend class="subtitle">Quantity</legend>
              <section id="quantitySection">
              <button id="decrement">-</button>
              <input type="number" id="quantity" name="quantity" value="0" min="0" max="100"> 
              <button id="increment">+</button>
              </section>
            </fieldset>
            <section class="buttons">
              <button id="btn_add_cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M11.5 9H13.5L13.5 6L16.5 6V4L13.5 4L13.5 1L11.5 1L11.5 4L8.5 4L8.5 6L11.5 6L11.5 9ZM7.5 18C6.4 18 5.51 18.9 5.51 20C5.51 21.1 6.4 22 7.5 22C8.6 22 9.5 21.1 9.5 20C9.5 18.9 8.6 18 7.5 18ZM17.5 18C16.4 18 15.51 18.9 15.51 20C15.51 21.1 16.4 22 17.5 22C18.6 22 19.5 21.1 19.5 20C19.5 18.9 18.6 18 17.5 18ZM7.67 14.75L7.7 14.63L8.6 13L16.05 13C16.8 13 17.46 12.59 17.8 11.97L21.66 4.96L19.92 4H19.91L18.81 6L16.05 11L9.03 11L8.9 10.73L6.66 6L5.71 4L4.77 2L1.5 2L1.5 4L3.5 4L7.1 11.59L5.75 14.04C5.59 14.32 5.5 14.65 5.5 15C5.5 16.1 6.4 17 7.5 17L19.5 17V15L7.92 15C7.79 15 7.67 14.89 7.67 14.75Z"
                    fill="#0D554A"
                  />
                </svg>
                Add to bag
              </button>
              <button id="btn_buy" class="button_active">Buy now</button>
            </section>
          </form>
          <section class="selects">
            <select name="" id="">
              <option value="val1">Delivery</option>
            </select>
            <select name="" id="">
              <option value="val1">Payment</option>
            </select>
            <select name="" id="">
              <option value="val1">Warranty</option>
            </select>
            <select name="" id="">
              <option value="val1">Care</option>
            </select>
          </section>
        </aside>

      
    `;
    conteinerDescription.innerHTML = html;

    conteinerVideo.innerHTML = `
    <p>Description</p>
    <h1>${product.nombre}</h1>
    <p class="description">
      ${product.descripcion} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, sed. 
    </p>
    <figure id="videoFigure" >
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M8.25 27.0714L8.25 4.92859L24.8571 16L8.25 27.0714Z"
            stroke="#171A1F"
            stroke-width="2.65714"
            stroke-miterlimit="10"
            stroke-linecap="square"
          />
        </svg>
      </button>
    </figure>
    `;

    //pone en el cotnenedor del video la imagen en el background dinamica
    const figureVideo = document.getElementById("videoFigure");
    figureVideo.style.backgroundImage = "url(" + product.imagenes[0] + ")";

    //crea la seccion de las imagenes pequenas dinamicamente
    const otherImagesSection = document.querySelector(".other_images");
    for (let i = 0; i < product.imagenes.length; i++) {
      const img = document.createElement("img");
      img.src = product.imagenes[i];
      img.alt = `${product.nombre}${i}`;
      if (i === 0) {
        img.classList.add("img_active");
      }
      otherImagesSection.appendChild(img);
    }

    //cambia la imagen principal segun a que imagen pequeña se le de click
    const imagenes = document.querySelectorAll(".other_images img");
    const imagenPrincipal = document.querySelector(".img_main");
    imagenes.forEach((imagen) => {
      imagen.addEventListener("click", () => {
        imagenes.forEach((img) => {
          img.classList.remove("img_active");
        });
        imagenPrincipal.src = imagen.src;
        imagen.classList.add("img_active");
      });
    });

    //pintar los colores segun el producto
    const colorSection = document.getElementById("colorSection");
    let colorsHtml=``
    let count = 1; 
    const stock = product.stock;
    //pintar los inputs de colores
    for (const key in stock) {
      colorsHtml+=`
        <input class="${count === 1 ? 'active_color' : ''}" type="radio" id="color${count}" name="color" value="${key}"  ${count === 1 ? 'checked' : '' } >  
      `;
      count++;
      // const value = stock[key];
      // console.log(key, "=", value);
    }
   
    colorSection.innerHTML= colorsHtml;
    //modificar el background del input segun el color
    count=1;
    for (const key in stock) {
      let color=document.getElementById("color"+count)
      color.style.backgroundColor = stock[key].color;
      // console.log("color",color)
      count++;
    }

    const colorsInput = document.querySelectorAll('input[type="radio"][name="color"]');
    // console.log("colorinput",colorsInput);
    changeState(colorsInput,"active_color");
    changeSubtitle(colorsInput,"Color");

    const selectedInputColor= document.querySelectorAll('input[type="radio"][name="color"]:checked');
    if(selectedInputColor){
      changeSubtitle(selectedInputColor,"Color",false)
    }

    const quantityInput = document.getElementById("quantity");
    changeQuantity(quantityInput)
  } 
};

showContent(product);

//traer informacion del formulario
const formProduct=document.querySelector("#formAddProduct");

const validateForm = (formData) =>{
  if(formData.quantity ==0){
    alert("la cantidad no puede ser cero")
    return false;
  }
  else{
    return true;
  }
}

const getDataForm = (form) => {
    const formData = new FormData(form);
    let dataForm = {};
    for (const [key, value] of formData.entries()) {
      dataForm[key] = value;
      // console.log(`${key}`," = ",value, );
    }
    // console.log("el data form es",dataForm)
    return dataForm;
};

const btnBuy = document.getElementById("btn_buy");
btnBuy.addEventListener("click", (e) => {
      e.preventDefault();
      if(sendProductToCart()){
        window.location.href = "../pages/order.html";
      }
});

const btnAdd = document.getElementById("btn_add_cart");
btnAdd.addEventListener("click", (e) => {
  e.preventDefault()
  if(sendProductToCart()){
    showCart(btnAdd);
  }
});

const addProductCart = (data) =>{
  const dataForm=getDataForm(formProduct);
  const validatedForm = validateForm(dataForm);
  if (validatedForm){
    const especificaciones= dataForm;
    const productoNuevo={
      idProduct,
      especificaciones,
    }
    console.log("datasdxs",data)
    data.push(productoNuevo);
    return true;
  }else{
    return false;
  }
}

const sendProductToCart =() => {
  let data=localStorage.getItem("data")
      if (data === null) {
        data=[];        
        console.log("data vacio")
      } 
      else{
        try {
          data = JSON.parse(data);
        } catch (error) {
          console.error("Error al parsear data:", error);
          data = [];
        }
      }

      if(addProductCart(data)){
        console.log("antes de subir al local")
        localStorage.setItem("data",JSON.stringify(data));
        return true;
      } 
      else{
        console.log("Error al agregar producto")
        return false;
      }
      console.log("data",data)
}