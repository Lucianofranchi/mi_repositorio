const contenedorProductos = document.getElementById("contenedor-productos");

const contenedorCarrito = document.getElementById("carrito-contenedor")

let carrito=[]

stockProductos.forEach((producto) => {
  const div = document.createElement("div")
  div.classList.add("producto")
  div.innerHTML=`
    <img src=${producto.imagen} alt="">
    <h3>${producto.nombre}</h3>
    <p>${producto.encordado}</p>}
    <p class"precioProducto">Precio:$ ${producto.precio}</p>
    <button id"agregar${producto.id}" class"boton-agregar"> Agregar <i class="fas fa-shopping-cart"></button> 
  `
  contenedorProductos.appendChild(div)

})