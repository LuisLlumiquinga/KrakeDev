calcularUtilidad=function(ingresos, gastos){
    let resultadoUtilidad;

    resultadoUtilidad=ingresos-gastos;

    return resultadoUtilidad
}

ejecutarUtilidad=function(){
    //1. recuperar ingresos como entero
    let cmpIngresos;
    let ingresos;
    let ingresosEntero;
    let cmpEgresos;
    let egresos;
    let egresosEntero;
    let utilidad;
    let cmpUtilidad;

    cmpIngresos=document.getElementById("txtIngresos");
    ingresos=cmpIngresos.value;
    ingresosEntero=parseInt(ingresos);

    //2. recupera egresos
    cmpEgresos=document.getElementById("txtEgresos");
    egresos=cmpEgresos.value;
    egresosEntero=parseInt(egresos);

    //3. invoca a calcularUtilidad
    utilidad=calcularUtilidad(ingresosEntero, egresosEntero);

    //4. mostrar en pantalla
    console.log("La utilidad es "+utilidad);
    cmpUtilidad=document.getElementById("lblUtilidad");
    cmpUtilidad.innerText=utilidad;
}