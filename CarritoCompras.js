// Lista de productos disponibles
const productos = [
    { nombre: 'Camisa', precio: 300 },
    { nombre: 'Pantalón', precio: 500 },
    { nombre: 'Zapatos', precio: 800 },
    { nombre: 'Sombrero', precio: 200 }
];
// Carrito de Compras (arreglo vacio)
let carrito = [];

// Mostrar productos disponibles
function mostrarProductos() {
    let mensaje = "Lista de productos disponibles:\n";
    productos.forEach((producto, index) => {
        mensaje += `${index + 1}.- ${producto.nombre} - $${producto.precio}\n`;
    });
    alert(mensaje);
}

// Agregar producto al carrito
function agregarProducto() {
    // mostrar la lista de productos
    mostrarProductos(); 
    //que quiere comprar
    let opcion = prompt("Ingresa el número del producto que deseas comprar:");
    opcion = parseInt(opcion);

    if (opcion > 0 && opcion <= productos.length) {
        const productoSeleccionado = productos[opcion - 1];
        carrito.push(productoSeleccionado);
        alert(`"${productoSeleccionado.nombre}" se agregó al carrito`);
    } else {
        alert("Opción no válida. Intenta de nuevo.");
    }
}

// Mostrar carrito con precio Total
function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let mensaje = "Tu carrito de compras:\n";
    let total = 0;

    carrito.forEach((producto, index) => {
        mensaje += `${index + 1}.- ${producto.nombre} - $${producto.precio}\n`;
        total += producto.precio;
    });

    mensaje += `\nTotal: $${total}`;
    alert(mensaje);
}

// Menú principal
function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt(`
            Menú de Compras:
            1 - Ver productos y agregar al carrito
            2 - Ver carrito
            3 - Salir
            
            Elige una opción:`);

        switch (opcion) {
            case "1":
                agregarProducto();
                break;
            case "2":
                mostrarCarrito();
                break;
            case "3":
                alert("Gracias por tu compra. ¡Hasta pronto!");
                break;
            default:
                alert("Opción no válida");
        }
    } while (opcion !== "3");
}

// Iniciar programa
mostrarMenu();