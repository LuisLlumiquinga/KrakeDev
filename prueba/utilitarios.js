// Muestra texto dentro de un elemento (por id)
function mostrarTexto(idComponente, mensaje) {
  const componente = document.getElementById(idComponente);
  if (componente) {
    componente.innerText = mensaje;
  }
}

// Muestra HTML dentro de un elemento (por id)
function mostrarTextoHTML(idComponente, html) {
  const componente = document.getElementById(idComponente);
  if (componente) {
    componente.innerHTML = html;
  }
}

// Muestra texto dentro de un input o textarea
function mostrarTextoEnCaja(idComponente, mensaje) {
  const componente = document.getElementById(idComponente);
  if (componente) {
    componente.value = mensaje;
  }
}

// Recupera texto de input o textarea
function recuperarTexto(idComponente) {
  const componente = document.getElementById(idComponente);
  return componente ? componente.value : "";
}

// Recupera número entero de input, retorna NaN si no es válido
function recuperarInt(idComponente) {
  const texto = recuperarTexto(idComponente);
  return parseInt(texto, 10);
}

// Recupera número flotante de input, retorna NaN si no es válido
function recuperarFloat(idComponente) {
  const texto = recuperarTexto(idComponente);
  return parseFloat(texto);
}

// Recupera texto desde un div o span (textContent)
function recuperarTextoDiv(idComponente) {
  const componente = document.getElementById(idComponente);
  return componente ? componente.textContent : "";
}

// Muestra un elemento (display block)
function mostrarComponente(idComponente) {
  const componente = document.getElementById(idComponente);
  if (componente) {
    componente.style.display = "block";
  }
}

// Oculta un elemento (display none)
function ocultarComponente(idComponente) {
  const componente = document.getElementById(idComponente);
  if (componente) {
    componente.style.display = "none";
  }
}

// Deshabilita un input o botón
function deshabilitarComponente(idComponente) {
  const componente = document.getElementById(idComponente);
  if (componente) {
    componente.disabled = true;
  }
}

// Habilita un input o botón
function habilitarComponente(idComponente) {
  const componente = document.getElementById(idComponente);
  if (componente) {
    componente.disabled = false;
  }
}

// Verifica si un carácter es mayúscula (A-Z)
function esMayuscula(caracter) {
  if (!caracter || caracter.length === 0) return false;
  const codigo = caracter.charCodeAt(0);
  return codigo >= 65 && codigo <= 90;
}

// Verifica si toda una palabra está en mayúsculas
function sonMayusculas(palabra) {
  for (let i = 0; i < palabra.length; i++) {
    if (!esMayuscula(palabra[i])) {
      return false;
    }
  }
  return true;
}

//Verifica si un caracter es minuscula (a-z)
function esMinuscula(caracter) {
  if (!caracter || caracter.length === 0) return false;
  const codigo = caracter.charCodeAt(0);
  return codigo >= 97 && codigo <= 122;
}

function validarNombre(nombre) {
  // Validación 1: No puede estar vacío ni contener solo espacios
  if (!nombre || nombre.trim() === '') {
    mostrarTexto("errorNombreProducto", "El nombre no puede quedar vacío.");
    return false;
  }

  // Validación 2: Solo debe contener letras (sin números, símbolos ni caracteres especiales)
  const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
  if (!soloLetras.test(nombre)) {
    mostrarTexto("errorNombreProducto", "El nombre debe contener solo letras.");
    return false;
  }

  // Validación 3: La primera letra debe ser mayúscula y el resto minúsculas
  const formatoCorrecto = /^[A-ZÁÉÍÓÚÑÜ][a-záéíóúñü\s]*$/;
  if (!formatoCorrecto.test(nombre)) {
    mostrarTexto("errorNombreProducto", "La primera letra debe ser mayúscula.");
    return false;
  }

  return true;
}

function validarDescripcion(descripcion) {
  // Validación 1: No puede estar vacío ni contener solo espacios
  if (!descripcion || descripcion.trim() === '') {
    mostrarTexto("errorDescripcionProducto", "La descripcion no puede quedar vacío.");
    return false;
  }

  // Validación 2: Sin caracteres raros
  const caracteresRaros = /[<>{}[\]\\|`~]/;
  if (caracteresRaros.test(descripcion)) {
    mostrarTexto("errorDescripcionProducto", "La descripcion no puede tener caracteres raros.");
    return false;
  }

  return true;
}

function validarCategoria(categoria) {
  // Validacion 1: No puede estar vacia
  if (!categoria || categoria.trim() === '') {
    mostrarTexto("errorCategoriaProducto", "La categoría no puede quedar vacio.");
    return false;
  }

  const soloLetrasYEspacios = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
  if (!soloLetrasYEspacios.test(categoria)) {
    mostrarTexto("errorCategoriaProducto", "La categoría debe contener solo letras");
    return false;
  }

  const formatoCorrecto = /^[A-ZÁÉÍÓÚÑÜ][a-záéíóúñü\s]*$/;
  if (!formatoCorrecto.test(categoria)) {
    mostrarTexto("errorCategoriaProducto", "Solo la primera letra debe ser mayuscula.");
    return false;
  }

  return true;
}

function validarPrecio(precio) {
  const precioNumero = parseFloat(precio);

  if (isNaN(precioNumero) || precioNumero < 0) {
    mostrarTexto("errorPrecioProducto", "Ingrese un precio válido mayor o igual a cero.");
    return false;
  }

  return true;
}

function validarStock(stock) {
  const stockNumero = parseInt(stock);

  if (isNaN(stockNumero) || stockNumero < 0 || !Number.isInteger(parseFloat(stock))) {
    mostrarTexto("errorStockProducto", "Ingrese un stock válido (entero, 0 o más)");
    return false;
  }

  return true;
}