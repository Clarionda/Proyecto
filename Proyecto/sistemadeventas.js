/**
 * SISTEMA DE VENTAS
 * Implementación de las clases Producto y Orden,
 * y prueba de su relación de Agregación, basada en el diagrama UML.
 */

// =====================================================================
// 1. CLASE PRODUCTO
// =====================================================================

class Producto {
    // Atributos de clase (estáticos)
    static contadorProductos = 0;

    // Constructor
    constructor(nombre, precio) {
        this.idProducto = ++Producto.contadorProductos;
        this.nombre = nombre;
        this.precio = precio; // number
    }

    // Getters
    getIdProducto() {
        return this.idProducto;
    }

    getNombre() {
        return this.nombre;
    }

    getPrecio() {
        return this.precio;
    }

    // Setters
    setNombre(nombre) {
        this.nombre = nombre;
    }

    setPrecio(precio) {
        this.precio = precio;
    }

    /**
     * Devuelve una representación en cadena (Template Literals).
     */
    toString() {
        return `[Producto: ID=${this.idProducto}, Nombre='${this.nombre}', Precio=$${this.precio.toFixed(2)}]`;
    }
}

// Inicialización
Producto.contadorProductos = 0;


// =====================================================================
// 2. CLASE ORDEN
// =====================================================================

class Orden {
    // Atributos de clase (estáticos)
    static contadorOrdenes = 0;
    static MAX_PRODUCTOS = 5;

    // Constructor
    constructor() {
        this.idOrden = ++Orden.contadorOrdenes;
        this.productos = []; // Relación de Agregación: Colección de objetos Producto
        this.contadorProductosAgregados = 0;
    }

    /**
     * Agrega un objeto Producto a la orden.
     */
    agregarProducto(producto) {
        if (this.productos.length < Orden.MAX_PRODUCTOS) {
            this.productos.push(producto);
            this.contadorProductosAgregados++;
            return true;
        } else {
            console.error(`❌ ERROR: La Orden #${this.idOrden} ha alcanzado el límite máximo de ${Orden.MAX_PRODUCTOS} productos.`);
            return false;
        }
    }

    /**
     * Calcula la suma de los precios de todos los productos en la orden.
     */
    calcularTotal() {
        let total = 0;
        for (const producto of this.productos) {
            total += producto.getPrecio();
        }
        return total;
    }

    /**
     * Muestra la información completa de la orden.
     */
    mostrarOrden() {
        let detalleProductos = '';
        if (this.productos.length === 0) {
            detalleProductos = '  - (Sin productos)';
        } else {
            for (const producto of this.productos) {
                // Llama al toString() de Producto
                detalleProductos += `\n  - ${producto.toString()}`;
            }
        }

        const total = this.calcularTotal();

        console.log(`\n==============================================`);
        console.log(`🛍️ ORDEN #${this.idOrden}`);
        console.log(`Máx. Productos: ${Orden.MAX_PRODUCTOS}`);
        console.log(`Productos Agregados: ${this.contadorProductosAgregados}`);
        console.log(`Detalle de Productos: ${detalleProductos}`);
        console.log(`TOTAL A PAGAR: $${total.toFixed(2)}`);
        console.log(`==============================================`);
    }
}

// Inicialización
Orden.contadorOrdenes = 0;


// =====================================================================
// 3. PRUEBAS DE EJECUCIÓN EN QUOKKA
// =====================================================================

console.log('--- 📋 Prueba de la Clase Producto ---');

// Creación de 6 productos
const productoA = new Producto('Monitor 4K', 350.00);
const productoB = new Producto('Teclado Mecánico', 75.50);
const productoC = new Producto('Mouse Gaming', 25.99);
const productoD = new Producto('Webcam HD', 50.00);
const productoE = new Producto('Laptop Gaming', 1200.50);
const productoF = new Producto('Pad Mouse XL', 15.00);

// Prueba de toString() con Template Literals
console.log(productoE.toString()); // [Producto: ID=5, Nombre='Laptop Gaming', Precio=$1200.50]
console.log(productoC.toString()); // [Producto: ID=3, Nombre='Mouse Gaming', Precio=$25.99]
console.log(`Total de Productos Creados: ${Producto.contadorProductos} productos.`); // 6 productos.

// ---------------------------------------------------------------------

console.log('\n--- 🤝 Pruebas con la Clase Orden y Agregación ---');

// ---------------------------------------------------------------------
// Prueba 1: Orden exitosa
const orden1 = new Orden();
orden1.agregarProducto(productoA);
orden1.agregarProducto(productoB);
orden1.agregarProducto(productoC);

orden1.mostrarOrden();
// TOTAL A PAGAR: $451.49 (350.00 + 75.50 + 25.99)

// ---------------------------------------------------------------------
// Prueba 2: Orden que excede el límite (MAX_PRODUCTOS = 5)
const orden2 = new Orden();
orden2.agregarProducto(productoD);
orden2.agregarProducto(productoE);
orden2.agregarProducto(productoF);
orden2.agregarProducto(productoA);
orden2.agregarProducto(productoB); // Producto #5

// Intento fallido de agregar el 6to producto
orden2.agregarProducto(productoC); // Mostrará el mensaje de ERROR en consola

orden2.mostrarOrden();
// TOTAL A PAGAR: $1691.00 (50.00 + 1200.50 + 15.00 + 350.00 + 75.50)

// ---------------------------------------------------------------------
// Prueba de conteo de órdenes
console.log(`\nTotal de Órdenes Creadas: ${Orden.contadorOrdenes} órdenes.`); // 2 órdenes.