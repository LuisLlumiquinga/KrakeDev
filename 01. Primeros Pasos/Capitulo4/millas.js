convertir=function(){
    let cmpMillas;
    let valor1;
    let valor1Entero;
    let resultado;
    let cmpResultado;

    //1.Recuperar el valor de la primera caja de texto
    cmpMillas=document.getElementById("txtMillas");
    valor1=cmpMillas.value;

    //2.Transformar valor1 en entero
    valor1Entero=parseInt(valor1);

    //3.Transformar a kilometros
    resultado=valor1*1.609

    //4.Mostrar resultado
    cmpResultado=document.getElementById("lblResultado");
    cmpResultado.innerText=resultado+" Kilometros";
}