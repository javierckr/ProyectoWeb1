//Si la galletita existe pone tu nombre
if(document.cookie){
    console.log("Cookie existe");
    document.getElementById("changeCont").href = "#";
    document.getElementById("changeCont").innerHTML = "Hola, " + document.cookie;
}
// Es posible que en crome con la pagina local no funcione bien la cookie, porque no es https en firefox
// funciona.
// Aquí funciona https://javierckr.github.io/ProyectoWeb1/
