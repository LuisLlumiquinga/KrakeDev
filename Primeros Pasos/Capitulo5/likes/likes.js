let votosMinecraft=0;
let votosRoblox=0;

sumarLikeMinecraft=function(){
    let cmpMinecraf;
    let resultadoLike;

    cmpMinecraf=document.getElementById("lblMinecraft");
    resultadoLike=cmpMinecraf.innerText;
    votosMinecraft=parseInt(resultadoLike)+1;

    cmpMinecraf.innerText=votosMinecraft;
}
sumarCorazonMinecraft=function(){
    let cmpMinecraf;
    let resultadoEncanta;

    cmpMinecraf=document.getElementById("lblMinecraft");
    resultadoEncanta=cmpMinecraf.innerText;
    votosMinecraft=parseInt(resultadoEncanta)+5;

    cmpMinecraf.innerText=votosMinecraft;
}
restarLikeMinecraft=function(){
    let cmpMinecraf;
    let resultadoDislike;

    cmpMinecraf=document.getElementById("lblMinecraft");
    resultadoDislike=cmpMinecraf.innerText;
    votosMinecraft=parseInt(resultadoDislike)-1;

    cmpMinecraf.innerHTML=votosMinecraft;
}
sumarLikeRoblox=function(){
    let cmpRoblox;
    let resultadoLike;

    cmpRoblox=document.getElementById("lblRoblox");
    resultadoLike=cmpRoblox.innerText;
    votosRoblox=parseInt(resultadoLike)+1;

    cmpRoblox.innerText=votosRoblox;
}
sumarCorazonRoblox=function(){
    let cmpRoblox;
    let resultadoEncanta;

    cmpRoblox=document.getElementById("lblRoblox");
    resultadoEncanta=cmpRoblox.innerText;
    votosRoblox=parseInt(resultadoEncanta)+5;

    cmpRoblox.innerText=votosRoblox;
}
restarLikeRoblox=function(){
    let cmpRoblox;
    let resultadoDislike;

    cmpRoblox=document.getElementById("lblRoblox");
    resultadoDislike=cmpRoblox.innerText;
    votosRoblox=parseInt(resultadoDislike)-1;

    cmpRoblox.innerHTML=votosRoblox;  
}