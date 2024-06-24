/* modulo

un modulo es un archivo que contiene un patron de diseño donde se asigna el responsablidades dependido de su funcionalidad

* son codigo de piezas reutilizables que encapsulan detalles de una implementacion
* permite generar codigo en bloques
* son componentes aislados
*/

/*
    import, export  (dependencia)
*/


/* exportar variables y/o constantes */
export const coderName =" Juan Camilo";

export const coderAge = 27;

/* exportar funciones */

export function showInfo (){
    return `El coder ${coderName} tiene ${coderAge} años`
}

export function mayorAge (coderName, coderAge){
    if (coderAge> 18) {
        return `El coder ${coderName} esta contratado`;
    }
    else {
        return `el coder ${coderName} no esta contratado ya que es menor de edad`
    }
}

/* exportar clases - objetos */

export class Coder {
    constructor(coderName, coderAge){
        this.nombre = coderName;
        this.edad = coderAge;
    }
    showInfo(){
        if (this.edad >=18) {
            console.log(`El coder ${this.nombre} cuya edad es ${this.edad}, esta contratado`);
        }
        else{
            console.log(`El coder ${this.nombre} cuya edad es ${this.edad}, no esta contratado por ser menor de edad`);
        }
    }
}

/* exportar por defecto */

/* solo puede existir un export default por modulo */

export default function alias(){
    console.log(`EXPORT DEFAULT`);
}