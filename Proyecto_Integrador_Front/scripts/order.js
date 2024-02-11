
import { listaProductos } from "../module/products_module.js";
import { filtrarPorTipo, buscarPorNombre } from "../module/functions_module.js";

const btnPurchase = document.getElementById("btn_purchase");
 btnPurchase.addEventListener("click", () => {
    // localStorage.setItem("id_product", product.id);
   window.location.href = "../pages/purchase.html";
   
   
 });

 const btnDelete = document.getElementById("btn_delete");
 btnDelete.addEventListener("click", () => {
  alert("entré");
  
   
   
 });