import { calcularTotalCompra } from "../module/functions_module.js";
import { getById,addProductsCart } from "../module/functions_fetch.js";

const buttonCart = document.getElementById("btn_cart");
// const productsCart = [
//       {
//           id: 1,
//           nombre: "Luxury Charms Ring",
//           codigo: "78205",
//           precioUnitario: 620.73,
//           tipoAccesorio: "anillo",
//           imagenes: ["../assets/Joyas/Selection 1.png", "anillo_oro_2.jpg"],
//           descripcion: "Anillo elegante de oro con diseño único.",
//           cantidad:1,
//         },
//         {
//           id: 2,
//           nombre: "Exquisite Earrings",
//           codigo: "92701",
//           precioUnitario: 125.28,
//           tipoAccesorio: "arete",
//           imagenes: ["../assets/Productos/Producto2.png", "arete_oro_2.jpg"],
//           descripcion: "Arete en oro con cierre magnético.",
//           cantidad:2,
//         },
//       {
//           id: 1,
//           nombre: "Luxury Charms Ring",
//           codigo: "78205",
//           precioUnitario: 620.73,
//           tipoAccesorio: "anillo",
//           imagenes: ["../assets/Joyas/Selection 1.png", "anillo_oro_2.jpg"],
//           descripcion: "Anillo elegante de oro con diseño único.",
//           cantidad:1,
//         },
//         {
//           id: 2,
//           nombre: "Exquisite Earrings",
//           codigo: "92701",
//           precioUnitario: 125.28,
//           tipoAccesorio: "arete",
//           imagenes: ["../assets/Productos/Producto2.png", "arete_oro_2.jpg"],
//           descripcion: "Arete en oro con cierre magnético.",
//           cantidad:2,
//         },
    
// ]

const productsCart= JSON.parse(localStorage.getItem("data"));
// const productsCart= [
//     {
//       "idProduct": 1,
//       "especificaciones": {
//         "color": "golden",
//         "size": "s",
//         "quantity": "1"
//       }
//     },
//     {
//       "idProduct": 2,
//       "especificaciones": {
//         "color": "golden",
//         "size": "s",
//         "quantity": "2"
//       }
//     }
// ]

export const showCart = (button) => {
  button.addEventListener("click", () => {
    createModal(productsCart);
  });
};

const createModal = async (products) => {
    const existingModal = document.getElementById("modal");
    if (existingModal) {
        document.body.removeChild(existingModal);
    }

    const modal = document.createElement("div");
    modal.id = "modal";
    modal.className = "modalCart";

    if (products.length === 0) {
        console.log("vacio");
        modal.innerHTML=`
        <section class="cart">
            <section class="cart_top">
                <h1>Your Cart</h1>
                <button id="close" ><img src="../assets/E remove 1.svg" ></button>
            </section>
            <div>
                <hr>
                <p class="empty_alert">You have not added items to the cart!</p>
            </div>
        </section>
        `
    }
    else{
        console.log("lleno")
        modal.innerHTML = `
            <section class="cart">
                <section class="cart_top">
                    <h1>Your Cart</h1>
                    <button id="close" ><img src="../assets/E remove 1.svg" ></button>
                </section>
                <section id="products">
                </section>
                <section class="total">
                    <p>Total:</p>
                    <h2 id="total"></h2>
                </section>
                <button id="btn-continue">Continue to check out</button>
            </section>
        `;
    }
    document.body.appendChild(modal);
    const closeButton = document.getElementById("close");
    closeModal(closeButton);

    const cartProduct=document.getElementById("products");
    cartProduct.innerHTML= await listProductsCart(products);
    
    const precioTotal= await calcularTotalCompra(products);    
    const total=document.getElementById("total");
    total.innerHTML=`$ ${precioTotal}`

    const continueButton= document.getElementById("btn-continue");
    continueButton.addEventListener("click",async()=>{
        // localStorage.setItem("Cart",JSON.stringify(products))
        const addcart=await addProductsCart(products);
        if(addcart){
            window.location.href = "../pages/order.html";
        }
        else{
            console.error("no se pudo agregar compra");
        }
    });

};
const closeModal = (btn) => {
    btn.addEventListener("click", () => {
        // alert("vas a cerrar");
        const modal = document.getElementById("modal");
        modal.classList.toggle("closeModal");
        modal.classList.toggle("modalCart");
    });
};
showCart(buttonCart);


const listProductsCart = async (products) => {
    let html = "";
    for (const product of products) {
        try {
            const producto = await getById(product.idProduct);
            // console.log(producto);
            html+=`
                <section class="cart_product">
                    <figure>
                        <img src="${producto.imagenes[0]}" alt="${producto.nombre}">
                        <figcaption>
                            <h4>${producto.nombre}</h4>
                            <p class="code">Code: ${producto.codigo}</p>
                            <p class="price"> $ ${producto.precioUnitario}</p>
                        </figcaption>
                        <div>
                            <button>
                                <img src="../assets/Button 6.svg" alt="edit">
                            </button>
                            <p>X ${product.especificaciones.quantity}</p>
                        </div>
                    </figure>
                </section>        
            `  
        } catch (error) {
            console.log("Error: ", error);
        }
    }
    return html;
};