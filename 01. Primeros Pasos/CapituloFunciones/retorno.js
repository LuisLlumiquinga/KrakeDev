freir=function(alimento){
    let alimentoFrito;

    console.log("Me llega "+alimento);
    console.log("Le pongo en el sarten");
    console.log("Listo!!!");
    
    alimentoFrito=alimento + " frito";
    return alimentoFrito;
}

probarFreir=function(){
    let comidaLista;

    comidaLista=freir("POLLITO");
    console.log(comidaLista);
}

probarFreirComida=function(){
    let cmpComida;
    let comida;
    let resultadoComida;

    cmpComida=document.getElementById("txtComida");
    comida=cmpComida.value;

    resultadoComida=freir(comida);

    console.log("HE RECIBIDO "+resultadoComida);
}