const buttonCart = document.getElementById("btn_cart");

const productsCart = [
      {
          id: 1,
          nombre: "Luxury Charms Ring",
          codigo: "78205",
          precioUnitario: 620.73,
          tipoAccesorio: "anillo",
          imagenes: ["../assets/Joyas/Selection 1.png", "anillo_oro_2.jpg"],
          descripcion: "Anillo elegante de oro con diseño único.",
          cantidad:1,
        },
        {
          id: 2,
          nombre: "Exquisite Earrings",
          codigo: "92701",
          precioUnitario: 125.28,
          tipoAccesorio: "arete",
          imagenes: ["../assets/Productos/Producto2.png", "arete_oro_2.jpg"],
          descripcion: "Arete en oro con cierre magnético.",
          cantidad:2,
        },
      {
          id: 1,
          nombre: "Luxury Charms Ring",
          codigo: "78205",
          precioUnitario: 620.73,
          tipoAccesorio: "anillo",
          imagenes: ["../assets/Joyas/Selection 1.png", "anillo_oro_2.jpg"],
          descripcion: "Anillo elegante de oro con diseño único.",
          cantidad:1,
        },
        {
          id: 2,
          nombre: "Exquisite Earrings",
          codigo: "92701",
          precioUnitario: 125.28,
          tipoAccesorio: "arete",
          imagenes: ["../assets/Productos/Producto2.png", "arete_oro_2.jpg"],
          descripcion: "Arete en oro con cierre magnético.",
          cantidad:2,
        },
    
]
// const productsCart = [
//     {
//       idProduct: 1,
//       especificaciones:{
//         cantidad:2,
//         talla:"m",
//         color:"dorado",
//         cantidad,
//       }
//     },
//     {
//       idProduct: 1,
//       especificaciones:{
//         cantidad:2,
//         talla:"m",
//         color:"dorado",
//         cantidad,
//       }
//     }
    
// ]



export const showCart = (button) => {
  button.addEventListener("click", () => {
    createModal(productsCart);
  });
};

const createModal = (products) => {
    const existingModal = document.getElementById("modal");
    if (existingModal) {
        document.body.removeChild(existingModal);
    }

    const modal = document.createElement("div");
    modal.id = "modal";
    modal.className = "modalCart";

    if (products.length === 0) {
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
                <button>Continue to check out</button>
            </section>
        `;
    }
    document.body.appendChild(modal);

    const closeButton = document.getElementById("close");
    closeModal(closeButton);

    const cartProduct=document.getElementById("products");
    cartProduct.innerHTML=listProductsCart(products);

    const precioTotal= calcularTotalCompra(products);    
    const total=document.getElementById("total");
    total.innerHTML=`$ ${precioTotal}`
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


const listProductsCart = (products) => {
    let html="";

    products.forEach(product => {
        html+=`
        <section class="cart_product">
            <figure>
                <img src="${product.imagenes[0]}" alt="${product.nombre}">
                <figcaption>
                    <h4>${product.nombre}</h4>
                    <p class="code">Code: ${product.codigo}</p>
                    <p class="price"> $ ${product.precioUnitario}</p>
                </figcaption>
            </figure>
            <div>
                <button>
                    <img src="../assets/Button 6.svg" alt="edit">
                </button>
                <p>X ${product.cantidad}</p>
            </div>
        </section>        
        `
    });    
    return html;
}

const calcularTotalCompra = (productos) =>{
    let total = 0;  
    for (let i = 0; i < productos.length; i++) {
      const producto = productos[i];
      total += producto.cantidad * producto.precioUnitario;
    }  
    return total;
}
