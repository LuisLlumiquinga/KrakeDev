let puntos=0;
let lanzamientos=5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarLanzamientos();
    modificarPuntos(resultado);
}

modificarPuntos=function(numero){
    puntos=puntos+numero;
    
    cambiarTexto("lblPuntos", puntos);
    /*si el jugador obtiene mas de 20 puntos 
    mostrar en pantalla un mensaje GANASTE!!
    invocar a limpiar
    */
   if(puntos>20){
        cambiarTexto("lblResultado", "GANASTE!!");
        setTimeout(()=>{
            limpiar();
        }, 2000);
   }
}

//no recibe parametros
//resta 1 a la variable lanzamientos, guarda el resultado en la misma variable 
//y muestar en pantalla
modificarLanzamientos=function(){
    /*Si lanzamientos llega a 0
    mostrar en pantalla el mensaje GAME OVER
    invoca a limpiar
    */
    lanzamientos--;
    cambiarTexto("lblLanzamientos", lanzamientos)
    if(lanzamientos==0){
        cambiarTexto("lblResultado", "GAME OVER!!");
        setTimeout(()=>{
            limpiar();
        }, 2000);
    }
}

/*colocar puntaje en 0 y lanzamientos en 5
en las variables y en pantalla
quitar la imagen
*/
limpiar=function(){
    puntos=0;
    lanzamientos=5;
    cambiarTexto("lblPuntos", "0");
    cambiarTexto("lblLanzamientos", "5");
    cambiarImagen("imgDado", "");
    cambiarTexto("lblResultado", "")
}

//funcion mostrarCara, recibe el numero que quiere mostrar
//muestra la imagen correspondiente al numero que recibe
// no retorna nada
mostrarCara=function(numero){
    if(numero==1){ //con == se compara, mientras que con = se asigna
        cambiarImagen("imgDado", "dados1.png")
    }else if(numero==2){
        cambiarImagen("imgDado", "dados2.png")
    }else if(numero==3){
        cambiarImagen("imgDado", "dados3.png")
    }else if(numero==4){
        cambiarImagen("imgDado", "dados4.png")
    }else if(numero==5){
        cambiarImagen("imgDado", "dados5.png")
    }else if(numero==6){
        cambiarImagen("imgDado", "dados6.png")
    }
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}