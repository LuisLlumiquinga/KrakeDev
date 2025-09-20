calcularPromedioNotas=function(){
    let nota1=parseFloat(recuperarTexto("txtNota1"));
    let nota2=parseFloat(recuperarTexto("txtNota2"));
    let nota3=parseFloat(recuperarTexto("txtNota3"));

    let promedio=calcularPromedio(nota1, nota2, nota3);

    cambiarTexto("txtPromedio", promedio.toFixed(2));

    if(promedio<5 && promedio >0){
        cambiarTexto("lblMensaje", "REPROBADO");
        cambiarImagen("imgImagen", "fracaso.gif");
    }else if(promedio>=5 && promedio<=8){
        cambiarTexto("lblMensaje", "BUEN TRABAJO");
        cambiarImagen("imgImagen", "ok.gif");
    }else if(promedio>8 && promedio<=10){
        cambiarTexto("lblMensaje", "EXCELENTE");
        cambiarImagen("imgImagen", "exito.gif");
    }else{
        cambiarTexto("lblMensaje", "DATOS INCORRECTOS");
        cambiarImagen("imgImagen", "error.gif");
    }
}