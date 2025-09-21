calcularValorDescuento=function(monto, porcentajeDescuento){
    let valorDescuento=monto*porcentajeDescuento/100;

    return valorDescuento;
}

calcularIVA=function(monto){
    let valorIVA=monto*0.12;

    return valorIVA;
}

calcularSubtotal=function(precio, cantidad){
    let totalPagar=precio*cantidad;

    return totalPagar;
}

calcularTotal=function(subTotal, descuento, IVA){
    let valorTotal=subTotal-descuento+IVA;

    return valorTotal;
}

calcularDescuentoPorVolumen=function(subTotal, cantidad){
    let descuento;
    let valorDescuento;

    if(cantidad<3){
        descuento=0;
    }else if(cantidad>=3 && cantidad<=5){
        descuento=0.03;
    }else if(cantidad>=6 && cantidad<=11){
        descuento=0.04;
    }else if(cantidad>=12){
        descuento=0.05;
    }

    valorDescuento=subTotal*descuento;

    return valorDescuento;
}