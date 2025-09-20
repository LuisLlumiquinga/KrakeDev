calcularTasaInteres=function(ingresoAnual){
    let interes=0;

    if(ingresoAnual<300000){
        interes=0.16;
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        interes=0.15;
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        interes=0.14;
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        interes=0.13;
    }else if(ingresoAnual>=2000000){
        interes=0.12;
    }

    return interes;
}

calcularCapacidadPago=function(edad, ingresos, egresos){
    let capacidad=0;

    if(edad>50){
        capacidad=(ingresos-egresos)*0.3;
    }else if(edad<=50){
        capacidad=(ingresos-egresos)*0.4;
    }

    return capacidad;
}

calcularDescuento=function(precio, cantidad){
    let descuento=0;
    let total=0;

    if(cantidad<3){
        descuento=0;
    }else if(cantidad>=3 && cantidad<=5){
        descuento=0.02;
    }else if(cantidad>=6 && cantidad<=11){
        descuento=0.03;
    }else if(cantidad>=12){
        descuento=0.04;
    }

    total=(precio*cantidad)*descuento;

    return total
}

calcularColesterolILDL=function(nivelColesterol){
    if(nivelColesterol<100){
        return "OPTIMO (LDL < 100 mg/dL";
    }else if(nivelColesterol>=100 && nivelColesterol<=129){
        return "CERCANO / POR ENCIMA DE LO OPTIMO (LDL 100-129 mg/dL";
    }else if(nivelColesterol>=130 && nivelColesterol<=159){
        return "LIMITE ALTO (LDL 130-159 mg/dL";
    }else if(nivelColesterol>=160 && nivelColesterol<=189){
        return "ALTO (LDL 160-189 mg/dL";
    }else{
        return "MUY ALTO (LDL >= 190 mg/dL";
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
    if(caracter.charCodeArt(0)>=65 && caracter.charCodeArt(0)<=90){
        return true;
    }else{
        return false;
    }
}

esMinuscula=function(caracter){
    if((caracter.charCodeArt(0)>=97 && caracter.charCodeArt(0)<=122) || (caracter.charCodeArt(0)>=160 && caracter.charCodeArt(0)<=163) || (caracter.charCodeArt(0)==130) || (x==0)){
        return true;
    }else{
        return false;
    }
}

darPermiso=function(notaMatematica, notaFisica, notaGeometria){
    if((notaMatematica>90) || (notaFisica>90) || (notaGeometria>90)){
        return true;
    }else{
        return false;
    }
}

otorgarPermiso=function(notaMatematica, notaFisica, notaGeometria){
    if((notaMatematica>90) || (notaFisica>90) && (notaGeometria>80)){
        return true;
    }else{
        return false;
    }
}

dejarSalir=function(notaMatematica, notaFisica, notaGeometria){
    if(((notaMatematica>90) || (notaFisica>90) || (notaGeometria>90)) && (notaFisica>notaMatematica)){
        return true;
    }else{
        return false;
    }
}