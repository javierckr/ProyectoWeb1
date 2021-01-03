//Si la galletita existe pone tu nombre y quita el enlace a la página de registro
if(document.cookie){
    //console.log("Cookie existe");
    document.getElementById("changeCont").href = "#";
    document.getElementById("changeCont").innerHTML = "Hola, " + document.cookie;
}
// Es posible que en chrome con la pagina local no funcione bien la cookie, porque no es https en firefox si funciona.
// Aquí funciona tanto en chrome como en firefox https://javierckr.github.io/ProyectoWeb1/
