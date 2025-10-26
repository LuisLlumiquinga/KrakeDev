// Lista base de productos
const productos = [
  {
    nombre: "Camisa",
    descripcion: "Camisa blanca de algodón",
    categoria: "Ropa",
    precio: 25.99,
    stock: 50,
  },
  {
    nombre: "Pantalón",
    descripcion: "Pantalón azul jeans",
    categoria: "Ropa",
    precio: 40.0,
    stock: 30,
  },
  {
    nombre: "Zapatos",
    descripcion: "Zapatos deportivos",
    categoria: "Calzado",
    precio: 60.5,
    stock: 20,
  },
];

// Lista base de categorías
const categorias = [
  { nombre: "Ropa", descripcion: "Prendas de vestir" },
  { nombre: "Calzado", descripcion: "Zapatos, sandalias y más" },
];

const carrito = [
  { nombre: "Camisa", cantidad: 10, precio: 25.99 },
  { nombre: "Zapatos", cantidad: 12, precio: 60.5 },
  { nombre: "Camisa", cantidad: 1, precio: 25.99 },
  { nombre: "Zapatos", cantidad: 10, precio: 60.5 },
];

const ventas = [
  {
    cliente: {
      nombre: "Juan Pérez",
      email: "juan.perez@example.com",
      telefono: "0991234567",
      direccion: "Av. Siempre Viva 123",
    },
    total: 112.48,
  },
  {
    cliente: {
      nombre: "María López",
      email: "maria.lopez@example.com",
      telefono: "0987654321",
      direccion: "Calle Falsa 456",
    },
    total: 40.0,
  },
];
// Función: agregar o actualizar producto
/*
      - Obtener datos del producto desde inputs
      - Validar que todos los campos sean correctos
      - Si el producto existe (por nombre), actualizar datos
      - Si no existe, agregar producto a la lista
      - Limpiar campos y actualizar la tabla y estadísticas
    */

function agregarProducto() {
  let nombre = recuperarTexto("nombreProducto");
  let descripcion = recuperarTexto("descripcionProducto");
  let categoria = recuperarTexto("categoriaProducto");
  let precio = recuperarTexto("precioProducto");
  let stock = recuperarTexto("stockProducto");

  let nombreValido = validarNombre(nombre);
  if (nombreValido == true) mostrarTexto("errorNombreProducto", "");

  let descripcionValido = validarDescripcion(descripcion);
  if (descripcionValido == true) mostrarTexto("errorDescripcionProducto", "");

  let categoriaValida = validarCategoria(categoria);
  if (categoriaValida == true) mostrarTexto("errorCategoriaProducto", "");

  let precioValido = validarPrecio(precio);
  if (precioValido == true) mostrarTexto("errorPrecioProducto", "");

  let stockValido = validarStock(stock);
  if (stockValido == true) mostrarTexto("errorStockProducto", "");

  if (nombreValido == true && descripcionValido == true && categoriaValida == true && precioValido == true && stockValido == true) {
    let productoExiste = false;
    let pos = 0;

    for (let i = 0; i < productos.length; i++) {
      if (productos[i].nombre == nombre) {
        productoExiste = true;
        pos = i;
      }
    }

    if (productoExiste == true) {
      productos[pos].nombre = nombre;
      productos[pos].descripcion = descripcion;
      productos[pos].categoria = categoria;
      productos[pos].precio = precio;
      productos[pos].stock = stock;

      alert("Producto actualizado");
      limpiarCamposProducto();
      mostrarProductos();
    } else if (productoExiste == false) {
      let nuevoProducto = [];

      nuevoProducto.nombre = nombre;
      nuevoProducto.descripcion = descripcion;
      nuevoProducto.categoria = categoria;
      nuevoProducto.precio = precio;
      nuevoProducto.stock = stock;

      alert("Producto Nuevo agregado");
      productos.push(nuevoProducto);
      limpiarCamposProducto();

      mostrarProductos()
    }
  }

  actualizarEstadisticasProductos();
}

// Función: mostrar productos en la tabla
function mostrarProductos() {
  /*
      - Limpiar contenido actual de la tabla
      - Recorrer lista de productos
      - Crear filas dinámicas con los datos y botón para eliminar
    */

  let cmpTabla = document.getElementById("tablaProductos");
  let contenidoTabla = "<table><tr>" +
    "<th>NOMBRE</th>" +
    "<th>DESCRIPCION</th>" +
    "<th>CATEGORIA</th>" +
    "<th>PRECIO</th>" +
    "<th>STOCK</th>" +
    "<th>PRECIO CON IVA</th>" +
    "<th>ACCION</th>" +
    "</tr>";
  for (let i = 0; i < productos.length; i++) {

    elementoProductos = productos[i];
    let precioIva;
    let precioSinIva = parseFloat(elementoProductos.precio);

    precioIva = ((precioSinIva * .12) + precioSinIva).toFixed(2);

    contenidoTabla += "<tr><td>" + elementoProductos.nombre + "</td>"
      + "<td>" + elementoProductos.descripcion + "</td>"
      + "<td>" + elementoProductos.categoria + "</td>"
      + "<td>" + elementoProductos.precio + "</td>"
      + "<td>" + elementoProductos.stock + "</td>"
      + "<td>" + precioIva + "</td>" //decimales y suma
      + "<td><button onclick='eliminarProducto(" + i + ")'>ELIMINAR</button></td>"
      + "</tr>"
  }
  contenidoTabla += "</table>"
  cmpTabla.innerHTML = contenidoTabla;
}

buscarProducto = function () {
  let nombre = recuperarTexto("productoEliminar");
  let index = null;

  if (!nombre || nombre.trim() === '') {
    mostrarTexto("errorBuscaEliminar", "No se acepta campos vacios");
    setTimeout(() => {
      mostrarTexto("errorBuscaEliminar", "");
      mostrarTextoEnCaja("productoEliminar", "");
    }, 2000);
    return false;

  } else {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].nombre == nombre) {
        index = i;
        break;
      }
    }
  }

  eliminarProducto(index);
}

// Función: eliminar producto por índice
function eliminarProducto(index) {
  /*
  // Función para eliminar un producto en la posición dada del array
  function eliminarProducto(index) {
    // El método splice modifica el array original eliminando elementos
    // El primer parámetro 'index' indica la posición donde empezar a eliminar
    // El segundo parámetro '1' indica que se elimina un solo elemento
    productos.splice(index, 1);
  }
  */
  if (index == null) {
    mostrarTexto("errorBuscaEliminar", "No se encontro el elemento");

    setTimeout(() => {
      mostrarTexto("errorBuscaEliminar", "");
      mostrarTextoEnCaja("productoEliminar", "");
    }, 2000);

  } else {
    productos.splice(index, 1);
    mostrarProductos();
    mostrarTexto("errorBuscaEliminar", "");
    mostrarTextoEnCaja("productoEliminar", "");
    alert("Elemento Eliminado");
  }

  actualizarEstadisticasProductos();
  /*
      - Confirmar acción con el usuario
      - Remover producto de la lista productos
      - Actualizar tabla y estadísticas
    */
}

// Función: actualizar estadísticas de productos
function actualizarEstadisticasProductos() {
  /*
      - Calcular y mostrar total productos, stock total y valor inventario
    */

  let cont = 0;
  let stock = 0;
  let precio = 0;


  for (let i = 0; i < productos.length; i++) {
    cont++;
    stock += parseInt(productos[i].stock);
    precio += parseFloat(productos[i].precio) * parseInt(productos[i].stock);
  }


  mostrarTexto("totalProductos", cont);
  mostrarTexto("stockTotal", stock);
  mostrarTexto("valorInventario", precio);

}

// Función: limpiar campos de producto
function limpiarCamposProducto() {
  /*
      - Limpiar inputs de producto para nueva entrada
    */

  mostrarTextoEnCaja("nombreProducto", "");
  mostrarTextoEnCaja("errorNombreProducto", "");
  mostrarTextoEnCaja("descripcionProducto", "");
  mostrarTextoEnCaja("errorDescripcionProducto", "");
  mostrarTextoEnCaja("categoriaProducto", "");
  mostrarTextoEnCaja("errorCategoriaProducto", "");
  mostrarTextoEnCaja("precioProducto", "");
  mostrarTextoEnCaja("errorPrecioProducto", "");
  mostrarTextoEnCaja("stockProducto", "");
  mostrarTextoEnCaja("errorStockProducto", "");
}

// Función: agregar categoría
function agregarCategoria() {
  /*
      - Obtener datos desde inputs
      - Validar campos obligatorios y evitar duplicados
      - Agregar categoría a la lista
      - Limpiar campos y actualizar lista de categorías
    */
}

// Función: mostrar categorías
function mostrarCategorias() {
  /*
      - Limpiar lista actual
      - Recorrer categorías y mostrar en lista HTML
      - Agregar botón para eliminar categoría
    */
}

// Función: eliminar categoría
function eliminarCategoria(index) {
  /*
      - Confirmar con el usuario
      - Eliminar categoría de la lista
      - Actualizar lista en pantalla
    */
}

// Función: mostrar productos disponibles para añadir al carrito
function mostrarProductosDisponibles() {
  /*
      - Mostrar lista de productos con botón para añadir al carrito
    */
}

// Función: añadir producto al carrito
function agregarAlCarrito(nombreProducto) {
  /*
      - Validar cantidad y stock disponible
      - Añadir producto o aumentar cantidad en carrito
      - Actualizar resumen y total del carrito
    */
}

// Función: mostrar resumen del carrito
function mostrarCarrito() {
  /*
      - Mostrar tabla con productos en carrito, cantidades y subtotal
      - Mostrar total general
    */
}

// Función: editar cantidad de producto en carrito
function editarCantidadCarrito(index) {
  /*
      - Validar nueva cantidad contra stock
      - Actualizar cantidad en carrito
      - Actualizar tabla y total
    */
}

// Función: eliminar producto del carrito
function eliminarDelCarrito(index) {
  /*
      - Eliminar producto del carrito
      - Actualizar tabla y total
    */
}

// Función: guardar datos cliente
function guardarDatosCliente() {
  /*
      - Obtener y validar campos del cliente (nombre, email, teléfono, dirección)
      - Guardar datos para la compra
    */
}

// Función: finalizar compra
function finalizarCompra() {
  /*
      - Validar carrito y datos cliente completos
      - Crear registro de venta con productos, cliente, total y fecha
      - Actualizar stock de productos vendidos
      - Vaciar carrito
      - Actualizar tablas y estadísticas
      - Mostrar mensaje éxito y limpiar formulario cliente
    */
}

// Función: mostrar resumen de ventas
function mostrarVentas() {
  /*
      - Mostrar tabla con ventas registradas
      - Calcular y mostrar totales globales y producto más vendido
    */
  
  let totalVenta=0;
  let cmpTabla=document.getElementById("tablaVentas");
  let contenidoTabla="<table><tr>"+
  "<th>Cliente</th>"+
  "<th>Productos</th>"+
  "<th>Total</th>"+
  "</th>";

  for(let i=0; i<carrito.length; i++){
    elementoCarrito=carrito[i];

    let total=elementoCarrito.cantidad*elementoCarrito.precio;
    let cliente=ventas[ventas.length-1].cliente.nombre;

    totalVenta+=total;

    contenidoTabla+="<tr><td>"+cliente+"</td>"
    +"<td>"+elementoCarrito.nombre+"</td>"
    +"<td>"+total+"</td>"
    +"</tr>"
  }
  contenidoTabla+="</table>"
  cmpTabla.innerHTML=contenidoTabla;

  mostrarTexto("totalVentas", totalVenta.toFixed(2));

  calcularProductoMasVendido();
}

// Función: calcular producto más vendido
function calcularProductoMasVendido() {
  /*
      - Contar cantidades vendidas de cada producto en todas las ventas
      - Retornar nombre de producto con mayor cantidad vendida
    */
  
  let productoNuevo=[];
  let cont=0;

  for(let i=0; i<productos.length; i++){
    let productoMayor=[];
    let cantidad=0;
    for(let j=0; j<carrito.length; j++){
      if(productos[i].nombre==carrito[j].nombre){
        productoMayor.nombre=productos[i].nombre;
        cantidad+=carrito[j].cantidad;
      }
    }
    productoMayor.cantidad=cantidad;
    productoNuevo.push(productoMayor);
  }

  let cantMayor=parseInt(productoNuevo[0].cantidad);

  for(let i=1; i<productoNuevo.length; i++){
    if(cantMayor>productoNuevo[i].cantidad){

    }else{
      cantMayor=productoNuevo[i].cantidad;
    }
  }

  for(let i=0; i<productoNuevo.length; i++){
    if(productoNuevo[i].cantidad==cantMayor){
      mostrarTexto("productoMasVendido", productoNuevo[i].nombre)
    }
  }
  
}
