calcularPromedioNotas=function(){
    let nota1=parseFloat(recuperarTexto("txtNota1"));
    let nota2=parseFloat(recuperarTexto("txtNota2"));
    let nota3=parseFloat(recuperarTexto("txtNota3"));

    let promedio=calcularPromedio(nota1, nota2, nota3);

    cambiarTexto("txtPromedio", promedio.toFixed(2));

    if(promedio>7){
        cambiarImagen("imgImagen", "exito.gif")
    }else{
        cambiarImagen("imgImagen", "fracaso.gif")
    }
}