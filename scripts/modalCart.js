const buttonCart= document.getElementById("btn_cart")
console.log(buttonCart)

// import listaProductos from './entrega3'

const showCart = (button) =>{
    button.addEventListener("click", () =>{
        // alert("click")
        document.body.innerHTML += `
        <div class="modalCart">
        <section class="cart">
            <section class="cart_top">
                <h1>Your Cart</h1>
                <button><img src="../assets/E remove 1.svg" ></button>
            </section>
            <section class="cart_product">
                <figure>
                    <img src="../assets/Productos/Producto1.png" alt="producto1">
                    <figcaption>
                        <h2>nombre</h2>
                        <p class="code">code</p>
                        <p>price</p>
                    </figcaption>
                </figure>
                <div>
                    <button>
                        <img src="../assets/Button 6.svg" alt="edit">
                    </button>
                    <p>x1</p>
                </div>
            </section>
            <section class="cart_product">
                <figure>
                    <img src="../assets/Productos/Producto1.png" alt="producto1">
                    <figcaption>
                        <h2>nombre</h2>
                        <p class="code">code</p>
                        <p>price</p>
                    </figcaption>
                </figure>
                <div>
                    <button>
                        <img src="../assets/Button 6.svg" alt="edit">
                    </button>
                    <p>x1</p>
                </div>
            </section>
            <section class="cart_product">
                <figure>
                    <img src="../assets/Productos/Producto1.png" alt="producto1">
                    <figcaption>
                        <h2>nombre</h2>
                        <p class="code">code</p>
                        <p>price</p>
                    </figcaption>
                </figure>
                <div>
                    <button>
                        <img src="../assets/Button 6.svg" alt="edit">
                    </button>
                    <p>x1</p>
                </div>
            </section>
            
            <section class="total">
                <p>Total:</p>
                <h2>$priceT</h2>
            </section>
            <button>Continue to check out</button>
        </section>
    </div>
        `
    })
}

showCart(buttonCart)