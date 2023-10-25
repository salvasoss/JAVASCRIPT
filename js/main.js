// Idea para entrega 2 JS: 
// vender: 10 remeras y 5 buzos. 
// Crear perfil para iniciar sesion 
// Buscador de productos 
// FIltrador de productos: 1ro por categoria (buzos y remeras), 2ndo por precio. 
// Agregar al carrito 
// Funcion para eliminar un producto del carrito
// Elegir metodo de pago: transferencia= descuento, tarjeta= recargo
// Calculador de costo de envio segun provincia 
// Funcion para sumar el total de los productos en el carrito teniendo en cuenta envio y metodo de pago
// Generar factura por la compra

// while (true) {
//     const eleccion = prompt("Elija un producto por su ID:\n" +
//         productos.map(producto => `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`).join("\n") + "\n" +
//         "Ingrese 'terminar' para finalizar la compra");

//     if (eleccion === "terminar") {
//         break;
//     }

//     const idSeleccionado = parseInt(eleccion, 10);

//     const productoSeleccionado = productos.find(producto => producto.id === idSeleccionado);

//     if (productoSeleccionado) {
//         carrito.push(productoSeleccionado);
//         alert(`${productoSeleccionado.nombre} ha sido añadido al carrito.`);
//     } else {
//         alert("Producto no encontrado. Por favor, ingrese un ID válido.");
//     }
// }

// let total = 0;

// for (const producto of carrito) {
//     total += producto.precio;
// }

// if (carrito.length > 0) {
//     alert("Carrito de compras:\n" +
//         carrito.map(producto => `Nombre: ${producto.nombre}, Precio: $${producto.precio}`).join("\n") + "\n" +
//         `Total: $${total}`);
// } else {
//     alert("El carrito de compras está vacío.");
// }


const remeras = [
    { id: 1, nombre: "camel", precio: 6000, stock: 2 },
    { id: 2, nombre: "calavera", precio: 5500, stock: 1 },
    { id: 3, nombre: "aguila", precio: 5500, stock: 1 },
    { id: 4, nombre: "champion", precio: 7000, stock: 2 },
    { id: 5, nombre: "gulf", precio: 5800, stock: 3 },
    { id: 6, nombre: "hudson", precio: 5000, stock: 2 },
    { id: 7, nombre: "f1", precio: 6000, stock: 1 },
    { id: 8, nombre: "dakar", precio: 8000, stock: 2 },
]

const buzos = [
    { id: 9, nombre: "B.camel", precio: 20000, stock: 3 },
    { id: 10, nombre: "B.calavera", precio: 18000, stock: 2 },
    { id: 11, nombre: "B.aguila", precio: 18000, stock: 1 },
    { id: 12, nombre: "B.gulf", precio: 22000, stock: 2 },
    { id: 13, nombre: "B.champion", precio: 25000, stock: 2 },
    { id: 14, nombre: "B.hudson", precio: 25000, stock: 1 },
    { id: 15, nombre: "B.f1", precio: 25000, stock: 3 },
    { id: 16, nombre: "B.dakar", precio: 25000, stock: 2 },
]

const recargo = (total,recargo) => total * recargo;
const descuento = (total, desc) => total - (total * desc);

const carrito = [];

alert("Bienvenido a Hudson Custom Garage, somos una marca de ropa para los apasionados por el mundo motor. A continuacion, selecciones un o mas productos para añadir a su carrito:")

let eleccion = prompt(" Actualmente contamos con remeras y buzos. Seleccione una categoria").toUpperCase();
while (eleccion !== "REMERAS" && eleccion !== "BUZOS") {
    eleccion = prompt(" Actualmente contamos con remeras y buzos. Seleccione una categoria").toUpperCase();
}

if (eleccion === "REMERAS") {
    alert("Haz elegido la categoria remeras!");

    let numeroFiltrar = Number(prompt("Elija un precio maximo que este dispuesto a pagar (remeras desde 5000 a 8000)"));
    while (numeroFiltrar < 5000) {
        numeroFiltrar = Number(prompt("El precio minimo es de 5000$, porfavor ingrese un valor mayor o igual"));
    }

    const filtradoRemeras = remeras.filter(producto => producto.precio <= numeroFiltrar);

    while (true) {
        const añadirCarrito = prompt("Seleccione el ID de las remeras que desea añadir al CARRITO" + "\n" + filtradoRemeras.map(producto => `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`).join("\n") + "\n" + "Escriba FIN para finalizar la compra").toUpperCase();
        if (añadirCarrito === "FIN") {
            break;
        }

        const idSeleccionado = parseInt(añadirCarrito);

        const productoSeleccionado = filtradoRemeras.find(producto => producto.id === idSeleccionado);

        if (productoSeleccionado) {
            if (productoSeleccionado.stock > 0) {
                carrito.push(productoSeleccionado);
                productoSeleccionado.stock--;
                alert(`${productoSeleccionado.nombre} ha sido añadido al carrito.`);
            } else {
                alert("El producto está agotado. Por favor, seleccione otro.");
            }
        } else {
            alert("Producto no encontrado. Por favor, ingrese un ID válido.");
        }
    }
    let total = 0;

    for (const producto of carrito) {
        total += producto.precio;
    }

    if (carrito.length > 0) {
        alert("Carrito de compras:\n" +
            carrito.map(producto => `Nombre: ${producto.nombre}, Precio: $${producto.precio}`).join("\n") + "\n" +
            `Total: $${total}`);
    } else {
        alert("El carrito de compras está vacío.");
    }

while (true) { 
        let metodoDePago = Number(prompt("Seleccione el número de método de pago que desea:\n 1 - Tarjeta de Crédito \n 2 - Transferencia"));
  
        if (metodoDePago === 1) {
            alert (`Total con recargo: $${recargo (total, 1.30)}`);
            break;
        } else if (metodoDePago === 2) {
            alert (`Total con descuento: $${descuento (total, 0.10)}`);
            break;
        } else {
            alert("Por favor, ingrese 1 o 2 para seleccionar un método de pago válido.");
        }
    }



} else if (eleccion === "BUZOS") {
    alert("Haz elegido la categoria buzos!");
}

