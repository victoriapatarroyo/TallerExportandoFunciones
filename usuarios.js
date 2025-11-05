/* Integrantes taller:
    Nicolás Mendieta
    Geidy Lorena Pontón
    David Mateo Rodríguez
    Victoria Patarroyo
*/

import { ROLES } from "./usuarioConstantes.js";

export function Usuario(nombre, rol){
    this.nombre = nombre;
    this.rol = rol;
}

export function crearUsuario(nombre, rol) {
    return {
        nombre: nombre,
        rol: rol,
        fechaRegistro : new Date().toLocaleDateString()
    };
}
