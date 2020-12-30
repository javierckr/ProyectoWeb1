calculaEdad(FechaNacimiento){
    var hoy = new Date();
    return (hoy.getFullYear()-FechaNacimiento) >= 18 ? true : false;
}
