
let nombre;
let apellido;
let dni;
let importe;
let cuotas;

function prestamo (importe, cuotas){
    importe= parseFloat(importe);
    cuotas= parseInt(cuotas);

    let prestamo = 0;

    if (importe > 0 && (cuotas >0 || cuotas <=3)){
        prestamo=importe+(importe*0.13);
        console.log ("Pediste ",importe,)
        console.log ("Vas a terminar devolviendo: " ,prestamo);
        console.log ("En ", cuotas ," cuotas.");
        console.log ("El valor de cada una es: ",(prestamo/cuotas));


    }
    else if (importe > 0 && (cuotas >3 || cuotas <=6) ){
        prestamo=importe+(importe*0.35);
        console.log ("Pediste ",importe,)
        console.log ("Vas a terminar devolviendo: " ,prestamo);
        console.log ("En ", cuotas ," cuotas.");
        console.log ("El valor de cada una es: ",(prestamo/cuotas));
       
    }
    else if (importe > 0 && (cuotas > 6 || cuotas <=12) ){
        prestamo=importe+(importe*0.45);
        console.log ("Pediste ",importe,)
        console.log ("Vas a terminar devolviendo: " ,prestamo);
        console.log ("En ", cuotas ," cuotas.");  
        console.log ("El valor de cada una es: ",(prestamo/cuotas));

    }
    else  {
    console.log ("PORFAVOR INGRESE IMPORTE O CANTIDAD DE CUOTAS REALES");
    }


}
 


console.log ("Bienvenidos a Prestamos El Regalo ")
let edad=prompt ("Ingrese su edad para validarse en el sistema: ");
let bol=true;
while (edad>=18 && bol == true){
    nombre = prompt ("Ingrese su nombre: ");
    apellido = prompt ("Ingrese su apellido: ");
    dni = prompt ("Ingrese su DNI: ");
    importe= prompt("Ingrese el Monto del prestamo a solicitar: ");
    cuotas= prompt("Ingrese la cantidad de cuotas entre 1 y 12: ");
    console.log (nombre," ",apellido);
    console.log ("-----------------------------------------------");
    prestamo(importe, cuotas);


    bol=false;
        
}
if (edad < 18){
    alert("EDAD INVALIDA");
    
}