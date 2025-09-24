calcularValorDescuento=function(monto, porcentajeDescuento){
    let descuento;
    descuento=monto*porcentajeDescuento/100;
    return descuento
}

calcularIva=function(monto){
    let valorConIva;
    valorConIva=monto*12/100;
    return valorConIva
}

calcularSubtotal=function(precio, cantidad){
    let subtotal;
    subtotal=precio*cantidad;
    return subtotal
}

calcularTotal=function(subtotal, descuento, valorIVA){
    let total;
    total=subtotal-descuento+valorIVA;
    return total
}