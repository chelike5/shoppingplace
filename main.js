const productos = [
    {
        nombre: 'vestido 01',
        precio: 15,
        tallas: '4/6 y 6/8',
        imagen: './vestidos de niñas/vestido01.jpg',
        id: 'vestido-01',        
        categoria:{
            nombre: 'Vestidos',
            id: 'vestidos'
        },
    },
    {
        nombre: 'vestido 02',
        precio: 15,
        tallas: '4/6 y 6/8',
        imagen: './vestidos de niñas/vestido02.jpg',
        id: 'vestido-02',      
        categoria:{
            nombre: 'Vestidos',
            id: 'vestidos'
        },
    },
    {
        nombre: 'vestido 03',
        precio: 15,
        tallas: '4/6 y 6/8',
        imagen: './vestidos de niñas/vestido03.jpg',
        id: 'vestido-03',        
        categoria:{
            nombre: 'Vestidos',
            id: 'vestidos'
        },
    },
    {
        nombre: 'vestido 04',
        precio: 15,
        tallas: '4/6 y 6/8',
        imagen: './vestidos de niñas/vestido04.jpg',
        id: 'vestido-04',       
        categoria:{
            nombre: 'Vestidos',
            id: 'vestidos'
        },
    },
    {
        nombre: 'sueco 01',
        precio: 25,
        tallas: '35 a 40',
        imagen: './calzados/sueco01.jpeg',
        id: 'sueco-01',     
        categoria:{
            nombre: 'Calzados',
            id: 'calzados'
        },
    },
    {
        nombre: 'sueco 02',
        precio: 25,
        tallas: '35 a 40',
        imagen: './calzados/sueco02.jpeg',
        id: 'sueco-02',       
        categoria:{
            nombre: 'Calzados',
            id: 'calzados'
        },
    },
    {
        nombre: 'sueco 03',
        precio: 25,
        tallas: '35 a 40',
        imagen: './calzados/sueco03.jpeg',
        id: 'sueco-03',      
        categoria:{
            nombre: 'Calzados',
            id: 'calzados'
        },
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
            <p>${producto.precio}$  <span>-30%</span></p>
        </div>
        <div class="tallas">
            <h4>tallas: ${producto.tallas}</h4>
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











