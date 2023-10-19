
// alert("Bienvenido a Hudson Custom Garage, somos una marca de ropa para los apasionados por el mundo motor")
// alert("A continuacion le proporcionamos el catalogo de remeras que ofrecemos: Remera Camel, Remera Calavera y Remera Aguila")
// alert(`Precio: 6000$ c/u`)
// let remeraElegida = Number(prompt("Porfavor, a continuacion seleccione el NUMERO de la remera que desee:                 1-CAMEL   2-CALAVERA    3-AGUILA"))

// while ((remeraElegida < 1 || remeraElegida > 3) || isNaN (remeraElegida)) {
//   remeraElegida = Number(prompt("Porfavor, a continuacion seleccione el NUMERO de la remera que desee:                 1-CAMEL   2-CALAVERA    3-AGUILA"));
// }
// switch (remeraElegida) {
//   case 1:
//     alert(`Usted a elegido la remera CAMEL`);
//     break;

//   case 2:
//     alert(`Usted a elegido la remera CALAVERA`);
//     break;

//   case 3:
//     alert(`Usted a elegido la remera AGUILA`);
//     break;

//   default:
//     alert("Debes ingresar un valor entre 1 y 3");
//     break;
// }

// let metodoPago = Number(prompt("Seleccione el numero correspondiente al metodo de pago que quiera efectuar: 1-Tarjeta de Credito   2-Efectivo   3-Transferencia Bancaria"))

// while ((metodoPago < 1 || metodoPago > 3) || isNaN(metodoPago)) {
//   metodoPago = Number(prompt("Seleccione el numero correspondiente al metodo de pago que quiera efectuar: 1-Tarjeta de Credito   2-Efectivo   3-Transferencia Bancaria"));
// }

// switch (metodoPago) {
//   case 1:
//     alert("Haz seleccionado Tarjeta de Credito");

//     let cuotas = Number(prompt("Seleccione cantidad de cuotas: 1, 3, 6, 12"));

//     while (cuotas !== 1 && cuotas !== 3 && cuotas !== 6 && cuotas !== 12 || isNaN (cuotas)) {
//       cuotas = Number(prompt("Seleccione cantidad de cuotas: 1, 3, 6, 12"));
//     }
//     switch (cuotas) {
//       case 1:
//         alert(`Monto final es de 6000$`);
//         break;
//       case 3:
//         recargo(0.10, 0.20, 0.30)
//         alert(` Monton final es de ${resultadoRecargo3}$`);
//         break;
//       case 6:
//         recargo(0.10, 0.20, 0.30);
//         alert(` Monton final es de ${resultadoRecargo6}$`);
//         break;
//       case 12:
//         recargo(0.10, 0.20, 0.30);
//         alert(` Monton final es de ${resultadoRecargo12}$`);
//         break;
//       default:
//         alert(`Cantidad de cuotas no valida`);
//         break;
//     }
//     break;
//   case 2:
//     alert(`Haz seleccionado Efectivo, por lo que tienes un 15% de descuento!`);
//     alert(`Monton final es de ${6000 - 6000*.15}$`);
//     break;
//   case 3:
//     alert(`Haz seleccionado Transferencia Bancaria, tienes 10% de descuento!`);
//     alert(`Monton final es de ${6000 - 6000*.10 }$`);
//     break;
// }

// function recargo(recargo3, recargo6, recargo12) {
//   resultadoRecargo3 = recargo3 * 6000 + 6000
//   resultadoRecargo6 = recargo6 * 6000 + 6000
//   resultadoRecargo12 = recargo12 * 6000 + 6000
// }


// clase 6 arrays 

// class Remeras {
//   constructor (nombre, precio, cantidad){
//     this.nombre =nombre; 
//     this.precio = precio;
//     this.cantidad = cantidad;
//   }
//     vender () {
//       if (this.cantidad > 0) {
//         this.cantidad--;
//         console.log (`Vendida una remera ${this.nombre}. Stock restante: ${this.cantidad}`)
//       }
     
//       if (this.cantidad <= 0){
//         console.log (`sin stock de remera ${this.nombre}`);
//       }
//   }
// }
// const remera = []; 

// remera.push (new Remeras ("CAMEL", 6000, 5));

// remera.push (new Remeras ("CALAVERA", 5500, 3));

// remera.push (new Remeras ("AGUILA", 5500, 4));


// remera[0].vender();
// remera[1].vender();
// remera[2].vender();

// remera[0].vender();
// remera[1].vender();
// remera[2].vender();

// remera[0].vender();
// remera[1].vender();
// remera[2].vender();

// remera[0].vender();
// remera[1].vender();
// remera[2].vender();

// remera[0].vender();
// remera[1].vender();
// remera[2].vender();
// console.log (Remeras);

// clase 7_: FUNCIONES DE ALTO ORDEN Y METODOS DE BUSQUEDA Y TRANSFORMACION 

 
  // const productos = [
  //   { id: 1, nombre: "CAMEL", precio: 6000 },
  //   { id: 2, nombre: "CALAVERA", precio: 5500 },
  //   { id: 3, nombre: "AGUILA", precio: 5500 },
  // ]

 // FOREACH: recorre el arreglo 

  // productos.forEach (item => {
  //   console.log(item.nombre);
  //   console.log(item.precio);
  // })

// FIND: busca el primer elemento que cumpla la condicion 
//  const encontrado = productos.find ((item) => item.nombre === "CAMEL");
//  console.log(encontrado);

// let buscarNombre = prompt ("Ingrese el nombre del producto");

// const encontrado = productos.find ((item) => item.nombre === buscarNombre);
// if (encontrado) {
//   alert (`
//   ID: ${encontrado.id}
//   NOMBRE: ${encontrado.nombre}
//   PRECIO: ${encontrado.precio}
//   `)
// }
//   else {
//     alert ("Producto no encontrado");
//   }

// FILTER: filtra todos los elementos que cumplan con la condicion dada 
// filtrador de los precios menores al ingresado en prompt
// let precio = Number (prompt("Ingrese un precio minimo")); 

// let filtrar = productos.filter ( (item) => item.precio > precio); 

// filtrar.forEach ((item) => {
//   alert ( `
//   id: ${item.id}
//   nombre: ${item.nombre}
//   precio: ${item.precio}
//   `);
// });

// MAP: modifica o transforma los elementos del arreglo 

// const recargo = productos.map ((item) => {
//   return {
//     id: item.id, 
//     nombre: item.nombre, 
//     precio: item.precio + item.precio * 0.10,
//   };
// });

// console.log (recargo);

// REDUCE: reduce un arreglo a un solo valor
// const carrito = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 390 },
//   { id: 3, nombre: "pantalon", precio: 200 },
//   { id: 4, nombre: "media", precio: 150 },
// ];

// const total = carrito.reduce((acum, item) => acum + item.precio, 0);
// console.log(total);

// SORT: ordena segun condicion 

// const items = [
//   { name: "Pikachu", price: 21 },
//   { name: "Charmander", price: 37 },
//   { name: "Pidgey", price: 45 },
//   { name: "Squirtle", price: 60 },
// ];

// console.log(
//   items.sort((a, b) => {
//     if (a.name > b.name) {
//       return 1;
//     }
//     if (a.name < b.name) {
//       return -1;
//     }
//     // a es igual a b
//     return 0;
//   })
// );
// CLASE 7: HIGH ORDER FUNCTIONS: MATH Y DATE
// GENERADOR NUMEROS ALEATORIOS

// const generadorNumero = () => {
//   return Math.round (Math.random() * 50 + 50);
// }

// console.log(generadorNumero ());

// console.log(Math.round (Math.random() * 84 + 18));

// NOMBRES ALEATORIOS

// const nombres = [ "Pepito", "Juan", "Franco", "Salvador", "Agus"]; 

// const nombreAleatorio = () => {
//   let index = Math.floor (Math.random() * nombres.length);
//   return nombres [index];
// }

// console.log(nombreAleatorio ());

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 700 },
  { id: 3, nombre: "media", precio: 300 },
  { id: 4, nombre: "zapato", precio: 100 },
];

let precio = Number(prompt("Ingrese el precio mínimo"));

let filtrados = productos.filter((item) => item.precio > precio);

filtrados.forEach((producto) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2 class="rojo">Id: ${producto.id}</h2>
    <p class="verde">Nombre: ${producto.nombre}</p>
    <b class="azul">$${producto.precio}</b>
    <hr />
  `;

  document.body.append(div);
});