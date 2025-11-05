/* Integrantes taller:
    Nicolás Mendieta
    Geidy Lorena Pontón
    David Mateo Rodríguez
    Victoria Patarroyo
*/

import { DESCUENTO, PI, IVA } from "./constantes.js";
import { Usuario } from "./usuarios.js";

export function sumar(a, b){
    return a + b;
}

export function restar(a, b){
    return a - b;
}

export function multiplicar(a, b){
    return a * b;
}

export function areaCirculo(radio){
    return radio * PI;
}

export function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

export function aplicarImpuestos(total) {
    return total + (total * IVA);
}

export function aplicarDescuento(total) {
    return total - (total * DESCUENTO);
}

export function aplicarDescuentoPorRol(total, usuario) {
    if(usuario.rol === "admin") {
        return total * 0.8;
    } else {
        return total * (1 - DESCUENTO);
    }
}