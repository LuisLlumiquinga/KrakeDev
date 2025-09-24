validarPlaca=function(){
    let placa;
    let erroresEstructura;
    let provincia;
    let picoPlaca;

    placa=recuperarTexto("txtPlaca");
    erroresEstructura=validarEstructura(placa);

    if(erroresEstructura==null){
        mostrarTexto("lblPlacaValida", "ESTRUCTURA VALIDA");
        provincia=obtenerProvincia(placa);
        picoPlaca=obtenerDiaPicoYPlaca(placa);

        mostrarTexto("lblMensajePicoPlaca", "Dia Pico y Placa:");
        mostrarTexto("lblPicoPlaca", picoPlaca);

        if(provincia!=null){
            mostrarTexto("lblMensajeProvincia", "Provincia: ");
            mostrarTexto("lblProvincia", provincia);
        }else{
            mostrarTexto("lblProvincia", "Provincia Incorrecta");
        }
    }else{
        mostrarTexto("lblPlacaValida", "ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores", erroresEstructura);
    }
}