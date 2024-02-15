
//import { listaProductos } from "../module/products_module.js";
//import { filtrarPorTipo, buscarPorNombre } from "../module/functions_module.js";

 listaProductos = [
  {
    id: 1,
    nombre: "Luxury Charms Ring",
    codigo: "78205",
    precioUnitario: 620.73,
    tipoAccesorio: "ring",
    imagenes: ["../assets/Joyas/Selection 1.png", "ring_gold_2.png"],
    description: "Elegant ring of gold with unique design.",
    stock: {
      dorado: { seis: 1, siete: 17, ocho: 8 },
      plata: { seis: 1, siete: 17, ocho: 8 },
    },
  },
  {
    id: 2,
    nombre: "Exquisite Earrings",
    codigo: "92701",
    precioUnitario: 125.28,
    tipoAccesorio: "earring",
    imagenes: ["../assets/Productos/Producto2.png", "earring_gold_2.png"],
    description: "Gold earring with magnetic closure.",
    stock: {
      dorado: { s: 4, m: 8 },
      oroRosa: { s: 13 },
      plata: { s: 7, m: 2, l: 3 },
    },
  },
  
]

const btnPurchase = document.getElementById("btn_purchase");
 btnPurchase.addEventListener("click", () => {
   
   
 });
 
function mostrarProductos() {
 
  const listaProductos = document.getElementById(' listaProductos');

  
  document.body.innerHTML = `
  <h5 class="titulo">Luxury Charms Ring</h5>
  `;
}

/** 
 const btnDelete = document.getElementById("btn_delete");
 btnDelete.addEventListener("click", () => {
  const div = document.getElementsByClassName(".row");
  div.style.display='none';
 });
*/

