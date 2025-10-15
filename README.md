🛍️ Sistema de Ventas - JavaScript
Este proyecto implementa un sistema básico de ventas en JavaScript utilizando Programación Orientada a Objetos (POO) y el concepto de Agregación entre clases.

📋 Descripción
El sistema permite gestionar productos y órdenes de compra, donde cada orden puede contener múltiples productos hasta un límite definido.

🏗️ Estructura del Proyecto
Clases Implementadas
1. Clase Producto
Gestiona la información de productos individuales

Atributos:

idProducto (auto-incremental)

nombre (string)

precio (number)

Métodos principales:

Getters y setters

toString() - Representación en cadena del producto

2. Clase Orden
Gestiona órdenes de compra que contienen productos

Atributos:

idOrden (auto-incremental)

productos (array de objetos Producto)

contadorProductosAgregados

Métodos principales:

agregarProducto(producto) - Añade productos hasta el límite máximo

calcularTotal() - Calcula el total de la orden

mostrarOrden() - Muestra el detalle completo de la orden

🔗 Relación de Agregación
El sistema implementa una relación de agregación donde:

Una Orden está compuesta por Productos

Los productos existen independientemente de las órdenes

Las órdenes contienen referencias a productos existentes

⚙️ Configuración
Constantes Importantes
MAX_PRODUCTOS = 5 - Límite máximo de productos por orden

Contadores automáticos para productos y órdenes

🚀 Uso del Sistema
Crear Productos
javascript
const producto1 = new Producto('Monitor 4K', 350.00);
const producto2 = new Producto('Teclado Mecánico', 75.50);
Crear y Gestionar Órdenes
javascript
const orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();
📊 Funcionalidades
✅ Creación automática de IDs para productos y órdenes

✅ Validación de límite máximo de productos por orden

✅ Cálculo automático del total de la orden

✅ Representación legible de productos y órdenes

✅ Manejo de errores al exceder límites

🧪 Pruebas Incluidas
El archivo incluye pruebas que demuestran:

Creación de múltiples productos

Órdenes exitosas dentro del límite

Manejo de órdenes que exceden el límite máximo

Conteo automático de productos y órdenes

📝 Ejemplo de Salida
text
🛍️ ORDEN #1
Máx. Productos: 5
Productos Agregados: 3
Detalle de Productos:
  - [Producto: ID=1, Nombre='Monitor 4K', Precio=$350.00]
  - [Producto: ID=2, Nombre='Teclado Mecánico', Precio=$75.50]
  - [Producto: ID=3, Nombre='Mouse Gaming', Precio=$25.99]
TOTAL A PAGAR: $451.49
🛠️ Tecnologías
JavaScript ES6+

Programación Orientada a Objetos

Template Literals

Métodos estáticos

📁 Archivos
sistemadeventas.js - Código fuente completo con pruebas