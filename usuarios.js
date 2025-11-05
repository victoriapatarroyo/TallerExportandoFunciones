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
    const f = new Date();
    this.fecha = f.toLocaleDateString();

    this.esAdmin = function() { 
        if (this.rol === "admin") { 
            return true;
        } else { 
            return false;
        } 
    };
}

export function crearUsuario(nombre, rol) {
    let nuevoUsuario = new Usuario(nombre, rol)
    return nuevoUsuario;
}
