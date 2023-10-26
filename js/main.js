
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
    { id: 9, nombre: "camel", precio: 20000, stock: 3 },
    { id: 10, nombre: "calavera", precio: 18000, stock: 2 },
    { id: 11, nombre: "aguila", precio: 18000, stock: 1 },
    { id: 12, nombre: "gulf", precio: 22000, stock: 2 },
    { id: 13, nombre: "champion", precio: 25000, stock: 2 },
    { id: 14, nombre: "hudson", precio: 25000, stock: 1 },
    { id: 15, nombre: "f1", precio: 25000, stock: 3 },
    { id: 16, nombre: "dakar", precio: 25000, stock: 2 },
]

const recargo = (total, recargo) => total * recargo;
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

    const total = carrito.reduce((acum, producto) => acum + producto.precio, 0);

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
            alert(`Total con recargo: $${recargo(total, 1.30)}`);
            break;
        } else if (metodoDePago === 2) {
            alert(`Total con descuento: $${descuento(total, 0.10)}`);
            break;
        } else {
            alert("Por favor, ingrese 1 o 2 para seleccionar un método de pago válido.");
        }
    }



} else if (eleccion === "BUZOS") {
    alert("Haz elegido la categoria buzos!");
    alert(`Catalogo:\n${buzos.map(producto => `Nombre: ${producto.nombre}, Precio: $${producto.precio}`).join("\n")}`);

    while (true) {

        const añadirBuzo = prompt(`Ingrese el buzo/s que desea \n Escriba FIN para terminar la seleccion`).toLowerCase();

        if (añadirBuzo === "fin") {
            break;
        }

        const buzoSeleccionado = buzos.find(producto => producto.nombre === añadirBuzo);

        if (buzoSeleccionado) {
            if (buzoSeleccionado.stock > 0) {
                carrito.push(buzoSeleccionado);
                buzoSeleccionado.stock--;
                alert(`${buzoSeleccionado.nombre} ha sido añadido al carrito.`);
            } else {
                alert("El producto está agotado. Por favor, seleccione otro.");
            }
        }
    }

    const total = carrito.reduce((acum, producto) => acum + producto.precio, 0);

    if (carrito.length > 0) {
        alert("Carrito de compras:\n" +
            carrito.map(producto => `Nombre: ${producto.nombre}\n Precio: $${producto.precio}\n`).join("\n") + "\n" + `Total: $${total}`);
    } else {
        alert("El carrito de compras está vacío.");
    }
}

