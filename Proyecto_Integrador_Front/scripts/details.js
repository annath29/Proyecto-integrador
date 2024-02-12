import { showCart } from "./modalCart.js";
import { getById } from "../module/functions_fetch.js";

// const btnBuy = document.getElementById("btn_buy");
// const btnAdd = document.getElementById("btn_add_cart");
// btnBuy.addEventListener("click", () => {
//       // localStorage.setItem("id_product", product.id);
//     //  debe añadir los productos al carrito para recibirlos en order
//     window.location.href = "../pages/order.html";
//   });
// btnAdd.addEventListener("click", () => {
//   //  debe añadir los productos al carrito
//       showCart(btnAdd);
//   });

//trae el id de la pagina de products mediantge el local storage
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
const conteinerVideo= document.getElementById("video");
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

    const figureElement = document.getElementById("videoFigure");
    console.log(product.imagenes[0]);
    figureElement.style.backgroundImage = 'url(' + product.imagenes[0]+ ')';

    const otherImagesSection = document.querySelector('.other_images');
  
    for (let i = 0; i < product.imagenes.length; i++) {
      const img = document.createElement('img');
      img.src = product.imagenes[i];
      img.alt = `${product.nombre}${i}`;
      if (i === 0) {
        img.classList.add('img_active');
      }
      otherImagesSection.appendChild(img);
    }

    const imagenes = document.querySelectorAll(".other_images img");
    const imagenPrincipal = document.querySelector('.img_main');
    imagenes.forEach((imagen) => {
      imagen.addEventListener("click", () => {
        imagenes.forEach(img => {
          console.log(img)
          img.classList.remove("img_active");
          imagenPrincipal.src = imagen.src;
        });
        imagen.classList.add("img_active");
        
      });
    });

  // products.forEach((product) => {
  //   const imgProduct = document.getElementById(`img_product${product.id}`);
  //   imgProduct.addEventListener("click", () => {
  //       localStorage.setItem("id_product", product.id);
  //     window.location.href = "../pages/details.html";
  //   });
  // });
};
}
showContent(product);
