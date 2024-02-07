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
const ordenarPorPrecio=(productos, orden) =>{
    const copiaProductos = productos.slice();  
    if (orden === 'ascendente') {
      copiaProductos.sort((a, b) => a.precioUnitario - b.precioUnitario);
    } else if (orden === 'descendente') {
      copiaProductos.sort((a, b) => b.precioUnitario - a.precioUnitario);
    }
    return copiaProductos;
}

//Funcion para calcular el total de la compra
const calcularTotalCompra = (productos) =>{
    let total = 0;  
    for (let i = 0; i < productos.length; i++) {
      const producto = productos[i];
      // console.log(producto);
      total += producto.cantidad * producto.precio;
    }  
    return total;
}