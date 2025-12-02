modificar = function (){
    console.log("hola mundo");
    alert("Se va a acabar el mundo, arrepientete pecador!!");

    let texto=document.getElementById("texto");
    texto.innerText="Mi profesor se llama Santiago";

    let boton=document.getElementById("boton");
    boton.value="CAMBIO";

    let imagen=document.getElementById("imagen");
    imagen.src="./Goofy_transparent.webp";
}

cambiar = function (){
    let imagen1=document.getElementById("imagen1");
    imagen1.src="./triste.webp";

    let imagen2=document.getElementById("imagen2");
    imagen2.src="./feliz.png";
}

reiniciar = function (){
    let imagen1=document.getElementById("imagen1");
    imagen1.src="./feliz.png";

    let imagen2=document.getElementById("imagen2");
    imagen2.src="./triste.webp";
}