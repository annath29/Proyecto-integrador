const listaProductos = [
  {
    id: 1,
    nombre: "Luxury Charms Ring",
    codigo: "78205",
    precioUnitario: 620.73,
    tipoAccesorio: "anillo",
    imagenes: ["../assets/Joyas/Selection 1.png", "anillo_oro_2.jpg"],
    descripcion: "Anillo elegante de oro con diseño único.",
    stockPorColor: {
      plata: 20,
      dorado: 15,
    },
    stockPorTalla: {
      seis: 1,
      siete: 17,
      ocho: 8,
    },
  },
  {
    id: 2,
    nombre: "Exquisite Earrings",
    codigo: "92701",
    precioUnitario: 125.28,
    tipoAccesorio: "arete",
    imagenes: ["../assets/Productos/Producto2.png", "arete_oro_2.jpg"],
    descripcion: "Arete en oro con cierre magnético.",
    stockPorColor: {
      plata: 12,
      dorado: 25,
      oroRosa: 8,
    },
  },
  {
    id: 3,
    nombre: "Delights Earrings",
    codigo: "92781",
    precioUnitario: 327.71,
    tipoAccesorio: "arete",
    imagenes: ["../assets/Productos/Producto4.jpeg", "arete_plata_oro_2.jpg"],
    descripcion:
      "Arete en plata con baño de oro con un hermoso clip de delfin.",
    stockPorColor: {
      dorado: 7,
      oroRosa: 14,
    },
  },
  {
    id: 4,
    nombre: "Luxury Gems Necklace",
    codigo: "82051",
    precioUnitario: 168.76,
    tipoAccesorio: "collar",
    imagenes: [
      "../assets/Catalogo/catalogo_producto1.png",
      "collar_gema_2.jpg",
    ],
    descripcion: "Elegante collar de joyas de lujo.",
    stockPorColor: {
      plata: 20,
      dorado: 15,
    },
    stockPorTalla: {
      s: 13,
      m: 7,
      l: 8,
    },
  },
  {
    id: 5,
    nombre: "Aurora Ring",
    codigo: "78202",
    precioUnitario: 125.28,
    tipoAccesorio: "anillo",
    imagenes: [
      "../assets/Catalogo/catalogo_producto2.jpg",
      "../assets/Catalogo/catalogo_producto2_2.jpg",
    ],
    descripcion: "Anillo deslumbrante inspirado en la aurora boreal.",
    stockPorTalla: {
      cinco: 8,
      seis: 16,
      siete: 4,
    },
  },
  {
    id: 6,
    nombre: "Reflections Necklace",
    codigo: "82097",
    precioUnitario: 620.73,
    tipoAccesorio: "collar",
    imagenes: [
      "../assets/Catalogo/catalogo_producto3.jpg",
      "../assets/Catalogo/catalogo_producto3_2.jpg",
    ],
    descripcion: "Collar con diseño reflejante y elegante.",
    stockPorColor: {
      plateado: 20,
      dorado: 15,
    },
    stockPorTalla: {
      s: 9,
      m: 16,
      l: 2,
    },
  },
  {
    id: 7,
    nombre: "Dreamy Infinity Ring",
    codigo: "78224",
    precioUnitario: 527.71,
    tipoAccesorio: "anillo",
    imagenes: [
      "../assets/Catalogo/catalogo_producto4.jpg",
      "../assets/Catalogo/catalogo_producto4_2.jpg",
    ],
    descripcion: "Anillo con joyas bellas y elegantes de la mejor calidad.",
    stockPorTalla: {
      seis: 23,
      cinco: 1,
      ocho: 5,
    },
  },
  {
    id: 8,
    nombre: "Opulent Jewels Ring",
    codigo: "78239",
    precioUnitario: 168.76,
    tipoAccesorio: "anillo",
    imagenes: [
      "../assets/Catalogo/catalogo_producto5.jpg",
      "../assets/Catalogo/catalogo_producto5_2.jpg",
    ],
    descripcion: "Anillo infinito con un toque de ensueño.",
    stockPorTalla: {
      cinco: 4,
      seis: 18,
      siete: 6,
    },
  },
  {
    id: 9,
    nombre: "Serene Solitaire Earrings",
    codigo: "92716",
    precioUnitario: 125.28,
    tipoAccesorio: "aretes",
    imagenes: [
      "../assets/Catalogo/catalogo_producto6.jpg",
      "../assets/Catalogo/catalogo_producto6_2.jpg",
    ],
    descripcion: "Aretes en un bello tono azul que transmiten serenidad.",
    stockPorColor: {
      dorado: 4,
      oroRosa: 3,
    },
  },
  {
    id: 10,
    nombre: "Timeless Halo Earrings",
    codigo: "92777",
    precioUnitario: 620.73,
    tipoAccesorio: "aretes",
    imagenes: [
      "../assets/Catalogo/catalogo_producto7.jpg",
      "../assets/Catalogo/catalogo_producto7_2.jpg",
    ],
    descripcion: "Aretes con halo atemporal y elegante.",
    stockPorColor: {
      plateado: 8,
    },
  },
  {
    id: 11,
    nombre: "Exquisite Earrings",
    codigo: "92783",
    precioUnitario: 527.71,
    tipoAccesorio: "aretes",
    imagenes: [
      "../assets/Catalogo/catalogo_producto8.jpg",
      "../assets/Catalogo/catalogo_producto8_2.jpg",
    ],
    descripcion: "Aretes que te acompañaran en cualquier ocasion especiales.",
    stockPorColor: {
      dorado: 23,
    },
  },
];
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
      console.log(producto);
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
  