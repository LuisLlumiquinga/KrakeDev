calcularDescuento=function(valorReal, porcentajeDescuento){
    let valorDescuento;
    let total;

    valorDescuento=valorReal*porcentajeDescuento/100;

    total=valorReal-valorDescuento;

    return total;
}

descontar=function(){
    let cmpMonto;
    let monto;
    let montoEntero;
    let cmpDescuento;
    let descuento;
    let descuentoEntero;
    let total;
    let cmpTotal;

    cmpMonto=document.getElementById("txtMonto");
    monto=cmpMonto.value;
    montoEntero=parseInt(monto);

    cmpDescuento=document.getElementById("txtDescuento");
    descuento=cmpDescuento.value;
    descuentoEntero=parseInt(descuento);

    total=calcularDescuento(montoEntero, descuentoEntero);

    cmpTotal=document.getElementById("lblTotal");
    cmpTotal.innerText=total;
}