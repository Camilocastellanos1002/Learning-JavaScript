
/* LocalStorage - setItem('key', 'value') */

localStorage.setItem('company','riwi');

/* 1. guardar objetos en localStorage */

const coder={
    nombre: "David Velez",
    celular: 3204896537
}

/*1.1 convertir el objeto en un string - JSON.stringify() */

const coderString = JSON.stringify(coder);
console.log(coderString);
console.log(typeof(coderString));
    /* es un string con formato de objeto  */

/*1.2 guardar en localStorage - string en formato de objeto */

localStorage.setItem('coder', coderString);

/*2 guardar un array en localStorage- (un string en forma de array) */

const coders = ["Carolina", "Eider", "Jimmy"];

/*2.1 convertir array a string */

let codersString = JSON.stringify(coders);

/* 2.2 almacenar en localStorage el string en formato de array */

localStorage.setItem('coders', codersString);
console.log(typeof(coders));
console.log(coders);
console.log(typeof(codersString));
console.log(codersString);


/*3. obtener del localStorage */

const company = localStorage.getItem('company');
console.log(company);

/*4. obtener un string con formato de objeto desde el localStorage */

/*4.1 obtener el string en forma de objeto de localStorage */
const myCoder= localStorage.getItem('coder');

/*4.2 convertor en su objeto equivalente */
console.log(JSON.parse(myCoder));

/*5 obtener de localStorage un array */

/*5.1 obtener el string en forma de array */
let myArray = localStorage.getItem('coders');

/*5.2 generar la conversion */
myArray = JSON.parse(myArray);
console.log(myArray);


/*CRUD
C-> create(setItem())
r-> read(getItem())
u-> update (no tiene metodo)
d-> delete (removeItem())
*/

/* actualizar datos de un localStorage */
myArray = JSON.parse(localStorage.getItem('coders'));
myArray.push('vermer');
console.log(myArray);
codersString = JSON.stringify(myArray);
localStorage.setItem('coders', codersString);

/* 6.eliminar elementos*/

localStorage.removeItem('company');
