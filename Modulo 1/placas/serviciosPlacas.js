validarEstructura=function(placa){
    let erroresPlaca="";
    
    if(placa.length <7 || placa.length>8){
        erroresPlaca=erroresPlaca+"La placa debe tener 7 u 8 caracteres"+", "; //36 caracteres
    }else{
        if(!esMayuscula(placa.charCodeAt(0))){
            erroresPlaca=erroresPlaca+"El primer caracter debe ser una letra mayuscula"+", "; //47 caracteres
        }
        if(!esMayuscula(placa.charCodeAt(1))){
            erroresPlaca=erroresPlaca+"El segundo caracter debe ser una letra mayuscula"+", "; //48 caracteres
        }
        if(!esMayuscula(placa.charCodeAt(2))){
            erroresPlaca=erroresPlaca+"El tercer caracter debe ser una letra mayuscula"+", "; //47 caracteres
        }
        if(!esGuion(placa.charCodeAt(3))){
            erroresPlaca=erroresPlaca+"El cuarto caracter debe ser un guion"+", "; //37 caracteres
        }
        if(!esDigito(placa.charCodeAt(4))){
            erroresPlaca=erroresPlaca+"El quinto caracter debe ser un numero"+", "; //37 caracteres
        }
        if(!esDigito(placa.charCodeAt(5))){
            erroresPlaca=erroresPlaca+"El sexto caracter debe ser un numero"+", "; //36 caracteres
        }
        if(!esDigito(placa.charCodeAt(6))){
            erroresPlaca=erroresPlaca+"El septimo caracter debe ser un numero"+", "; //38 caracteres
        }

        if(placa.length==8 && !esDigito(placa.charCodeAt(7))){
            erroresPlaca=erroresPlaca+"El octavo caracter debe ser un numero"+", "; //37 caracteres
        }
    }
     
    if(erroresPlaca.length>0){
        return erroresPlaca;
    }else{
        return null;
    }
}

obtenerProvincia=function(placa){
    let codigo=placa.charCodeAt(0);

    if(placa.charCodeAt(0)>=65 && placa.charCodeAt(0)<=90){
        if(codigo==65) return "Azuay";
        if(codigo==66) return "Bolivar";
        if(codigo==67) return "Carchi";
        if(codigo==69) return "Esmeraldas";
        if(codigo==71) return "Guayas";
        if(codigo==72) return "Chimborazo";
        if(codigo==73) return "Imbabura";
        if(codigo==75) return "Sucumbios";
        if(codigo==76) return "Loja";
        if(codigo==77) return "Manabi";
        if(codigo==78) return "Napo";
        if(codigo==79) return "El Oro";
        if(codigo==80) return "Pichincha";
        if(codigo==81) return "Orellana";
        if(codigo==82) return "Los Rios";
        if(codigo==83) return "Pastaza";
        if(codigo==84) return "Tungurahua";
        if(codigo==85) return "Cañar";
        if(codigo==86) return "Morona Santiago";
        if(codigo==87) return "Galapagos";
        if(codigo==88) return "Cotopaxi";
        if(codigo==89) return "Santa Elena";
        if(codigo==90) return "Zamora Chinchipe";
    }else{
        return null;
    }
}