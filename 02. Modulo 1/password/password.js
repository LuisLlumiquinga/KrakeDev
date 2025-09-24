validarPassword=function(password){
    let mayuscula=false;
    let digito=false;
    let guion=false;
    let caracterEspecial=false
    let mensajeError="";

    if(password.length>=8 && password.length<=16){
        for(let i=0; i<password.length; i++){
            if(esMayuscula(password.charCodeAt(i))){
                mayuscula=true;
            }

            if(esDigito(password.charCodeAt(i))){
                digito=true;
            }

            if(esGuion(password.charCodeAt(i))){
                guion=true;
            }

            if(esCaracterEspecial(password.charCodeAt(i))){
                caracterEspecial=true;
            }
        }

        if(mayuscula==false){
            mensajeError="No hay una mayuscula, ";
        }
        if(digito==false){
            mensajeError=mensajeError+"No hay un digito, ";
        }
        if(caracterEspecial==false){
            mensajeError=mensajeError+"No hay caracter especial, ";
        }
    }else{
        mensajeError="Longitud minima 8 y maxima 16 caracteres";
    }

    return mensajeError;    
}

ejecutarValidacion=function(){
    let password;
    let mensaje;

    password=recuperarTexto("txtPassword");

    mensaje=validarPassword(password);

    if(mensaje==""){
        mostrarTexto("lblValidacion", "Password Correcto");
    }else{
        mostrarTexto("lblValidacion", "Password incorrecto: "+mensaje);
    }
}