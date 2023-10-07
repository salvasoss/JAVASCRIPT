
alert("Bienvenido a Hudson Custom Garage, somos una marca de ropa para los apasionados por el mundo motor")
alert("A continuacion le proporcionamos el catalogo de remeras que ofrecemos: Remera Camel, Remera Calavera y Remera Aguila")
alert(`Precio: 6000$ c/u`)
let remeraElegida = Number(prompt("Porfavor, a continuacion seleccione el NUMERO de la remera que desee:                 1-CAMEL   2-CALAVERA    3-AGUILA"))

while ((remeraElegida < 1 || remeraElegida > 3) || isNaN (remeraElegida)) {
  remeraElegida = Number(prompt("Porfavor, a continuacion seleccione el NUMERO de la remera que desee:                 1-CAMEL   2-CALAVERA    3-AGUILA"));
}
switch (remeraElegida) {
  case 1:
    alert(`Usted a elegido la remera CAMEL`);
    break;

  case 2:
    alert(`Usted a elegido la remera CALAVERA`);
    break;

  case 3:
    alert(`Usted a elegido la remera AGUILA`);
    break;

  default:
    alert("Debes ingresar un valor entre 1 y 3");
    break;
}

let metodoPago = Number(prompt("Seleccione el numero correspondiente al metodo de pago que quiera efectuar: 1-Tarjeta de Credito   2-Efectivo   3-Transferencia Bancaria"))

while ((metodoPago < 1 || metodoPago > 3) || isNaN(metodoPago)) {
  metodoPago = Number(prompt("Seleccione el numero correspondiente al metodo de pago que quiera efectuar: 1-Tarjeta de Credito   2-Efectivo   3-Transferencia Bancaria"));
}

switch (metodoPago) {
  case 1:
    alert("Haz seleccionado Tarjeta de Credito");

    let cuotas = Number(prompt("Seleccione cantidad de cuotas: 1, 3, 6, 12"));

    while (cuotas !== 1 && cuotas !== 3 && cuotas !== 6 && cuotas !== 12 || isNaN (cuotas)) {
      cuotas = Number(prompt("Seleccione cantidad de cuotas: 1, 3, 6, 12"));
    }
    switch (cuotas) {
      case 1:
        alert(`Monto final es de 6000$`);
        break;
      case 3:
        recargo(0.10, 0.20, 0.30)
        alert(` Monton final es de ${resultadoRecargo3}$`);
        break;
      case 6:
        recargo(0.10, 0.20, 0.30);
        alert(` Monton final es de ${resultadoRecargo6}$`);
        break;
      case 12:
        recargo(0.10, 0.20, 0.30);
        alert(` Monton final es de ${resultadoRecargo12}$`);
        break;
      default:
        alert(`Cantidad de cuotas no valida`);
        break;
    }
    break;
  case 2:
    alert(`Haz seleccionado Efectivo, por lo que tienes un 15% de descuento!`);
    alert(`Monton final es de ${6000 - 6000*.15}$`);
    break;
  case 3:
    alert(`Haz seleccionado Transferencia Bancaria, tienes 10% de descuento!`);
    alert(`Monton final es de ${6000 - 6000*.10 }$`);
    break;
}

function recargo(recargo3, recargo6, recargo12) {
  resultadoRecargo3 = recargo3 * 6000 + 6000
  resultadoRecargo6 = recargo6 * 6000 + 6000
  resultadoRecargo12 = recargo12 * 6000 + 6000
}
