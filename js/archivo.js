//VARIABLES GLOBALES
let nombre;
let apellido;
let dni;
let importe;
let cuotas;
let x = 0;
let i = 0;

//CLASE CLIENTE CON DATOS BASICOS
class Cliente {
    constructor(nombre, apellido, dni,edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.dni=dni;
    this.edad=edad; 

    }
}
//ARREGLO DE CLIENTE
let lista_clientes =[];

//FUNCION QUE HACE EL CALCULO DEL PRESTAMO Y MUESTRA VALOR DE CUOTAS Y DEMAS
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
        console.log ("-----------------------------------------------");
        console.log ("-----------------------------------------------");


    }
    else if (importe > 0 && (cuotas >3 || cuotas <=6) ){
        prestamo=importe+(importe*0.35);
        console.log ("Pediste ",importe,)
        console.log ("Vas a terminar devolviendo: " ,prestamo);
        console.log ("En ", cuotas ," cuotas.");
        console.log ("El valor de cada una es: ",(prestamo/cuotas));
        console.log ("-----------------------------------------------");
        console.log ("-----------------------------------------------");
    }
    else if (importe > 0 && (cuotas > 6 || cuotas <=12) ){
        prestamo=importe+(importe*0.45);
        console.log ("Pediste ",importe,)
        console.log ("Vas a terminar devolviendo: " ,prestamo);
        console.log ("En ", cuotas ," cuotas.");  
        console.log ("El valor de cada una es: ",(prestamo/cuotas));
        console.log ("-----------------------------------------------");
        console.log ("-----------------------------------------------");

    }
    else  {
    console.log ("PORFAVOR INGRESE IMPORTE O CANTIDAD DE CUOTAS REALES");
    }


}



console.log ("Bienvenidos a Prestamos El Regalo ");
//BUCLE FOR REALIZA EL CICLO CUANTOS CLIENTES SE NECESITE SIMULAR PRESTAMO 
for (i; i==x; i=i+1 ) {

    let edad=prompt ("Ingrese su edad para validarse en el sistema: ");
    let bol=true;

// VALIDA E INGRESA AL BUCLE SI ES MAYOR DE EDAD Y VALIDA CON UNA VARIABLE BOOLEANA (BOL)
    while (edad>=18 && bol == true){
    nombre = prompt ("Ingrese su nombre: ");
    apellido = prompt ("Ingrese su apellido: ");
    dni = prompt ("Ingrese su DNI: ");
    let cliente1 = new Cliente (nombre, apellido, dni, edad);
    lista_clientes.push(cliente1);


    importe= prompt("Ingrese el Monto del prestamo a solicitar: ");
    cuotas= prompt("Ingrese la cantidad de cuotas entre 1 y 12: ");
    console.log (cliente1.nombre," ",cliente1.apellido);
    prestamo(importe, cuotas);


    bol=false;
        
    }
        if (edad < 18){
    alert("EDAD INVALIDA");
    
    }
 //CONDICIONAL PARA VOLVER AL BUCLE FOR 
let A = prompt("Desea agregar otra simulacion con otro cliente nuevo (Y para si N para no): ");
if (A == "Y" || A== "y"){
    x=x+1;
}
else if (A == "N" || A=="n"){
    x=i;
}
else {
    alert ("Error Ingrese lo que se pidio")
} 
 
}

 //APARTADO SOLO PARA EL ADMINISTRADOR DEL SISTEMA

 //FUNCION PARA BUSCAR CLIENTE POR DNI (SOLO ADMIN)
function buscar_cliente (cliente1){
    return cliente1.dni == buscardni
 
}
//  BUSQUEDA (SOLO ADMIN)
/*
let buscardni = prompt("Ingrese el DNI del cliente a buscar:");
let resultado_busqueda = lista_clientes.find (buscar_cliente);
console.log(resultado_busqueda);*/

