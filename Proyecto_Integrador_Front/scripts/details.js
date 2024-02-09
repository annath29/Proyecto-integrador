import {showCart} from './modalCart.js';
const btnBuy = document.getElementById("btn_buy");
const btnAdd = document.getElementById("btn_add_cart");
    btnBuy.addEventListener("click", () => {
       // localStorage.setItem("id_product", product.id);
      window.location.href = "../pages/order.html";
    });
    btnAdd.addEventListener("click", () => {
        // localStorage.setItem("id_product", product.id);
       //window.location.href = "../pages/order.html";
       showCart(btnAdd);
       
     });