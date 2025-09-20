probarFunciones=function(){
    saludar();
    saludarPersona("Juan");
    saludarJugador("Cristiano","CR7");
}

probarSaludarPersona=function(){
    let cmpNombre;
    let nombre;

    cmpNombre=document.getElementById("txtNombre");
    nombre=cmpNombre.value;

    saludarPersona(nombre);
}

saludarPersona=function(name){
    console.log("Hola "+name);
}

saludar=function(){
    console.log("Hola");
}

probarSaludarJugador=function(){
    let cmpNombre;
    let nombre;
    let cmpApodo;
    let apodo;

    cmpNombre=document.getElementById("txtNombre");
    nombre=cmpNombre.value;

    cmpApodo=document.getElementById("txtApodo");
    apodo=cmpApodo.value;

    saludarJugador(nombre, apodo);
}
saludarJugador=function(nombre, alias){
    console.log("Hola "+nombre+", "+alias);
}

testSaludarAmigo=function(){
    let cmpNombre;
    let nombre;
    let cmpApellido;
    let apellido;
    let cmpApodo;
    let apodo;

    cmpNombre=document.getElementById("txtNombre");
    nombre=cmpNombre.value;

    cmpApellido=document.getElementById("txtApellido");
    apellido=cmpApellido.value;

    cmpApodo=document.getElementById("txtApodo");
    apodo=cmpApodo.value;

    saludarAmigo(nombre, apellido, apodo);
}

saludarAmigo=function(name, lastname, nickname){
    console.log("Hola "+name+" "+lastname+" "+nickname);
}
