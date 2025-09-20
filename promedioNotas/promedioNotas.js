calcularPromedioNotas=function(){
    let n1, n2, n3;
    let promedio;
    
    n1=recuperarFlotante("txtN1");
    n2=recuperarFlotante("txtN2");
    n3=recuperarFlotante("txtN3");

    promedio=calcularPromedio(n1, n2, n3);

    cambiarTexto("lblPromedio", promedio.toFixed(2));

    if(promedio>7){
        cambiarImagen("imgResultado", "./exito.gif")
    }else{
        cambiarImagen("imgResultado", "./fracaso.gif");
    }
}