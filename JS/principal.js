function calculaEdad(FechaNacimiento){
    var hoy = new Date();
    return (hoy.getFullYear()-FechaNacimiento) >= 18 ? true : false;
}

function dniValidate(DNI){
    var arrControl = ["t","r","w","a","g","m","y","f","p","d","x","b","n","j","z","s","q","v","h","l","c","k","e"];
    var letra = DNI.split('').pop();
    console.log(letra);
    var resto = DNI.slice(0, -1)%23;
    console.log(resto);
    return (arrControl[resto] == letra) ? true : false ;
}

var DNI = prompt("Introduzca DNI", "Harry Potter");
DNI.trim();
if (DNI.length == 9){
    var Validated = dniValidate(DNI.toLowerCase());
    Validated ? console.log("El DNI es válido \n") : console.log("El DNI no es válido\n");
}else{
    console.log("El DNI no es válido\n");

}

