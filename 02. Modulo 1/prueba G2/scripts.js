// Lista base de estudiantes
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

// Lista base de asistencias
const asistencias = [
  {
    curso: "Tercero B",
    docente: "Joselyne Morales",
  },
  {
    curso: "Quinto C",
    docente: "Liset Andrade",
  },
  {
    curso: "Primero B",
    docente: "Andrea Gonzaga",
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

function agregarAsistencia() {
  let curso = recuperarTexto("nombreCurso");
  let docente = recuperarTexto("nombreDocente");

  let cursoValido = validarDatos(curso, "errorNombreCurso");
  if (cursoValido == true) mostrarTexto("errorNombreCurso", "");

  let docenteValido = validarDatos(docente, "errorNombreDocente");
  if (docenteValido == true) mostrarTexto("errorNombreDocente", "");

  if (cursoValido == true && docenteValido == true) {
    let nuevo=[];

    nuevo.curso=curso;
    nuevo.docente=docente;

    asistencias.push(nuevo);

    let cmpTabla = document.getElementById("listaAsistencias");
    let contenidoTabla = "<table><tr>" +
      "<th>No</th>" +
      "<th>ASISTENCIA</th>" +
      "<th>ACCION</th>" +
      "</tr>";

    for (let i=0, j=0; i < asistencias.length; i++, j++) {
      elementoAsistencias = asistencias[i];

      contenidoTabla += "<tr><td>" + (j) + "</td>"
        + "<td>" + "Asistencia del Curso: " + elementoAsistencias.curso + ", pasada por " + elementoAsistencias.docente + "</td>"
        + "<td><button onclick='eliminarAsistencia(" + i + ")'>ELIMINAR</button></td>"
        + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
  }
}