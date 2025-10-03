let personas=[
    {nombre:"Marco", edad:18},
    {nombre:"Roberto", edad:15},
    {nombre:"Kate", edad:25},
    {nombre:"Diana", edad:12},
    {nombre:"Benja", edad:5}
]

agregarPersona=function(){
    let nombre=recuperarTexto("txtNombre");
    let nombreValido=false;

    if(personas.length<3){
        mostrarTexto("lblError1", "Ingrese por lo menos 3 caracteres");
    }else{
        nombreValido=true;
    }

    let edad=recuperarTexto("txtEdad");
    let edadValida=false;

    if(edad=="" || edad.trim()==""){
        mostrarTexto("lblError2", "No ingrese espacios en blanco");
    }else if(parseInt(edad)<0 || parseInt(edad)>100){
        mostrarTexto("lblError2", "Edad permitida entre 0 y 100");
    }else if(isNaN(edad)){
        mostrarTexto("lblError2", "Ingrese solo digitos entre 0 y 100");
    }else{
        edadValida=true;
    }

    if(nombreValido==true && edadValida==true){
        let nuevaPersona={};

        nuevaPersona.nombre=nombre;
        nuevaPersona.edad=edad;

        personas.push(nuevaPersona);

        alert("PERSONA AGREGADA CORRECTAMENTE");

        mostrarNombre()
    }
}

mostrarNombre=function(){
    let cmpTabla=document.getElementById("tablaNombre");
    let contenidoTabla="<table><tr>"+
    "<th>EDAD</th>"+
    "<th>NOMBRE</th>"+
    "</tr>";
    for(let i=0; i<personas.length; i++){
        elementoNombre=personas[i];
        contenidoTabla+="<tr><td>"+elementoNombre.edad+"</td>"
        +"<td>"+elementoNombre.nombre+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}

buscarMayor=function(){
    let personaMayor=personas[0].edad;

    for(let i=0; i<personas.length; i++){
        if(nombre[i].edad>personaMayor){
            personaMayor=personas[i];
        }
    }
}

encontrarMayor=function(){
    let personaMayor=personas[0];
    let elementoPersona;

    for(let i=1; i<personas.length; i++){
        elementoPersona=personas[i];
        console.log("Nombre: "+elementoPersona.nombre+" "+"Edad: "+elementoPersona.edad);

        if(personas[i].edad>personaMayor.edad){
            personaMayor=personas[i];
        }
    }

    return personaMayor;
}

determinarMayor=function(){
    let mayor=encontrarMayor();

    mostrarTexto("lblResultado", "La persona con mayor edad es: "+mayor.nombre+" con "+mayor.edad+" anios.");
}

encontrarMenor=function(){
    let personaMenor=personas[0];
    let elementoPersona;

    for(let i=1; i<personas.length; i++){
        elementoPersona=personas[i];
        console.log("Nombre: "+elementoPersona.nombre+" "+"Edad: "+elementoPersona.edad);

        if(personas[i].edad<personaMenor.edad){
            personaMenor=personas[i];
        }
    }

    return personaMenor;
}

determinarMenor=function(){
    let menor=encontrarMenor();

    mostrarTexto("lblResultado", "La persona con menor edad es: "+menor.nombre+" con "+menor.edad+" anios.");
}