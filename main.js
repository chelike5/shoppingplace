const productos = [
    {
        nombre: 'Vestido 01',
        precio: 15,
        tallas: '4/6 y 6/8',
        imagen: './vestidos de niñas/vestido01.jpg',
        id: 'vestido-01',        
        categoria:{
            nombre: 'Vestidos',
            id: 'vestidos'
        },
        marca: 'H & M'
    },
    {
        nombre: 'Vestido 02',
        precio: 15,
        tallas: '4/6 y 6/8',
        imagen: './vestidos de niñas/vestido02.jpg',
        id: 'vestido-02',      
        categoria:{
            nombre: 'Vestidos',
            id: 'vestidos'
        },
        marca: 'H & M'
    },
    {
        nombre: 'Vestido 03',
        precio: 15,
        tallas: '4/6 y 6/8',
        imagen: './vestidos de niñas/vestido03.jpg',
        id: 'vestido-03',        
        categoria:{
            nombre: 'Vestidos',
            id: 'vestidos'
        },
        marca: 'H & M'
    },
    {
        nombre: 'Vestido 04',
        precio: 15,
        tallas: '4/6 y 6/8',
        imagen: './vestidos de niñas/vestido04.jpg',
        id: 'vestido-04',       
        categoria:{
            nombre: 'Vestidos',
            id: 'vestidos'
        },
        marca: 'H & M'
    },
    {
        nombre: 'Vestido 05',
        precio: 15,
        tallas: '4/6 y 6/8',
        imagen: './vestidos de niñas/vestido05.jpeg',
        id: 'vestido-05',       
        categoria:{
            nombre: 'Vestidos',
            id: 'vestidos'
        },
        marca: 'H & M'
    },
    {
        nombre: 'Vestido 06',
        precio: 15,
        tallas: '4/6 y 6/8',
        imagen: './vestidos de niñas/vestido06.jpeg',
        id: 'vestido-06',       
        categoria:{
            nombre: 'Vestidos',
            id: 'vestidos'
        },
        marca: 'H & M'
    },
    {
        nombre: 'Vestido 07',
        precio: 15,
        tallas: '4/6 y 6/8',
        imagen: './vestidos de niñas/vestido07.jpeg',
        id: 'vestido-07',       
        categoria:{
            nombre: 'Vestidos',
            id: 'vestidos'
        },
        marca: 'H & M'
    },
    // clazados
    {
        nombre: 'Sueco 01',
        precio: 25,
        tallas: '35 a 40',
        imagen: './calzados/sueco01.jpeg',
        id: 'sueco-01',     
        categoria:{
            nombre: 'Calzados',
            id: 'calzados'
        },
        marca: 'LOL surprise'
    },
    {
        nombre: 'Sueco 02',
        precio: 25,
        tallas: '35 a 40',
        imagen: './calzados/sueco02.jpeg',
        id: 'sueco-02',       
        categoria:{
            nombre: 'Calzados',
            id: 'calzados'
        },
        marca: 'LOL surprise'
    },
    {
        nombre: 'Sueco 03',
        precio: 25,
        tallas: '35 a 40',
        imagen: './calzados/sueco03.jpeg',
        id: 'sueco-03',      
        categoria:{
            nombre: 'Calzados',
            id: 'calzados'
        },
        marca: 'LOL surprise'
    },
    //ropa de niñas
    {
        nombre: 'Blusa 01',
        precio: 15,
        tallas: '4/6 y 6/8',
        imagen: './ropa_niñas/ropa01.jpeg',
        id: 'blusa-01',       
        categoria:{
            nombre: 'Ropa',
            id: 'ropa'
        },
        marca: 'H & M'
    },
    {
        nombre: 'Franela 01',
        precio: 15,
        tallas: '4/6 y 6/8',
        imagen: './ropa_niñas/ropa02.jpeg',
        id: 'franela-02',       
        categoria:{
            nombre: 'Ropa',
            id: 'ropa'
        },
        marca: 'H & M'
    },
    {
        nombre: 'Blusa 02',
        precio: 15,
        tallas: '4/6 y 6/8',
        imagen: './ropa_niñas/ropa03.jpeg',
        id: 'blusa-02',       
        categoria:{
            nombre: 'Ropa',
            id: 'ropa'
        },
        marca: 'H & M'
    },
    {
        nombre: 'Blusa 03',
        precio: 15,
        tallas: '4/6 y 6/8',
        imagen: './ropa_niñas/ropa04.jpeg',
        id: 'blusa-03',       
        categoria:{
            nombre: 'Ropa',
            id: 'ropa'
        },
        marca: 'H & M'
    },
    {
        nombre: 'Short 01',
        precio: 12,
        tallas: '4/6 y 6/8',
        imagen: './ropa_niñas/ropa05.jpeg',
        id: 'short-01',       
        categoria:{
            nombre: 'Ropa',
            id: 'ropa'
        },
        marca: 'H & M'
    },
    {
        nombre: 'Short 02',
        precio: 12,
        tallas: '4/ y 6/8',
        imagen: './ropa_niñas/ropa06.jpeg',
        id: 'short-02',       
        categoria:{
            nombre: 'Ropa',
            id: 'ropa'
        },
        marca: 'H & M'
    },
    {
        nombre: 'Blusa 04',
        precio: 15,
        tallas: '4/6 y 6/8',
        imagen: './ropa_niñas/ropa07.jpeg',
        id: 'blusa-04',       
        categoria:{
            nombre: 'Ropa',
            id: 'ropa'
        },
        marca: 'H & M'
    },

]




const navBar = document.getElementById('navbar');
const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');
const quitar = document.querySelector('.navnar-li');
const botonesCategorias = document.querySelectorAll('.boton-categoria');
const tituloPrincipal = document.querySelector('#titulo-principal');
let agregar = document.querySelectorAll('.agregar');
const numerito = document.getElementById('numerito');



abrir.addEventListener('click', () => {
    navBar.classList.add('visible');
})

cerrar.addEventListener('click', () => {
    navBar.classList.remove('visible');


});

const contenedorProductos = document.getElementById('container-productos');

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = '';

    productosElegidos.forEach(producto => {

        const div = document.createElement('div');
        div.classList.add('card-producto');
        div.innerHTML = `
        <img class="img" src="${producto.imagen}" alt="gomas nike">
        <div class="detalles">
            <h3>${producto.nombre}</h3>
            
            <p>${producto.precio}$ </p>
        </div>
        <div class="tallas">
            <h4>tallas: ${producto.tallas}</h4>
            <h4>marca: ${producto.marca}</h4>
        </div>

        <div class="btn-container">
            <button class="agregar" id="${producto.id}">Agregar</button>
        </div>
    

`;
contenedorProductos.append(div);
    })
    actualizarAgregar();
    
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener('click', (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove('active'));
        e.currentTarget.classList.add('active');

        if(e.currentTarget.id != 'todos'){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBtn = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBtn);
        }else{
            tituloPrincipal.innerText = 'todos los prodcutos'
            cargarProductos(productos);
        }


    })
});

function actualizarAgregar(){
    agregar = document.querySelectorAll('.agregar');

    agregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito)
    });
}


let productosEnCarrito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem('productos-en-carrito'));

if(productosEnCarritoLS){
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumerito();
}else{
    productosEnCarrito = [];
}


function agregarAlCarrito(e){
    const idAgregar = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idAgregar);

    if(productosEnCarrito.some(producto => producto.id === idAgregar)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idAgregar);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();
        
    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}











