validarPlaca=function(){
    let placa;
    let erroresEstructura;
    let provincia;

    placa=recuperarTexto("txtPlaca");
    erroresEstructura=validarEstructura(placa);

    if(erroresEstructura==null){
        mostrarTexto("lblPlacaValida", "ESTRUCTURA VALIDA");
        provincia=obtenerProvincia(placa);

        if(provincia!=null){
            mostrarTexto("lblProvincia", provincia);
        }else{
            mostrarTexto("lblProvincia", "Provincia Incorrecta");
        }
    }else{
        mostrarTexto("lblPlacaValida", "ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores", erroresEstructura);
    }
}