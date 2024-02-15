import { getById} from "../module/functions_fetch.js";
import { calcularTotalCompra } from "../module/functions_module.js";

const btnPurchase = document.getElementById("btn_purchase");
btnPurchase.addEventListener("click", () => {
  // localStorage.setItem("id_product", product.id);
  window.location.href = "../pages/purchase.html";
});

const listProducts= async (products) => {
  let html = "";
  for (const product of products) {
      try {
          const producto = await getById(product.idProduct);
          // console.log(producto);
          html+=`
              <div class="row">
                  <figure class="column">
                      <img src="${producto.imagenes[0]}" alt="${producto.nombre}">
                      <figcaption>
                          <h5>${producto.nombre}</h5>
                          <p>Code: ${producto.codigo}</p>                          
                      </figcaption>
                  </figure>
                  <div>
                    <h5>$${producto.precioUnitario}</h5>
                    <button id="btn_delete" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M8.65143 6.66514V3.23657L15.5086 3.23657V6.66514"
                          stroke="#565E6C"
                          stroke-width="2.05714"
                          stroke-miterlimit="10"
                          stroke-linecap="square"
                        />
                        <path
                          d="M18.9372 12.665V20.3793C18.9372 20.834 18.7566 21.27 18.4351 21.5915C18.1136 21.913 17.6776 22.0936 17.2229 22.0936L6.93719 22.0936C6.48253 22.0936 6.04649 21.913 5.725 21.5915C5.40351 21.27 5.2229 20.834 5.2229 20.3793L5.2229 12.665"
                          stroke="#565E6C"
                          stroke-width="2.05714"
                          stroke-miterlimit="10"
                          stroke-linecap="square"
                        />
                        <path
                          d="M12.08 14.3794V17.808"
                          stroke="#565E6C"
                          stroke-width="2.05714"
                          stroke-miterlimit="10"
                          stroke-linecap="square"
                        />
                        <path
                          d="M8.65143 14.3794V17.808"
                          stroke="#565E6C"
                          stroke-width="2.05714"
                          stroke-miterlimit="10"
                          stroke-linecap="square"
                        />
                        <path
                          d="M15.5086 14.3794V17.808"
                          stroke="#565E6C"
                          stroke-width="2.05714"
                          stroke-miterlimit="10"
                          stroke-linecap="square"
                        />
                        <path
                          d="M21.5086 6.66504L2.65143 6.66504L2.65143 10.0936L21.5086 10.0936V6.66504Z"
                          stroke="#565E6C"
                          stroke-width="2.05714"
                          stroke-miterlimit="10"
                          stroke-linecap="square"
                        />
                      </svg>
                  </button>
                  </div>
              </div>        
          `  
      } catch (error) {
          console.log("Error: ", error);
      }
  }
  return html;
};

const sectionProducts = document.getElementById("productsCart");
let productsCart = JSON.parse(localStorage.getItem("data"));
console.log(productsCart);

if (productsCart == null) {
  console.log("no hay datos en el local storage");
  productsCart = {};
}
if (!(Object.keys(productsCart).length === 0)) {
  sectionProducts.innerHTML=await listProducts(productsCart);
  const precioTotal= await calcularTotalCompra(productsCart);    
  const total=document.getElementById("totalPurchase");
  total.innerHTML=`$ ${precioTotal}`;
  const subtotal=document.getElementById("subtotalPurchase");
  subtotal.innerHTML=`$ ${precioTotal}`;


}else {
  console.log("vacio")
  sectionProducts.innerHTML = `
    <p> ACTUALMENTE NO HAY PRODUCTOS AGREGADOS PARA COMPRAR </p>
  `;
}

const user = JSON.parse(localStorage.getItem("user"));
//  console.log(user);

if (!(Object.keys(user).length === 0)) {
  const linkForm = document.getElementById("link_form");
  linkForm.style.display = "none";
  const insertName = document.getElementById("nombre");
  insertName.innerHTML = `
   ${user.nombreCompleto} thanks for adding payment method
  `;
}


