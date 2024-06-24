/* importar variables y/o constantes */

import alias, { coderName, coderAge, showInfo, mayorAge, Coder} from "./index.js";
console.log(coderName);
console.log(coderAge);

/* importar funciones */
console.log(showInfo());

console.log(mayorAge('Cristian',17));

/* importar y/o instanciar objetos, clases */
const coder = new Coder ('Luisa Fernanda',32);
console.log(coder);
console.log(mayorAge(coder.nombre, coder.edad));

coder.showInfo();
new Coder('Carlos',45).showInfo();


import { CoderMedellin } from "./script2.js";

const nuevoCoder = new CoderMedellin('Juan Camilo Chaparro Castellanos', 27, 'Front End');
console.log(nuevoCoder); 

/* importar por defecto */
alias();
    /* Al ser llamadas, se pueden llamar con otro nombre, el
    codigo detecta que es el unico Export Dafault */
    //ejm aliasito();