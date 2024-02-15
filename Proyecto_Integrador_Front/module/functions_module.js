import { getById} from "../module/functions_fetch.js";

// Función para filtrar productos por tipo
export const filtrarPorTipo = (productos, tipo) =>{
    return productos.filter(
      (producto) => producto.tipoAccesorio.toLowerCase() === tipo.toLowerCase()
    );
}

// Función para buscar productos por nombre
export const buscarPorNombre = (productos, nombreBuscar) => {
    const filtroPorNombre = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(nombreBuscar.toLowerCase())
    );
    return filtroPorNombre;
}

// Función para ordenar productos por precio(ascendente y descendente)
 export const ordenarPorPrecio=(productos, orden) =>{
    const copiaProductos = productos.slice();  
    if (orden === 'ascendente') {
      copiaProductos.sort((a, b) => a.precioUnitario - b.precioUnitario);
    } else if (orden === 'descendente') {
      copiaProductos.sort((a, b) => b.precioUnitario - a.precioUnitario);
    }
    return copiaProductos;
}

//Funcion para calcular el total de la compra
export const calcularTotalCompra = async (products) =>{
    let total = 0;  
    for (const product of products) {
        try {
            console.log("product",product);
            console.log("product",product.idProduct);
            const p=product.idProduct
            const producto = await getById(p);
            total += producto.precioUnitario * product.especificaciones.quantity;
        } catch (error) {
            console.log("Error: ", error);
        }
    }
    // for (let i = 0; i < productos.length; i++) {
    //   const producto = productos[i];
    //   // console.log(producto);
    //   total += producto.cantidad * producto.precio;
    // }  
    return total;
}