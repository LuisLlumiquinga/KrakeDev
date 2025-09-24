sumar=function(valor1,valor2){
    let resultado=valor1+valor2;
    return resultado;
}
promediar=function(valor1,valor2){
    let total=valor1+valor2;
    let promedio=total/2;
    return promedio;
}
probar=function(){
    let cmpValor1=document.getElementById("txtValor1");
    valor1=cmpValor1.value;

    let cmpValor2=document.getElementById("txtValor2");
    valor2=cmpValor2.value;

    let suma=sumar(parseInt(valor1),parseInt(valor2));
    let cmpSuma=document.getElementById("lblSuma");
    cmpSuma.innerText=suma;
}

mostrarPromedio=function(){
    cmpValor1=document.getElementById("txtValor1");
    valor1=cmpValor1.value;

    cmpValor2=document.getElementById("txtValor2");
    valor2=cmpValor2.value;

    promedio=promediar(parseInt(valor1), parseInt(valor2));

    cmpPromedio=document.getElementById("lblPromedio");
    cmpPromedio.innerText=promedio;
}