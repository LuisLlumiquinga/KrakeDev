//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = "";

esMayuscula = function (caracter) {
  if (caracter >= 65 && caracter <= 90) {
    return true;
  } else {
    return false;
  }
};

guardarPalabra = function () {
  let palabra;
  let cont = 0;
  let mayuscula = false;

  palabra = recuperarTexto("txtSecreta");

  if (palabra.length == 5) {
    for (let i = 0; i < 5; i++) {
      if (esMayuscula(palabra.charCodeAt(i))) {
        cont++;
      }
    }

    if (cont == palabra.length) {
      palabraSecreta = palabra;
      console.log(palabraSecreta);
    } else {
      alert("DEBE INGRESAR UNA PALABRA DE 5 LETRAS MAYUSCULAS");
    }
  } else {
    alert("DEBE INGRESAR UNA PALABRA DE 5 LETRAS MAYUSCULAS");
  }
};
