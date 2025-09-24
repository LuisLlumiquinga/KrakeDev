calcularTasaInteres=function(ingresoAnual){
    let tasaInteres;

    if(ingresoAnual<300000){
        tasaInteres=0.16;
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        tasaInteres=0.15;
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        tasaInteres=0.14;
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasaInteres=0.13;
    }else if(ingresoAnual>=2000000){
        tasaInteres=0.12;
    }

    return tasaInteressa;
}

calcularCapacidadPago=function(edad, ingresos, egresos){
    let capacidadPago;

    if(edad>50){
        capacidadPago=0.30*(ingresos-egresos);
    }else if(edad<=50 && edad>0){
        capacidadPago=0.40*(ingresos-egresos);
    }

    return capacidadPago;
}

calcularDescuento=function(precio, cantidad){
    let descuento, valorPago;

    if(cantidad<3){
        descuento=0;
    }else if(cantidad>=3 && cantidad<=5){
        descuento=0.02;
    }else if(cantidad>=6 && cantidad<=11){
        descuento=0.03;
    }else if(cantidad>=12){
        descuento=0.04;
    }

    valorPago=(precio*cantidad)*descuento;

    return valorPago;
}

determinarColesterolLDL=function(nivelColesterol){
    if(nivelColesterol<100) {
            return "Óptimo";
        }else if(nivelColesterol>=100 && nivelColesterol<=129) {
            return "Casi óptimo";
        }else if(nivelColesterol>=130 && nivelColesterol<=159) {
            return "Límite alto";
        }else if(nivelColesterol>=160 && nivelColesterol<=189) {
            return "Alto";
        }else{ //nivelColesterol>=190
            return "Muy alto";
        }
}

validarClave=function(clave){
    if(clave.length>=8 && clave.length<=16){
        return true;
    }else{
        return false;
    }
}

esMayuscula=function(caracter){
    if(caracter.charCodeAt(0)>=65 && caracter.charCodeAt(0)<=90){
        return true;
    }else{
        return false;
    }
}

esMinuscula=function(caracter){
    if((caracter.charCodeAt(0)>=97 && caracter.charCodeAt(0)<=122)||(caracter.charCodeAt(0)>=160 && caracter.charCodeAt(0)<=163)||(caracter.charCodeAt(0)==130)){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
    if(caracter.charCodeAt(0)>=48 && caracter.charCodeAt(0)<=57){
        return true;
    }else{
        return false;
    }
}

darPermiso=function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        return true;
    }else{
        return false;
    }
}

otorgarPermiso=function(notaMatematica, notaFisica, notaGeometria){
    if((notaMatematica>90 || notaFisica>90) && notaGeometria>80){
        return true;
    }else{
        return false;
    }
}

dejarSalir=function(notaMatematica, notaFisica, notaGeometria){
    if((notaMatematica>90 || notaFisica>90 || notaGeometria>90) && (notaFisica>notaGeometria)){
        return true;
    }else{
        return false;
    }
}

