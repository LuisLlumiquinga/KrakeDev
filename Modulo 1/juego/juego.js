let puntosUsuarios=0;
let puntosComputador=0;

jugar=function(seleccionado){
    let elementoGenerado;
    let resultado;


    ruta=generarRuta(seleccionado);
    mostrarImagen("imgUsuario", ruta);

    elementoGenerado=generarElemento();
    ruta=generarRuta(elementoGenerado);
    mostrarImagen("imgComputador", ruta);

    resultado=determinarGanador(seleccionado, elementoGenerado);

    if(resultado==0){
        mostrarTexto("lblResultadoPartida", "EMPATE");
    }else if(resultado==1){
        mostrarTexto("lblResultadoPartida", "GANASTE LA PARTIDA");
        puntosUsuarios++;
        mostrarTexto("lblPuntosUsuario", puntosUsuarios);
    }else{
        mostrarTexto("lblResultadoPartida", "PERDISTE LA PARTIDA");
        puntosComputador++;
        mostrarTexto("lblPuntosComputador", puntosComputador);
    }

    if(puntosUsuarios==5){
        mostrarTexto("lblResultadoPartida", "HAS GANADO EL JUEGO!!");
    }else if(puntosComputador==5){
        mostrarTexto("lblResultadoPartida", "EL COMPUTADOR TE HA VENCIDO!!");
    }
}