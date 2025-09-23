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

mostrarLetra=function(letra, posicion){
    if(posicion==0){
        mostrarTexto("div0", letra);
    }

    if(posicion==1){
        mostrarTexto("div1", letra);
    }

    if(posicion==2){
        mostrarTexto("div2", letra);
    }

    if(posicion==3){
        mostrarTexto("div3", letra);
    }

    if(posicion==4){
        mostrarTexto("div4", letra);
    }
}

validar=function(letra){
    let letrasEncontradas=0;

    for(let i=0; i<=palabraSecreta.length; i++){
        if(palabraSecreta.charAt(i)==letra){
            mostrarLetra(letra, i);
            letrasEncontradas++;
        }
    }
}

ingresarLetra=function(){
    let letra;

    letra=recuperarTexto("txtLetra");

    if(esMayuscula(letra.charCodeAt(0))){
        validar(letra);
    }else{
        alert("SOLO SE ACEPTAN LETRAS MAYUSCULAS");
    }
}

