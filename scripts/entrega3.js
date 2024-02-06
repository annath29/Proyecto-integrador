import {listaProductos} from '../module/products_module.js'

// Función para filtrar productos por tipo
const filtrarPorTipo = (productos, tipo) =>{
  return productos.filter(
    (producto) => producto.tipoAccesorio.toLowerCase() === tipo.toLowerCase()
  );
}

const tipoDeAccesorio = prompt("ingrese el tipo de producto a buscar");
const productosFiltrados = filtrarPorTipo(listaProductos, tipoDeAccesorio);
console.log("Productos filtrados por tipo:", productosFiltrados);

// Función para buscar productos por nombre
const buscarPorNombre = (productos, nombreBuscar) => {
  const filtroPorNombre = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(nombreBuscar.toLowerCase())
  );
  return filtroPorNombre;
}

const nombre =  prompt("ingrese el nombre del producto a buscar");
const productosEncontrados = buscarPorNombre(listaProductos, nombre);
console.log("Productos encontrados por nombre:", productosEncontrados);


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
  
  const productosOrdenadosAscendente = ordenarPorPrecio(listaProductos, 'ascendente');
  console.log('Productos ordenados por precio ascendente:', productosOrdenadosAscendente);
  
  const productosOrdenadosDescendente = ordenarPorPrecio(listaProductos, 'descendente');
  console.log('Productos ordenados por precio descendente:', productosOrdenadosDescendente);

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
  
  const productosPrueba = [
    { nombre:'producto1', cantidad: 2, precio: 16000 },
    { nombre:'producto2', cantidad: 7, precio: 5000 },
    { nombre:'producto3', cantidad: 4, precio: 28000 }
  ];
  
  const resultado = calcularTotalCompra(productosPrueba);
  console.log("Total a pagar: $" + resultado);
  