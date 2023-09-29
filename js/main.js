// CLASE 1

// let nombre = prompt ("Ingrese  Su Nombre");

// alert ("Hola" + " " + nombre + " " + "Buenas noches!");

// let edad = Number(prompt( "Cuantos años tienes?"))

// alert (edad * 365 + " " + "es tu edad en dias!");

// let edadEnDias = edad * 365;

//  let mesDeNacimiento = prompt ("En que mes naciste?")

//  let ocupacion = prompt ("Cual es tu ocupacion actual?")

//  alert ("Tu nombre es" + " " + nombre + ", tienes" + " " + edadEnDias + " " + "dias o" + " " + edad + " " + "años." + " " + "Naciste en el mes de" + " " + mesDeNacimiento + " " + "y actualmente tu ocupacion actual es:" + " " + ocupacion)

// alert ("Gracias" + " " + nombre + " " + "por tu cooperacion!")

// CLASE 2

// alert ( "Licencia de Conducir");
// let nombre = prompt ( "Ingrese su nombre").toLowerCase();

// let edad = Number (prompt ("Ingrese su edad"));

// if ((nombre !="") && (edad !="")) {
//     alert("Nombre: "+nombre +"Apellido: "+edad);
// } else{
//     alert ("Error: campos requeridos")
// }

// if (edad <17) {
//     alert (`Lo siento ${nombre}, pero debes esperar a los 17 o mas para manejar`);
// }
// else if (edad == 17) {
//     alert (`${nombre}, puedes sacar el carnet, pero solo si tus padres aceptan emanciparte `);
// }
// else {
//     alert (`${nombre}, puedes sacar tu carnet de conducir libremente`);
// }

// CLASE 3 
// tabla de multiplicar
let numero = Number (prompt ("Ingrese un numero"))
for (let i = 1 ; i <=10; i++){
    let resultado = numero * i;
    alert (`${resultado}`)
}
