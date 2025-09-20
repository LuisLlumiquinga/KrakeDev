//Crear una funcion llamada convertirCelsiusAFarenheit 
//que reciba como parámetro la temperatura en grados celsius
//y RETORNE la temperatura en grados farenheit

convertirCelsiusAFarenheit=function(temperaturaC){
    let temperaturaF;
    temperaturaF=(temperaturaC*9/5)+32
    return temperaturaF.toFixed(2)
}

mostrarConversion=function(){
    let cmpCelcius;
    let celcius;
    let celciusFloat;
    let celciusFormateado;
    let temperaturaF;
    let cmpFarenheit;

    cmpCelcius=document.getElementById("txtCelsius");
    celcius=cmpCelcius.value;
    celciusFloat=parseFloat(celcius);
    celciusFormateado=celciusFloat.toFixed(2);

    temperaturaF=convertirCelsiusAFarenheit(celciusFormateado);

    cmpFarenheit=document.getElementById("lblFarenheit");
    cmpFarenheit.innerText=temperaturaF;

    cmpBandera=document.getElementById("imgBandera");
    cmpBandera.src="ok.jpg";
}

reiniciar=function(){
    cmpCelcius=document.getElementById("txtCelsius");
    cmpCelcius.value="";
    
    cmpFarenheit=document.getElementById("lblFarenheit");
    cmpFarenheit.innerText="0";
    
    cmpBandera=document.getElementById("imgBandera");
    cmpBandera.src="pensando.jpg";
}