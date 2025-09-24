convertir=function(){
    let cmpGrados;
    let valor1;
    let valor1Entero;
    let resultado;
    let cmpResultado;

    //1.Recuperar el valor de la primera caja de texto
    cmpGrados=document.getElementById("txtGrados");
    valor1=cmpGrados.value;

    //2.Transformar valor1 a entero
    valor1Entero=parseInt(valor1);

    //3.Transformar a grados F
    resultado=(valor1Entero*9/5)+32;

    //4.Mostrar resultado
    cmpResultado=document.getElementById("lblResultado");
    cmpResultado.innerText=resultado+ " Farenheit";
}

//29.86