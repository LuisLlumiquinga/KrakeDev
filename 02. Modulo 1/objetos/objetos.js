probarAtributos=function(){
    let persona={
        nombre: "Pedro",
        apellido: "Morales",
        edad: 24,
        estaVivo: true
    }

    console.log(persona.nombre);
    console.log(persona.edad);

    if(persona.estaVivo==false){
        console.log("no esta vivo");
    }else{
        console.log("si esta vivo");
    }
}
crearProducto=function(){
    let producto1={
        nombre: "mochila",
        precio: 22.5,
        stock: 10
    }

    let producto2={
        nombre: "cuaderno",
        precio:3.5,
        stock: 50
    }

    console.log("Producto 1: "+producto1.nombre);
    console.log("Precio producto 2: "+producto2.precio);

    if(producto1.stock>producto2.stock){
        console.log("Producto 1 tiene mayor stock");
    }else if(producto2.stock>producto1.stock){
        console.log("Producto 2 tiene mayor stock");
    }else{
        console.log("Ambos productos tienen el mismo stock");
    }
}