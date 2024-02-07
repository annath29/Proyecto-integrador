
// alert("conect js products")

import {listaProductos} from '../module/products_module.js'
import { filtrarPorTipo } from '../module/functions_module.js';

// const prod=[]

const buttonAll =document.getElementById("all_products");
const buttonRing =document.getElementById("rings");
const buttonNecklaces =document.getElementById("necklaces");
const buttonEarrings =document.getElementById("earrings");
const buttonBracelets =document.getElementById("bracelets");

const showCards =(products) =>{
    console.log(products,"products")
    const conteinerCards=document.getElementById("container_products");
    conteinerCards.innerHTML=``;
    if(products.length === 0){
        conteinerCards.innerHTML=`
        <div class="empty_products">
            <p>There are no products to show</p>
        </div>
        `
    }
    else{
        let html=``
        products.forEach(product => {
            html += `
            <div class="cards">
                <img
                src="${product.imagenes[0]}"
                alt="${product.nombre}"
                />
                <h3>${product.nombre}</h3>
                <p>$ ${product.precioUnitario}</p>
            </div>
            `
        });
        conteinerCards.innerHTML=html;
    }
}


const showAll = (button) =>{
    button.addEventListener("click", () => {
        showCards(listaProductos);
    })
}

const showRings = (button) =>{
    button.addEventListener("click", () => {
        const filterRings=filtrarPorTipo(listaProductos,"ring")
        showCards(filterRings);
    })
}

showAll(buttonAll);

showRings(buttonRing);