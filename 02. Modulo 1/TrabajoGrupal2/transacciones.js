cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    deshabilitarComponente("btnDepositar");
    deshabilitarComponente("btnRetirar");
    deshabilitarComponente("txtMonto");
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
    let cuentaEncontrada=null;

    for(let i=0; i<cuentas.length; i++){
        if(numeroCuenta==cuentas[i].numeroCuenta){
            cuentaEncontrada=cuentas[i];
            return cuentaEncontrada;
        }else{
            return cuentaEncontrada;
        }
    }

}

//toma el numero de cuenta de la caja de texto
//invoca a buscarCuenta y guarda el resultado en una variable
//Si el resultado es diferente de null, muestra en pantalla, caso contrario muestra un alert
ejecutarBusqueda=function(){
    let cuenta=recuperarTexto("txtCuenta");
    let cuentaEncontrada=buscarCuenta(cuenta);

    if(cuentaEncontrada!=null){
        let cmpTabla=document.getElementById("tablaCuentas");
        let contenidoTabla="<table><tr>"+
        "<th>NUMERO CUENTA</th>"+
        "<th>NOMBRE</th>"+
        "<th>SALDO</th>"+
        "</tr>";
        contenidoTabla+="<tr><td>"+cuentaEncontrada.numeroCuenta+"</td>"
        +"<td>"+cuentaEncontrada.nombre+" "+cuentaEncontrada.apellido+"</td>"
        +"<td>"+cuentaEncontrada.saldo+"</td>"
        +"</tr>"
        contenidoTabla+="</table>"
        cmpTabla.innerHTML=contenidoTabla;

        habilitarComponente("btnDepositar");
        habilitarComponente("btnRetirar");
        habilitarComponente("txtMonto");
    }else{
        alert("CUENTA INEXISTENTE");
    }
}

//invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
//Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
depositar=function(numeroCuenta,monto){
    let cuentaAfectada;

    cuentaAfectada=buscarCuenta(numeroCuenta);

    cuentaAfectada.saldo+=monto;
}

//Toma el numero de cuenta ingresado en la caja de texto
//Toma el monto ingresado en la caja de texto
//invoca a depositar
//Muestra un mensaje TRANSACCION EXITOSA
//Muestra en pantalla el nuevo saldo de la cuenta
ejecutarDeposito=function(){
    let cuenta=recuperarTexto("txtCuenta");
    let monto=recuperarTexto("txtMonto");

    depositar(cuenta, parseFloat(monto));
    alert("TRANSACCION EXITOSA");
    
    ejecutarBusqueda();
}

//invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
//Valida si la cuenta tiene el saldo suficiente para retirar el monto
//Si el saldo es suficiente,al saldo actual de la cuenta afectada, le resta el monto que recibe como parámetro
//Si el saldo no es suficiente, muestra un alert SALDO INSUFICIENTE
//Si logra retirar muestra un mensaje TRANSACCION EXITOSA y muestra en pantalla el nuevo saldo de la cuenta
retirar=function(numeroCuenta,monto){
    let cuentaAfectada;

    cuentaAfectada=buscarCuenta(numeroCuenta);

    if(cuentaAfectada.saldo>0){
        if(cuentaAfectada.saldo>=monto){
                cuentaAfectada.saldo-=monto;
                alert("TRANSACCION EXITOSA");

                ejecutarBusqueda();
        }else{
            alert("SALDO INSUFICIENTE");
        }
    }else{
            alert("SALDO INSUFICIENTE");
        }
}

//Toma el numero de cuenta ingresado en la caja de texto
//Toma el monto ingresado en la caja de texto
//invoca a retirar
//Muestra en pantalla el nuevo saldo de la cuenta
ejecutarRetiro=function(){
    let cuenta=recuperarTexto("txtCuenta");
    let monto=recuperarTexto("txtMonto");

    retirar(cuenta, parseFloat(monto));
    
    ejecutarBusqueda();
}