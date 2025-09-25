let frutas=["pera", "manzana", "banana"];

probarBusqueda=function(){
    let frutaIngresada=recuperarTexto("txtFruta");
    let resultado=buscar(frutaIngresada);

    if(resultado==null){
        alert("No existe la fruta");
    }else{
        alert(frutaIngresada+" existe en el cesto!!");
    }
}

buscar=function(fruta){
    let elemento;
    let frutaEncontrada=null;

    for(let i=0; i<frutas.length; i++){
        elemento=frutas[i];

        if(fruta==elemento){
            frutaEncontrada=elemento;
            break;
        }
    }

    return frutaEncontrada;
}