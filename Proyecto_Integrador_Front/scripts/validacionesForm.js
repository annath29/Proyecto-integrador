// const formProduct=document.querySelector("#formAddProduct")

// const getForm = (form) => {
//     const formData = new FormData(form);
//     console.log("formData",formData);
//     const dataForm = {};
//     for (const [key, value] of formData.entries()) {
//       dataForm[key] = value;
//       console.log("dataForm[key]",dataForm[key]," = ;",value, );
//     }
//     console.log("el data form es",dataForm)
//     return dataForm;
//   };
  

// const btnBuy = document.getElementById("btn_buy");
// btnBuy.addEventListener("click", (e) => {
//         e.preventDefault();
//     // localStorage.setItem("id_product", product.id);
//     //  debe añadir los productos al carrito para recibirlos en order
//     // window.location.href = "../pages/order.html";
//     getForm(formProduct);
// });

const producto = {
  "id": 2,
  "nombre": "Exquisite Earrings",
  "codigo": "92701",
  "precioUnitario": 125.28,
  "tipoAccesorio": "earring",
  "imagenes": ["../assets/Productos/Producto2.png", "earring_gold_2.png"],
  "descripcion": "Gold earring with magnetic closure.",
  "stock": {
    "golden": {
      "talla": { "s": 4, "m": 8 },
      "color": "#efb810"
    },
    "roseGold": {
      "talla": { "s": 13 },
      "color": "#C48F7F"
    },
    "silver": {
      "talla": { "s": 7, "m": 2, "l": 3 },
      "color": "#C0C0C0"
    }
  }
};
const stock=producto.stock

const form = document.body;
let html=``

for (const key in stock) {
  if (Object.hasOwnProperty.call(stock, key)) {
    const value = stock[key];
    html+=`
    <div>
      <p>${key} </p>
      <p>colores:${stock[key].color} </p>
      <!--  <p>tallas:{${stock[key].talla}}-->
      <ul>
    `
    ;
    const tallas = stock[key].talla;
    for (const tallaKey in tallas) {
      if (Object.hasOwnProperty.call(tallas, tallaKey)) {
        html += `<li>${tallaKey}: ${tallas[tallaKey]}</li>`;
      }
    }
    html += `
      </ul>
    </div>
    `;
    console.log(key, "=", value);
  }
}

form.innerHTML=html;