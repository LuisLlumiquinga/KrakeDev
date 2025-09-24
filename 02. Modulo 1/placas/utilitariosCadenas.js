esMayuscula=function(caracter){
    if(caracter>=65 && caracter<=90){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
    if(caracter>=48 && caracter<=57){
        return true;
    }else{
        return false;
    }
}

esGuion=function(caracter){
    if(caracter==45){
        return true;
    }else{
        return false;
    }
}