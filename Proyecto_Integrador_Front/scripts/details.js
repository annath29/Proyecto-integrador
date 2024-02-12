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

      <aside class="description_buy_product">
          <h1>${product.nombre}</h1>
          <p>Code: ${product.codigo}</p>
          <h1 class="price">$ ${product.precioUnitario}</h1>
          <section class="colors">
            <p class="subtitle">Color - Rose Gold</p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="17" fill="#E6AE87" stroke="#0D554A" stroke-width="2"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="17.5" fill="#DEE1E6" stroke="#DEE1E6"/>
                  </svg>
            </div>
          </section>
          <section class="sizes">
            <section>
                <p class="subtitle">Size - 48</p>
                <a>What is my size?</a>
            </section>
            <div>
              <a class="active_size" href="">48</a>
              <a href="">50</a>
              <a href="">52</a>
              <a href="">54</a>
              <a href="">56</a>
              <a href="">58</a>
              <a href="">60</a>
              <a href="">62</a>
              <a href="">64</a>
              <a href="">66</a>
              <a href="">68</a>
              <a href="">70</a>
            </div>
          </section>
          <section class="quantity">
            <p class="subtitle">Quantity</p>
            <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>
          </section>
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
