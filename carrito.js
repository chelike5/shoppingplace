let productosEnCarrito = localStorage.getItem('productos-en-carrito');
productosEnCarrito = JSON.parse(productosEnCarrito);


const carritoVacio = document.getElementById('carrito-vacio');
const contenedorCarrito = document.getElementById('contenedor-carrito');
const carritoTotal = document.getElementById('carrito-total');
let btnEliminar = document.querySelectorAll('.icon-eliminar');
const btnVaciar = document.getElementById('vaciar');
const contenedorTotal = document.getElementById('total');
const btnComprar = document.getElementById('comprar')

function cargarProductosCarrito(){

    if(productosEnCarrito && productosEnCarrito.length > 0){

        carritoVacio.classList.add('disabled');
        contenedorCarrito.classList.remove('disabled');
        carritoTotal.classList.remove('disabled');
    
        contenedorCarrito.innerHTML = '';
    
        productosEnCarrito.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('card-carrito');
            div.innerHTML =`
            <img class="img-carrito" src="${producto.imagen}" alt="">
            <div class="carrito-detalles">
                <div class="nombre-producto">
                    <h4 class="carrito-h4">Nombre</h4>
                    <h3 class="carrito-h3">${producto.nombre}</h3>
                </div>
    
                <div class="cantidad-producto">
                    <h4 class="carrito-h4">Cantidad</h4>
                    <h3 class="carrito-h3">${producto.cantidad}</h3>
                </div>
    
                <div class="precio-producto">
                    <h4 class="carrito-h4">Precio</h4>
                    <h3 class="carrito-h3">${producto.precio} $</h3>
                </div>
    
                <div class="subtotal">
                    <h4 class="carrito-h4">Subtotal</h4>
                    <h3 class="carrito-h3">${producto.precio * producto.cantidad} $</h3>
                </div>
    
                <div class="icon-eliminar" id="${producto.id}">
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>`;
    
    
            contenedorCarrito.append(div);
        })
    }else{
    
        carritoVacio.classList.remove('disabled');
        contenedorCarrito.classList.add('disabled');
        carritoTotal.classList.add('disabled');
    
    }
    actualizarBtnEliminar();
    actulizarTotal();

}

cargarProductosCarrito();

function actualizarBtnEliminar(){
    btnEliminar = document.querySelectorAll('.icon-eliminar');

    btnEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito)
    })
}


function eliminarDelCarrito(e){
    let idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
  
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
  
}

btnVaciar.addEventListener('click', vaciarCarrito)

function vaciarCarrito(){

    productosEnCarrito.length = 0;
    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actulizarTotal(){

    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

/*btnComprar.addEventListener('click', comprarCarrito);
function comprarCarrito(){

    productosEnCarrito.length = 0;
    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));

    carritoVacio.classList.add('disabled');
    contenedorCarrito.classList.add('disabled');
    carritoTotal.classList.add('disabled');

    
    
}*/