// Función para calcular la edad
function calculaEdad(FechaNacimiento){
    // Guarda la fecha de hoy en la variable hoy
    var hoy = new Date();
    // Si Tiene más de 18...
    return (hoy.getFullYear()-FechaNacimiento) >= 18 ? true : false;
}

//Función para validar dnis
function dniValidate(DNI){
    // Array para guardar las letras del dni con el número que le corresponde, es la posición
    var arrControl = ["t","r","w","a","g","m","y","f","p","d","x","b","n","j","z","s","q","v","h","l","c","k","e"];
    // Guardo la letra del dni convirtiendo el string a array y sacando el último elemento
    var letra = DNI.split('').pop();
    // Guardo el resto del número entre 23, formula de los dni
    var resto = DNI.slice(0, -1)%23;
    // Si la posicion del resto en el array control coincide con la letra devuelve true si no false
    return (arrControl[resto] == letra) ? true : false ;
}

var DNI = prompt("Introduzca DNI", "Harry Potter");
// Quitar espacios del principio y del final por si se ha equivocado
DNI = DNI.trim();
// Si el numero de caracteres es válido
if (DNI.length == 9){
    // Llama a la función para validar el DNI
    var Validated = dniValidate(DNI.toLowerCase());
    // Condición en función de si se ha validado o no
    Validated ? console.log("El DNI es válido \n") : console.log("El DNI no es válido\n");
}else{
    console.log("El DNI no es válido\n");

}

