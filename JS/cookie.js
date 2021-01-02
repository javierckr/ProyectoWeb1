//Si la galletita existe pone tu nombre
//De momento funciona en firefox, en chrome no
if(document.cookie){
    console.log("Cookie existe");
    document.getElementById("changeCont").href = "#";
    document.getElementById("changeCont").innerHTML = "Hola, " + document.cookie;
}
