// Lista base de productos
const estudiantes = [
  {
    nombre: "Joselyne Daniela Morales Arcentales",
    correo: "jmorales@estudiante.com",
    codigo: "1478523690",
  },
  {
    nombre: "Stefany Andrea Vasquez Suares",
    correo: "svasquez@estudiante.com",
    codigo: "1234567890",
  },
  {
    nombre: "Andrea Maritza Gonzaga Cuenca",
    correo: "agonzaga@estudiante.com",
    codigo: "1478558790",
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

function agregarEstudiante() {
  let nombre = recuperarTexto("nombreEstudiante");
  let correo = recuperarTexto("email");
  let codigoEstudiante = recuperarTexto("idEstudiante");

  let nombreValido = validarNombre(nombre);
  if (nombreValido == true) mostrarTexto("errorNombreEstudiante", "");

  let correoValido = validarCorreo(correo);
  if (correoValido == true) mostrarTexto("errorEmail", "");

  let codigoValido = validarCodigo(codigoEstudiante);
  if (codigoValido == true) mostrarTexto("errorIdEstudiante", "");

  if (nombreValido == true && correoValido == true && codigoValido == true) {
    let estudianteExiste = false;
    let pos = 0;

    for (let i = 0; i < estudiantes.length; i++) {
      if (estudiantes[i].codigo == codigoEstudiante) {
        estudianteExiste = true;
        pos = i;
      }
    }

    if (estudianteExiste == true) {
      estudiantes[pos].nombre = nombre;
      estudiantes[pos].correo = correo;
      estudiantes[pos].codigo = codigoEstudiante;

      alert("Datos del estudiante actualizado");
      limpiarCamposEstudiante();
      mostrarEstudiantes();
    } else if (estudianteExiste == false) {
      let nuevoEstudiante = [];

      nuevoEstudiante.nombre = nombre;
      nuevoEstudiante.correo = correo;
      nuevoEstudiante.codigo = codigoEstudiante;

      alert("Estudiante nuevo agregado");
      estudiantes.push(nuevoEstudiante);
      limpiarCamposEstudiante();

      mostrarEstudiantes()
    }
  }

  actualizarEstadisticasEstudiantes();
}

// Función: mostrar productos en la tabla
function mostrarEstudiantes() {
  /*
      - Limpiar contenido actual de la tabla
      - Recorrer lista de productos
      - Crear filas dinámicas con los datos y botón para eliminar
    */

  let cmpTabla = document.getElementById("tablaEstudiantes");
  let contenidoTabla = "<table><tr>" +
    "<th>ID</th>" +
    "<th>NOMBRE</th>" +
    "<th>CORREO</th>" +
    "<th>ACCION</th>" +
    "</tr>";
  for (let i = 0; i < estudiantes.length; i++) {
    elementoEstudiantes = estudiantes[i];

    contenidoTabla += "<tr><td>" + elementoEstudiantes.codigo + "</td>"
      + "<td>" + elementoEstudiantes.nombre + "</td>"
      + "<td>" + elementoEstudiantes.correo + "</td>"
      + "<td><button onclick='eliminarEstudiante(" + i + ")'>ELIMINAR</button></td>"
      + "</tr>"
  }
  contenidoTabla += "</table>"
  cmpTabla.innerHTML = contenidoTabla;
}

buscarEstudiante = function () {
  let codigo = recuperarTexto("estudianteEliminar");
  let index = null;

  if (!codigo || codigo.trim() === '') {
    mostrarTexto("errorBuscaEliminar", "Ingree un ID para eliminar");
    setTimeout(() => {
      mostrarTexto("errorBuscaEliminar", "");
      mostrarTextoEnCaja("estudianteEliminar", "");
    }, 2000);
    return false;

  } else {
    for (let i = 0; i < estudiantes.length; i++) {
      if (estudiantes[i].codigo == codigo) {
        index = i;
        break;
      }
    }
  }

  eliminarEstudiante(index);
}

// Función: eliminar producto por índice
function eliminarEstudiante(index) {
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
    mostrarTexto("errorBuscaEliminar", "No se encontro un estudiante con ese ID");

    setTimeout(() => {
      mostrarTexto("errorBuscaEliminar", "");
      mostrarTextoEnCaja("estudianteEliminar", "");
    }, 2000);

  } else {
    estudiantes.splice(index, 1);
    mostrarEstudiantes();
    mostrarTexto("errorBuscaEliminar", "");
    mostrarTextoEnCaja("EstudianteEliminar", "");
    alert("Estudiante eliminado correctamente");
  }

  actualizarEstadisticasEstudiantes();
  /*
      - Confirmar acción con el usuario
      - Remover producto de la lista productos
      - Actualizar tabla y estadísticas
    */
}

// Función: actualizar estadísticas de productos
function actualizarEstadisticasEstudiantes() {
  /*
      - Calcular y mostrar total productos, stock total y valor inventario
    */

  let cont = 0;

  for (let i = 0; i < estudiantes.length; i++) {
    cont++;
  }

  mostrarTexto("totalEstudiantes", cont);
}

// Función: limpiar campos de estudiante
function limpiarCamposEstudiante() {
  /*
      - Limpiar inputs de producto para nueva entrada
    */

  mostrarTextoEnCaja("nombreEstudiante", "");
  mostrarTextoEnCaja("email", "");
  mostrarTextoEnCaja("idEstudiante", "");
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
