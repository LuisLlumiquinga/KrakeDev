//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = "";
let intentos=0;
let coincidencias=0;
let errores=0;

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
            coincidencias++;
        }
    }

    if(letrasEncontradas==0){
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostrarAhorcado();
    }
}

ingresarLetra=function(){
    let letra;

    intentos++;

    letra=recuperarTexto("txtLetra");

    if(esMayuscula(letra.charCodeAt(0))){
        validar(letra);

        if(coincidencias==5){
            mostrarImagen("ahorcadoImagen", "./ganador.gif");
            //alert("HA GANADO");
        }
        if(intentos==10){
            mostrarImagen("ahorcadoImagen", "./gameOver.gif");
            //alert("HA PERDIDO");
        }
    }else{
        alert("SOLO SE ACEPTAN LETRAS MAYUSCULAS");
    }
}

mostrarAhorcado=function(){
    if(errores==1){
        mostrarImagen("ahorcadoImagen", "./Ahorcado_01.png");
    }

    if(errores==2){
        mostrarImagen("ahorcadoImagen", "./Ahorcado_02.png");
    }

    if(errores==3){
        mostrarImagen("ahorcadoImagen", "./Ahorcado_03.png");
    }

    if(errores==4){
        mostrarImagen("ahorcadoImagen", "./Ahorcado_04.png");
    }

    if(errores==5){
        mostrarImagen("ahorcadoImagen", "./Ahorcado_05.png");
    }

    if(errores==6){
        mostrarImagen("ahorcadoImagen", "./Ahorcado_06.png");
    }

    if(errores==7){
        mostrarImagen("ahorcadoImagen", "./Ahorcado_07.png");
    }

    if(errores==8){
        mostrarImagen("ahorcadoImagen", "./Ahorcado_08.png");
    }

    if(errores==9){
        mostrarImagen("ahorcadoImagen", "./Ahorcado_09.png");
    }
}