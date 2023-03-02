// VARIABLES GLOBALES
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let dni = document.getElementById("dni");
let importe = document.getElementById("importe");
let cuotas = document.getElementById("cuotas");
let botonaceptar = document.getElementById("botonaceptar");
let botonmostrar = document.getElementById("botonmostrar");
let botonborrar = document.getElementById("botonborrar");
let valorporcuota= this.calcularPrestamo;
// ARREGLO DE CLIENTE
let lista_clientes = [];

// CLASE CLIENTE CON DATOS BASICOS
class Cliente {
  constructor(nombre, apellido, dni, edad, importe, cuotas) {
    this.nombre = nombre.value;
    this.apellido = apellido.value;
    this.dni = dni.value;
    this.edad = edad.value;
    this.importe = importe.value;
    this.cuotas = cuotas.value;
    this.prestamo = this.calcularPrestamo();
    this.valorporcuota= valorporcuota;
    
  }
//FUNCION QUE REALIZA EL CALCULO
  calcularPrestamo() {
    let importe = parseFloat(this.importe);
    let cuotas = parseInt(this.cuotas);
    let prestamo = 0;
    valorporcuota=parseFloat(valorporcuota);

    if (importe > 0 && cuotas > 0 && cuotas <= 3) {
      prestamo = importe + (importe * 0.13);
      valorporcuota=(prestamo/cuotas).toFixed(2);
    } else if (importe > 0 && cuotas > 3 && cuotas <= 6) {
      prestamo = importe + (importe * 0.35);
      valorporcuota=(prestamo/cuotas).toFixed(2)
    } else if (importe > 0 && cuotas > 6 && cuotas <= 12) {
      prestamo = importe + (importe * 0.45);
      valorporcuota=(prestamo/cuotas).toFixed(2);
    } 

    return prestamo;
    
  }
}




function mostrar() {
  let fila = document.getElementById("Mostrar");
  fila.innerHTML="";  
for (let cliente_uno of lista_clientes){
  let h =document.createElement("h3");
  h.innerHTML = `<h5>El Cliente: ${cliente_uno.nombre} ${cliente_uno.apellido} pidio $${cliente_uno.importe}
   en ${cliente_uno.cuotas} cuotas.</h5>

   <h5>Termina pagando: $${cliente_uno.prestamo} el valor de la cuota seria de $${cliente_uno.valorporcuota}</h5>
   <button class="btn_borrar" id="botonborrar">Borrar</button>
   <h3>-------------------------------------------------</h3>`;
  fila.append(h);
}
}

function aceptar() {
  let cliente1 = new Cliente(nombre, apellido, dni, edad, importe, cuotas);
  lista_clientes.push(cliente1);
  nombre.value="";
  apellido.value="";
  dni.value="";
  edad.value="";
  importe.value="";
  cuotas.value="";  
  nombre.focus();
  //Almacenamiento de Storage
  /*Segun lo que dijo el profe en la clase de repaso, que no le podemos dar
  utilidad al almacenamiento en storage al ser algo tan simple*/
  let cliente_JSON = JSON.stringify(lista_clientes);
  localStorage.setItem("clientes " , cliente_JSON );
  let recuperando_cliente = localStorage.getItem("clientes");
  recuperando_cliente = JSON.parse( recuperando_cliente );

}
//EVENTO CLICK BOTONES

botonaceptar.addEventListener("click",aceptar);
botonmostrar.addEventListener("click", mostrar);










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

