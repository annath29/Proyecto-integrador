// alert("conect js products")

// import { listaProductos } from "../module/products_module.js";
import { filtrarPorTipo, buscarPorNombre } from "../module/functions_module.js";
import { getAll } from "../module/functions_fetch.js";

// const prod=[]
let listaProductos = await getAll();
const buttonAll = document.getElementById("all_products");
const buttonRing = document.getElementById("rings");
const buttonNecklace = document.getElementById("necklaces");
const buttonEarring = document.getElementById("earrings");
const buttonBracelet = document.getElementById("bracelets");

const conteinerCards = document.getElementById("container_products");
conteinerCards.innerHTML = ``;
const showCards = (products) => {
  // console.log(products,"products")
  if (products.length === 0) {
    conteinerCards.innerHTML = `
        <div class="empty_products">
            <p>There are no products to show</p>
        </div>
        `;
  } else {
    let html = ``;
    products.forEach((product) => {
      html += `
            <div class="cards">
                <img id="img_product${product.id}"
                src="${product.imagenes[0]}"
                alt="${product.nombre}"
                />
                <h3>${product.nombre}</h3>
                <p>$ ${product.precioUnitario}</p>
            </div>
            `;
    });
    conteinerCards.innerHTML = html;
  }
  products.forEach((product) => {
    const imgProduct = document.getElementById(`img_product${product.id}`);
    imgProduct.addEventListener("click", () => {
        localStorage.setItem("id_product", product.id);
      window.location.href = "../pages/details.html";
    });
  });
};

const inputSerch = document.getElementById("search_product");
const buttonSerch = document.getElementById("btn_search");
const searchProduct = (input, button) => {
  input.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
      const productsbyName = buscarPorNombre(listaProductos, input.value);
      showCards(productsbyName);
      conteinerCards.scrollIntoView();
    }
  });
  button.addEventListener("click", () => {
    const productsbyName = buscarPorNombre(listaProductos, input.value);
    showCards(productsbyName);
    conteinerCards.scrollIntoView();
  });
};
searchProduct(inputSerch, buttonSerch);
showCards(listaProductos);

const showAll = (button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    showCards(listaProductos);
  });
};
const showType = (button, term) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const filterProducts = filtrarPorTipo(listaProductos, term);
    showCards(filterProducts);
  });
};

showAll(buttonAll);
showType(buttonRing, "ring");
showType(buttonBracelet, "bracelet");
showType(buttonEarring, "earring");
showType(buttonNecklace, "Necklace");

const botones = document.querySelectorAll('.buttons li');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    botones.forEach(b => {
      b.classList.remove('btn_active');
    });
    boton.classList.add('btn_active');
  });
});



/**const selectElement = document.getElementById("filter_products");

console.log("Texto seleccionado:", selectedText);

const opt=selectElement.options[selectElement.selectedIndex].value;

console.log(opt)
*/
