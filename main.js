/* Integrantes taller:
    Nicolás Mendieta
    Geidy Lorena Pontón
    David Mateo Rodríguez
    Victoria Patarroyo
*/

import { PI, IVA, DIAS_SEMANA, DESCUENTO } from "./constantes.js";
import { sumar, restar, multiplicar, areaCirculo, calcularTotal, aplicarImpuestos, aplicarDescuento, aplicarDescuentoPorRol } from "./operaciones-matematicas.js";
import { ROLES } from "./usuarioConstantes.js";
import { crearUsuario } from "./usuarios.js";

let areaCir = 5 * PI;
console.log(`El área del círculo con radio 5 es: ${areaCir}`);

let valorIva = 100 * IVA;
let precioTotal = 100 + valorIva;
console.log(`El precio total del artçiulo con valor 100 es: ${precioTotal}`);

console.log(`El tercer día de la semana es: ${DIAS_SEMANA[2]}`);

console.log("La suma de 34 y 45 es: " + sumar(34, 45));
console.log("La resta de 100 y 85 es: " + restar(100, 85));
console.log("La multiplicación de 23 y 56 es: " + multiplicar(23, 56));
console.log("El área de un círculo con radio 10 es: " + areaCirculo(10));

let totalCompraSinIva = calcularTotal(120, 3) 
console.log("El total de 3 libros que cuestan $120 es: " + totalCompraSinIva);

let totalCompraConIva = aplicarImpuestos(totalCompraSinIva);
console.log("La compra total con IVA es: " + totalCompraConIva);

let totalConDescuento = aplicarDescuento(totalCompraConIva);
console.log("La compra total con DESCUENTO es: " + totalConDescuento);

let usuario1 = new crearUsuario("Pedro", ROLES.ADMIN);
console.log(usuario1);
let usuario2 = new crearUsuario("Carlos", ROLES.CLIENTE);
console.log(usuario2);

let usuario3 = new crearUsuario("Luis", ROLES.ADMIN);
let totalUsuarioSinIva3 = calcularTotal(25, 4);
let totalUsuario3 = aplicarImpuestos(totalUsuarioSinIva3);
let descuentoUsuario3 = aplicarDescuentoPorRol(totalUsuario3, usuario3);
console.log("Luis, el valor a pagar como usuario admin es: " + descuentoUsuario3);

let usuario4 = new crearUsuario("Adriana", ROLES.CLIENTE);
let totalUsuarioSinIva4 = calcularTotal(50, 3);
let totalUsuario4 = aplicarImpuestos(totalUsuarioSinIva4);
let descuentoUsuario4 = aplicarDescuentoPorRol(totalUsuario4, usuario4);
console.log("Adriana, el valor a pagar como usuario clientes es: " + descuentoUsuario4);
