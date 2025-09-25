aleatorio=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorAleatorio;

    aleatorio=Math.random(); //entre 0 y 1
    numeroMultiplicado=aleatorio*100;
    numeroEntero=parseInt(numeroMultiplicado); //entre 0 y 100
    valorAleatorio=numeroEntero+1;

    return valorAleatorio;
}

generarAleatorio=function(){
    let aleatorios=[];
    let numeroAleatorio;
    let numeroCaja;

    numeroCaja=recuperarTexto("txtNumero");

    if(numeroCaja>=5 && numeroCaja<=20){
        for(let i=0; i<numeroCaja; i++){
            console.log(i);
            numeroAleatorio=aleatorio();
            aleatorios.push(numeroAleatorio);
        }

        mostrarResultados(aleatorios);
    }
}

mostrarResultados=function(arregloNumeros){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NUMERO</th></tr>";
    let miNumero;

    for(let i=0; i<arregloNumeros.length; i++){
        miNumero=arregloNumeros[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNumero;
        contenidoTabla+="</tr></td>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;

}