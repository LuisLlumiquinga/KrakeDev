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
    mostrarTexto("errorNombreEstudiante", "El nombre es obligatorio.");
    return false;
  }

  // Validación 2: Solo debe contener letras (sin números, símbolos ni caracteres especiales)
  const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
  if (!soloLetras.test(nombre)) {
    mostrarTexto("errorNombreEstudiante", "El nombre solo puede contener letras y espacios.");
    return false;
  }

  // Validación 3: La primera letra debe ser mayúscula y el resto minúsculas
  // Validar que solo contenga letras y espacios (sin números ni símbolos raros)
  const soloLetrasYEspacios = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
  if (!soloLetrasYEspacios.test(nombre)) {
    errores.push("El nombre solo puede contener letras y espacios.");
  }
  
  // Validar que cada palabra inicie con mayúscula
  // Verificamos el primer carácter
  if (nombre.charAt(0) !== nombre.charAt(0).toUpperCase()) {
    mostrarTexto("errorNombreEstudiante", "La primera letra debe ser mayúscula.");
    return false;
  }
  
  // Recorremos el nombre buscando letras después de espacios
  for (let i = 0; i < nombre.length; i++) {
    if (nombre.charAt(i) === ' ') {
      if (i + 1 < nombre.length) {
        const siguienteCaracter = nombre.charAt(i + 1);
        if (siguienteCaracter !== ' ' && siguienteCaracter !== siguienteCaracter.toUpperCase()) {
          mostrarTexto("errorNombreEstudiante","De cada palabra la primera letra debe ser mayúscula.");
          return false
        }
      }
    }
  }

  return true;
}

function validarCorreo(correo) {
  // Validar que no esté vacío
  if (!correo || correo.trim() === '') {
    mostrarTexto("errorEmail", "Ingrese un correo válido.");
    return
  }
  
  // Validar formato de correo
  // Debe tener: texto@texto.texto
  let tieneArroba = false;
  let tienePunto = false;
  let posicionArroba = -1;
  let posicionPunto = -1;
  
  // Buscar @ y .
  for (let i = 0; i < correo.length; i++) {
    if (correo.charAt(i) === '@') {
      tieneArroba = true;
      posicionArroba = i;
    }
    if (correo.charAt(i) === '.') {
      tienePunto = true;
      posicionPunto = i;
    }
  }
  
  // Validaciones básicas
  if (!tieneArroba || !tienePunto) {
    mostrarTexto("errorEmail", "Ingrese un correo válido.");
    return
  }
  
  // Validar que @ esté antes del punto
  if (posicionArroba > posicionPunto) {
    mostrarTexto("errorEmail", "Ingrese un correo válido.");
    return
  }
  
  // Validar que haya texto antes del @
  if (posicionArroba === 0) {
    mostrarTexto("errorEmail", "Ingrese un correo válido.");
    return
  }
  
  // Validar que haya texto entre @ y .
  if (posicionPunto - posicionArroba <= 1) {
    mostrarTexto("errorEmail", "Ingrese un correo válido.");
    return
  }
  
  // Validar que haya texto después del último punto
  if (posicionPunto === correo.length - 1) {
    mostrarTexto("errorEmail", "Ingrese un correo válido.");
    return
  }
  
  return true
}

function validarCodigo(codigo) {
  // Validar que no esté vacío
  if (!codigo || codigo.trim() === '') {
    mostrarTexto("errorIdEstudiante", "El ID es obligatorio y debe tener solo numeros.");
    return
  }
  

  if (isNaN(codigo)) {
    mostrarTexto("errorIdEstudiante", "El ID es obligatorio y debe tener solo numeros.");
    return false;
  }

  return true;
}

