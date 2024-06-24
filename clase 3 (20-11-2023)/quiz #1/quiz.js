//1

const continente = prompt("Ingrese el continenete donde vive:")
const pais = prompt("Ingrese el pais donde vive:")
const departamento =prompt("Ingrese el departamento donde vive: ");
const cuidad = prompt("Ingrese la cuidad donde vive: ");
let barrio = prompt("ingrese su barrio: ");
let cantidadHabitantes = 51.609*(10**6);


//2

let esTercerMundista = true;
let idioma;


//3
idioma = prompt("Ingrese el idioma donde vive: ")

// todas las variables al ser enunciadas a una persona, si se pregunta a otra todas puede variar
// al ser declaradas en la parte superior y volverlas a declarar como constantes genera error, ya que solo se puede declarar una vez

console.log(`continente: ${continente},
pais: ${pais},
departamento: ${departamento},
cuidad: ${cuidad}
idioma: ${idioma}
cantidad de habitantes de ${pais}: ${cantidadHabitantes}`);


//4
//a
let cantidadPorMitad= cantidadHabitantes/2;

console.log(`cada mitad del pais tendria: ${cantidadPorMitad} habitantes`);

//b
cantidadHabitantes = 1*10**6;
console.log(`nueva cantidad de habitantes en ${pais}: ${cantidadHabitantes}`);
const habitantesFilandia = 6*(10**6);
//c
console.log(`habitantes en filandia: ${habitantesFilandia}`);
if (cantidadHabitantes > habitantesFilandia) console.log(` ${pais} tiene mas habitantes que Filandia`); else console.log(`${pais} tiene mebis habitantes que Filandia`);
//
console.log(`poblacion promedio de un pais es de: ${33*10**6}`);
if (cantidadHabitantes < 33*10**6) console.log(`${pais} tiene menos gente que un pais promedio`); else console.log(`${pais} tiene mas gente que un pais promedio`);

//e

let cadena = pais.concat(` esta en ${continente}, y ${cuidad} que esta en el departamento de ${departamento} tiene un barrio llamado ${barrio} y sus 3000 personas hablan ${idioma}`)

console.log(cadena);

//5

let pronoun = "you";
let verb = "love";
let car = "kia";
let color = "blue";
let task = "travel";
let vacant = "developer";
let country = "america";
let singer = "jay-z";
let music = "rap";
let week = "working";

console.log(pronoun.length);
console.log(verb.includes('ndo'));
console.log(`${car}`);
console.log(color.trimStart());
console.log(task.trimEnd());
console.log(vacant.replace('bartender'));
console.log(country.slice(3,));
console.log(singer.split('-'));
console.log(music.toUpperCase());
console.log(week.toLowerCase());
