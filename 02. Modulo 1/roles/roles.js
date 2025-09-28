let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"9014632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1001145457",nombre:"Joselyne",apellido:"Morales",sueldo:800.0}
]

let esNuevo=false;

let roles=[];

mostrarEmpleados=function(){
    let cmpTabla=document.getElementById("tablaEmpleados");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th>"+
    "</tr>";
    for(let i=0; i<empleados.length; i++){
        elementoEmpleado=empleados[i];
        contenidoTabla+="<tr><td>"+elementoEmpleado.cedula+"</td>"
        +"<td>"+elementoEmpleado.nombre+"</td>"
        +"<td>"+elementoEmpleado.apellido+"</td>"
        +"<td>"+elementoEmpleado.sueldo+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}

mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");

    mostrarEmpleados();
    deshabilitarTodo();
}

mostrarOpcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    deshabilitarComponente("btnGuardarRol");
}

mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

ejecutarNuevo=function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo=true;
}

buscarEmpleado=function(cedula){
    let elementoEmpleado;
    let empleadoEncontrado=null;

    for(let i=0; i<empleados.length; i++){
        elementoEmpleado=empleados[i];
        if(elementoEmpleado.cedula==cedula){
            empleadoEncontrado=elementoEmpleado;
            break;
        }
    }

    return empleadoEncontrado;
}

agregarEmpleado=function(empleado){
    let empleadoEncontrado=buscarEmpleado(empleado.cedula);
    let empleadoAgregado=false;

    if(empleadoEncontrado==null){
        empleados.push(empleado);
        empleadoAgregado=true;
    }

    return empleadoAgregado;
}

guardar=function(){
    let cedula;
    let nombre;
    let apellido;
    let sueldo;

    cedula=recuperarInt("txtCedula");
    let cedulaCorrecta=false;

    if(isNaN(cedula)){
        mostrarTexto("lblErrorCedula", "Cedula incorrecta, debe ingresar solo digitos");
    }else if(cedula.toString().length!=10){
        mostrarTexto("lblErrorCedula", "Cedula incorrecta, debe tener 10 digitos");
    }else if(cedula==""){
        mostrarTexto("lblErrorCedula", "Cedula incorrecta, ingrese 10 digitos");
    }else{
        cedulaCorrecta=true;
    }

    nombre=recuperarTexto("txtNombre");
    let nombreMayuscula=false;

    if(nombre.length>=3){
        for(let i=0; i<nombre.length; i++){
            if(nombre.charCodeAt(i)>=65 && nombre.charCodeAt(i)<=90){
                nombreMayuscula=true;
            }else{
                mostrarTexto("lblErrorNombre", "El nombre debe tener minimo 3 caracteres y todos en mayuscula");
            }                
        }
    }

    apellido=recuperarTexto("txtApellido");
    let apellidoMayuscula=false;

    if(apellido.length>=3){
        for(let i=0; i<apellido.length; i++){
            if(apellido.charCodeAt(i)>=65 && apellido.charCodeAt(i)<=90){
                apellidoMayuscula=true;
            }else{
                mostrarTexto("lblErrorApellido", "El apellido debe tener minimo 3 caracteres y todos en mayuscula");
            }
        }
    }

    sueldo=recuperarFloat("txtSueldo");
    let sueldoCorrecto=false;

    if(sueldo>=400 && sueldo<=5000){
        sueldoCorrecto=true;
    }else{
        mostrarTexto("lblErrorSueldo", "El sueldo esta entre entre 400 y 5000");
    }

    if(cedulaCorrecta==true && nombreMayuscula==true && apellidoMayuscula==true && sueldoCorrecto==true){
        if(esNuevo==true){
            let empleado={};

            empleado.cedula=cedula;
            empleado.nombre=nombre;
            empleado.apellido=apellido;
            empleado.sueldo=sueldo;

            let nuevoEmpleado=agregarEmpleado(empleado);

            if(nuevoEmpleado==true){
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                esNuevo=false;
                mostrarEmpleados();
                
                deshabilitarTodo();
            }else{
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA "+empleado.cedula);
            }
        }else{
            let empleadoEncontrado=buscarEmpleado(cedula);

            empleadoEncontrado.nombre=recuperarTexto("txtNombre");
            empleadoEncontrado.apellido=recuperarTexto("txtApellido");
            empleadoEncontrado.sueldo=recuperarTexto("txtSueldo");

            alert("EMPLEADO MODIFICADO EXITOSAMENTE");

            mostrarEmpleados();

            deshabilitarTodo();
        }
    }
}

deshabilitarTodo=function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

ejecutarBusqueda=function(){
    let cedula;
    let empleado;

    cedula=recuperarTexto("txtBusquedaCedula");
    empleado=buscarEmpleado(cedula);

    if(empleado==null){
        alert("EMPLEADO NO EXISTE")
    }else{
        mostrarTextoEnCaja("txtCedula", empleado.cedula);
        mostrarTextoEnCaja("txtNombre", empleado.nombre);
        mostrarTextoEnCaja("txtApellido", empleado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleado.sueldo);

        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar")
        deshabilitarComponente("txtCedula");
    }
}

limpiar=function(){
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    esNuevo=false;
    deshabilitarTodo();
}

buscarRol=function(){
    let cedulaEmpleado;
    let empleadoEncontrado;

    cedulaEmpleado=recuperarTexto("txtBusquedaCedulaRol");

    empleadoEncontrado=buscarEmpleado(cedulaEmpleado);

    if(empleadoEncontrado===null){
        alert("EMPLEADO NO EXISTE")
    }else{
        mostrarTexto("infoCedula", empleadoEncontrado.cedula);
        mostrarTexto("infoNombre", empleadoEncontrado.nombre+" "+empleadoEncontrado.apellido)
        mostrarTexto("infoSueldo", empleadoEncontrado.sueldo);
    }
}

calcularAporteEmpleado=function(sueldo){
    let aporte;

    aporte=sueldo*0.0945;

    return aporte;
}

calcularValorAPagar=function(sueldo, aporteIESS, descuento){
    let valorAPagar;

    valorAPagar=sueldo-aporteIESS-descuento;

    return valorAPagar;
}

calcularRol=function(){
    let sueldo;
    let descuento;
    let aporte;
    let valorAPagar;

    sueldo=recuperarTextoDiv("infoSueldo");
    descuento=recuperarFloat("txtDescuentos");

    if (isNaN(descuento) || descuento<=0 || descuento>=sueldo) {
        mostrarTexto("lblErrorDescuentos", "El descuento deben ser un valor entre 0 y " + sueldo);
    } else {
        mostrarTexto("lblErrorDescuentos", ""); // Limpiar mensaje de error
        
        aporte=calcularAporteEmpleado(sueldo);
        mostrarTexto("infoIESS", aporte);

        valorAPagar=calcularValorAPagar(sueldo, aporte, descuento);
        mostrarTexto("infoPago", valorAPagar);

        habilitarComponente("btnGuardarRol");
    }
}

buscaRol=function(cedula){
    let rolEncontrado=null;
    for(let i=0; i<=roles.length-1; i++){
        if(roles[i].cedula==cedula){
            rolEncontrado=roles[i]
        }
    }
    return rolEncontrado
}

agregarRol=function(rol){
    let rolEncontrado;

    rolEncontrado=buscaRol(rol.cedula);

    if(rolEncontrado!=null){
        alert("ESTE ROL YA SE ENCUENTRA EN LA BASE DE DATOS");
    }else{
        roles.push(rol);
        alert("ROL AGREGADO CON EXITO");
    }
}

calcularAporteEmpleador=function(sueldo){
    return aporteEmpleador=aporteEmpleador=sueldo*0.01115
}

guardarRol=function(){
    let infoIESS=recuperarTextoDiv("infoIESS");
    let infoPago=recuperarTextoDiv("infoPago");
    let infoNombre=recuperarTextoDiv("infoNombre");
    let infoCedula=recuperarTextoDiv("infoCedula");
    let infoSueldo=recuperarTextoDiv("infoSueldo");

    let aporteEmpleador=calcularAporteEmpleador(infoSueldo);

    let rol=[];

    rol.aporteIESS=infoIESS;
    rol.totalPagar=infoPago;
    rol.nombre=infoNombre;
    rol.cedula=infoCedula;
    rol.sueldo=infoSueldo;
    rol.aporteEmpleador=aporteEmpleador;

    agregarRol(rol);
    deshabilitarComponente("btnGuardarRol");
}

