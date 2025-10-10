cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

movimientos=[
    {numeroCuenta:"02234567",monto:10.24,tipo:"D"},
    {numeroCuenta:"02345211",monto:45.90,tipo:"D"},
    {numeroCuenta:"02234567",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:12.0,tipo:"D"},
]

/*
    En este archivo se deben colocar todas las funciones de cuentas, movimientos y transacciones
    IMPORTANTE: NO DUPLICAR FUNCIONES, si existe una misma función en varios archivos,
    dejar solo una de ellas, ejemplo la función buscarCuenta
*/

//OCULTAR Y MOSTRAR LOS DIVS, para que cada opción muestre solo su parte

cargarPrincipal=function(){
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
}

cargarCuentas=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    mostrarCuentas();
}

cargarTransacciones=function(){
    mostrarComponente("divTransacciones");
    ocultarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    deshabilitarComponente("btnDepositar");
    deshabilitarComponente("btnRetirar");
    deshabilitarComponente("txtMonto");
}

cargarMovimientos=function(){
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    ocultarComponente("divTransacciones");
}

/*--------------------------******  CODIGO CUENTAS *****----------------------------------------------*/

/*
    Muestra en pantalla una tabla con la información de todas las cuentas del arreglo.
    Columnas: NUMERO CUENTA, NOMBRE, SALDO
    En la columna NOMBRE concatenar el nombre y el apellido
*/
mostrarCuentas=function(){
    let cmpTabla=document.getElementById("tablaCuentas");
    let contenidoTabla="<table><tr>"+
    "<th>NUMERO CUENTA</th>"+
    "<th>NOMBRE</th>"+
    "<th>SALDO</th>"+
    "</tr>";
    for(let i=0; i<cuentas.length; i++){
        elementoCuentas=cuentas[i];
        contenidoTabla+="<tr><td>"+elementoCuentas.numeroCuenta+"</td>"
        +"<td>"+elementoCuentas.nombre+" "+elementoCuentas.apellido+"</td>"
        +"<td>"+elementoCuentas.saldo+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
    let cuentaEncontrada=null;

    for(let i=0; i<cuentas.length; i++){
        if(cuentas[i].numeroCuenta==numeroCuenta){
            cuentaEncontrada=cuentas[i];
        }
    }

    return cuentaEncontrada;
}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta=function(cuenta){
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA

    let cuentaEncontrada=buscarCuenta(cuenta.numeroCuenta);

    if(cuentaEncontrada==null){
        cuentas.push(cuenta);
        alert("CUENTA AGREGADA");
    }else{
        alert("CUENTA EXISTENTE");
    }
}

agregar=function(){
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas

    let cedula=recuperarTexto("txtCedula");
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let cuenta=recuperarTexto("txtCuenta");

    let nuevaCuenta=[];

    nuevaCuenta.numeroCuenta=cuenta;
    nuevaCuenta.cedula=cedula;
    nuevaCuenta.nombre=nombre;
    nuevaCuenta.apellido=apellido;
    nuevaCuenta.saldo=0.0;

    agregarCuenta(nuevaCuenta);
    mostrarCuentas();
}

/*--------------------------******  CODIGO TRANSACCIONES *****----------------------------------------------*/

//toma el numero de cuenta de la caja de texto
//invoca a buscarCuenta y guarda el resultado en una variable
//Si el resultado es diferente de null, muestra en pantalla, caso contrario muestra un alert
ejecutarBusqueda=function(){
    let numeroCuenta=recuperarTexto("txtCuentaNumero");
    let cuentaEncontrada=buscarCuenta(numeroCuenta);

    if(cuentaEncontrada!=null){
        let cmpTabla=document.getElementById("tablaCuentaBuscada");
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
    
    //Cuando se realiza un depósito de forma exitosa, se debe crear un objeto movimiento
    //con el tipo C, que corresponde a CREDITO, el número de cuenta a la que se hizo el depósito
    //y el monto que se depositó. Este objeto movimiento se agrega al arreglo movimientos

    let nuevoMovimiento=[];

    nuevoMovimiento.numeroCuenta=numeroCuenta;
    nuevoMovimiento.monto=monto;
    nuevoMovimiento.tipo="C"

    movimientos.push(nuevoMovimiento);
}

//Toma el numero de cuenta ingresado en la caja de texto
//Toma el monto ingresado en la caja de texto
//invoca a depositar
//Muestra un mensaje TRANSACCION EXITOSA
//Muestra en pantalla el nuevo saldo de la cuenta
ejecutarDeposito=function(){
    let cuenta=recuperarTexto("txtCuentaNumero");
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

                //Cuando se realiza un retiro de forma exitosa, se debe crear un objeto movimiento
                //con el tipo D, que corresponde a DEBITO, el número de cuenta a la que se hizo el retiro
                //y el monto que se retiró. Este objeto movimiento se agrega al arreglo movimientos

                let nuevoMovimiento=[];

                nuevoMovimiento.numeroCuenta=numeroCuenta;
                nuevoMovimiento.monto=monto;
                nuevoMovimiento.tipo="D"

                movimientos.push(nuevoMovimiento);
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
    let cuenta=recuperarTexto("txtCuentaNumero");
    let monto=recuperarTexto("txtMonto");

    retirar(cuenta, parseFloat(monto));
    
    ejecutarBusqueda();
}

/*--------------------------******  CODIGO MOVIMIENTOS *****----------------------------------------------*/

//Se barre el arreglo de movimientos
//En cada iteración, verifica si el numero de cuenta del movimiento es igual al que recibe como parametro
//En caso de serlo, agrega la cuenta al arreglo movimientosCuenta
//Invoca a mostrarMovimientos, pasándole como parámetro movimientosCuenta
filtrarMovimientos=function(numeroCuenta){
    let movimientosCuenta=[];
    
    for(let i=0; i<movimientos.length; i++){
        if(movimientos[i].numeroCuenta==numeroCuenta){
            movimientosCuenta.push(movimientos[i]);
        }
    }

    mostrarMovimientos(movimientosCuenta);
}

/*
    Recibe un arreglo con los movimientos que va a mostrar en pantalla
*/

//Muestra en pantalla una tabla con los movimientos que recibe en misMovimientos
//Columnas: NUMERO CUENTA, MONTO, TIPO
//Si ya pinta correctamente la tabla, hacer el siguiente cambio:
//Si el tipo es D(DEBITO), mostrar el monto en negativo (multiplicar por -1)
//Si el tipo es C(CREDITO), mostrar el monto en positivo (tal como está guardado)
mostrarMovimientos=function(misMovimientos){
    let cmpTabla=document.getElementById("tablaMovimientos");
    let contenidoTabla="<table><tr>"+
    "<th>NUMERO CUENTA</th>"+
    "<th>MONTO</th>"+
    "<th>TIPO</th>"+
    "</tr>";
    for(let i=0; i<misMovimientos.length; i++){
        if(misMovimientos[i].tipo=="D"){
            misMovimientos[i].monto*=-1;
        }
        contenidoTabla+="<tr><td>"+misMovimientos[i].numeroCuenta+"</td>"
        +"<td>"+misMovimientos[i].monto+"</td>"
        +"<td>"+misMovimientos[i].tipo+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}

buscarMovimientos=function(){
    let cuenta=recuperarTexto("txtCuentaMovimientos");
    filtrarMovimientos(cuenta);
}