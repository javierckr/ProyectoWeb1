// Función para calcular la edad
// Badada en w3resource.com
function calculaEdad(FechaNacimiento){
    // Conviete la fecha al formato de fecha
    var FechaObj = new Date(FechaNacimiento);
    // Guarda la diferencia de Milisegundos entre hoy y la fecha de nacimiento
    var diff_ms = Date.now() - FechaObj.getTime();
    // Convertimos la diferencia a una fecha, esto nos va a devolver la edad mas 1970, luego se lo restaremos
    var age_dt = new Date(diff_ms);
    // Si Tiene más de 18...
    //        console.log(Math.abs(age_dt.getUTCFullYear() - 1970));
    return (Math.abs(age_dt.getUTCFullYear() - 1970) >= 18) ? true : false;
}
//Función para validar dni
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
//Procedimiento cuando se pulsa el botón
function formSubmited(){
    //Llamadas a las funciones para comprobar Dni y fecha nacimiento, se llama primero a la de la edad, porque consume menos recursos
    // Si es mayor de edad...
    if(calculaEdad(document.getElementById("age").value)){
        //console.log("Mayor de edad");
        //Ahora comprobaremos que el dni es correcto
        var DNI = document.getElementById("dni").value;
        // Quitar espacios del principio y del final por si se ha equivocado
        // o a copiado y pegado y hay espacios.
        DNI = DNI.trim();
        // Si el numero de caracteres es válido
        if (DNI.length == 9){
            // Llama a la función para validar el DNI
            // Condición en función de si se ha validado o no
            // Llama a la función convirtiendo las letras a minúsculas.
            if(dniValidate(DNI.toLowerCase())){
                // Si todo es correcto se crea una galletita con el nombre de usuario
                // Que se borra al cerrar el navegador, para facilitar pruebas...
                // Le añado el atributo "secure" y samesite para que el navegador la ejecute correctamente
                // Secure hace que funcione con https, en chrome linux no funciona siempre de forma local.
                document.cookie = document.getElementById("nom").value + ";SameSite=none;secure";
            }else{
                alert("DNI no válido");
            }
        }else{
            alert("El DNI debe contener 9 caracteres\n");

        }
    }else{
        alert("No es mayor de edad");
    }
}



// Event listener para cuando se envía el formulario, llama a el procedimiento formSubmited
document.getElementById("submit").addEventListener("submit", formSubmited);
