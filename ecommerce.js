let carrito = [];

function agregarAlCarrito(precio) {
    carrito.push(precio);
    actualizarCarrito();
}

function actualizarCarrito() {
    const prendaSeleccionada = document.getElementById('prendaSeleccionada');
    const subtotalElement = document.getElementById('subtotal');
    const ivaElement = document.getElementById('iva');
    const totalElement = document.getElementById('total');

    // Obtener la última prenda agregada al carrito
    const ultimaPrenda = carrito[carrito.length - 1];

    // Actualizar la visualización en el carrito
    prendaSeleccionada.innerHTML = `Prenda Seleccionada: $${ultimaPrenda}`;
    
    // Calcular el subtotal, iva y total
    const subtotal = carrito.reduce((acc, precio) => acc + precio, 0);
    const iva = subtotal * 0.21;
    const total = subtotal + iva;

    // Mostrar los resultados en la página
    subtotalElement.textContent = subtotal.toFixed(2);
    ivaElement.textContent = iva.toFixed(2);
    totalElement.textContent = total.toFixed(2);}