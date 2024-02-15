const url = "http://localhost:3000";

const urlProducts=`${url}/productos/`;

export const getAll = async () => {
  try {
    const promesa = await fetch(urlProducts);
    const respuesta = await promesa.json();
    console.log("rptaAll:", respuesta);
    return respuesta;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const getById = async (id) => {
  try {
    const promesa = await fetch(`${urlProducts}?id=${id}`);
    const respuesta = await promesa.json();
    // console.log("rptaid:", respuesta[0]);
    if (!respuesta.length == 0) {
      return respuesta[0];
    } else {
      throw("Producto no encontrado");
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};
export const getByName = async (name) => {
  try {
    const promesa = await fetch(`${urlProducts}?nombre=${name}`);
    const respuesta = await promesa.json();
    console.log("rptaNombre:", respuesta[0]);
    if (!respuesta.length == 0) {
      return respuesta[0];
    } else {
      throw("Producto no encontrado");
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};

//getByName("Exquisite Earrings");//solo regresa el nombre exacto
// getById(0);
// getById(1);
// getAll();

//crud carrito

const urlCart=`${url}/carrito/`;
export const getAllCart = async () => {
  try {
    const promesa = await fetch(urlCart)
    const respuesta = await promesa.json();
    console.log("rptaAllCart:", respuesta);
    return respuesta;
  } catch (error) {
    console.log("Error: ", error);
  }
};

// console.log("cart", await getAllCart())

export const addProductsCart = async(products) =>{

  try {
    const productsAdd = {
      products,
    };
  
    const promesa= await fetch(urlCart, {
      method: "POST",
      body: JSON.stringify(productsAdd),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
  
    const respuesta= await promesa.json();
    console.log("respuesta",respuesta) 
    return true;   
  } catch (error) {
    console.log("Error: ", error);
    return false;
  }
}

// const idP=1;
// const especificaciones ={color: 'golden', size: 's', quantity: '0'}
// const data =[
//   {
//     idP,
//     especificaciones,
//   }
// ]

// addProductsCart(data)
// addProductsCart(data)