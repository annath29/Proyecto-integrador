import {showCart} from './modalCart.js';
import { getById } from '../module/functions_fetch.js';

const btnBuy = document.getElementById("btn_buy");
const btnAdd = document.getElementById("btn_add_cart");
  btnBuy.addEventListener("click", () => {
       // localStorage.setItem("id_product", product.id);
      //  debe añadir los productos al carrito para recibirlos en order
      window.location.href = "../pages/order.html";
   });
  btnAdd.addEventListener("click", () => {
    //  debe añadir los productos al carrito
       showCart(btnAdd);
   });

 const idProduct = localStorage.getItem("id_product");
//  console.log(product,"product")

const product= await getById(idProduct);
console.log("product",product)

const nameProduct= document.getElementById("breadcrumbs_name_product");
nameProduct.innerText=product.nombre;

const showContent = (product) => {
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

showContent(product);