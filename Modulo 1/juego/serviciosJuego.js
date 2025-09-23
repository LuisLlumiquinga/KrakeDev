obtenerAleatorio=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorAleatorio;
    
    aleatorio=Math.random(); //numero entre 0 y 1
    numeroMultiplicado=aleatorio*3
    numeroEntero=parseInt(numeroMultiplicado); //entre 0/3
    valorAleatorio=numeroEntero+1;

    return valorAleatorio
}

generarElemento=function(){
    let elemento;

    elemento=obtenerAleatorio();

    if(elemento==1){
        return "piedra";
    }
    if(elemento==2){
        return "papel";
    }
    if(elemento==3){
        return "tijera";
    }
}

determinarGanador=function(eleccionJugador1, eleccionJugador2){
    if(eleccionJugador1==eleccionJugador2){
        return 0;
    }

    if(
        (eleccionJugador1=="piedra" && eleccionJugador2=="tijera") ||
        (eleccionJugador1=="papel" && eleccionJugador2=="piedra") ||
        (eleccionJugador1=="tijera" && eleccionJugador2=="papel")
    ){
        return 1;
    }else{
        return 2;
    }
}

generarRuta=function(nombre){
    let ruta;
    
    ruta="./imagenes/"+nombre+".png";

    return ruta;
}

limpiar=function(){
    mostrarTexto("lblPuntosUsuario", "0");
    mostrarTexto("lblPuntosComputador", "0");
    mostrarTexto("lblResultadoPartida", "");
    mostrarImagen("imgUsuario", "");
    mostrarImagen("imgComputador", "");
}