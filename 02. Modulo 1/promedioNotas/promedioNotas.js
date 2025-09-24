calcularPromedioNotas=function(){
    let n1, n2, n3;
    let promedio;
    
    n1=recuperarFlotante("txtN1");
    n2=recuperarFlotante("txtN2");
    n3=recuperarFlotante("txtN3");

    promedio=calcularPromedio(n1, n2, n3);

    cambiarTexto("lblPromedio", promedio.toFixed(2));

    if(promedio<5 && promedio>0){
        cambiarTexto("lblMensaje","REPROBADO");
        cambiarImagen("imgResultado", "./reprobado.gif")
    }else if(promedio>=5 && promedio<=8){
        cambiarTexto("lblMensaje","BUEN TRABAJO");
        cambiarImagen("imgResultado", "./buen trabajo.gif");
    }else if(promedio>8 && promedio<=10){
        cambiarTexto("lblMensaje","EXCELENTE");
        cambiarImagen("imgResultado", "./excelente.gif");
    }else{
        cambiarTexto("lblMensaje","DATOS INCORRECTOS");
        cambiarImagen("imgResultado", "./error.gif");
    }
}