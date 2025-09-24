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