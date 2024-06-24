//1

let num1=20;
let num2=50;
console.log(num1+num2);

num1= 548;
num2= 200;
console.log(num1+num2);

//2
let simpleString1 = "Hola";
let simpleString2 = "Mundo";
let len= simpleString1 + simpleString2;
console.log(len.length);

//3
let strinUsingString1 = String("JavaScript");
let strinUsingString2 = String("Ejercicios");

//4
let strinUsingNewString1 = new String("Concatenar");
let strinUsingNewString2 = new String("Strings");

//5
console.log(simpleString1.indexOf('la'));

//6
console.log(simpleString2.includes('ndo'));

//7
console.log(simpleString1.concat(simpleString2));

//8
console.log(simpleString1+simpleString2);

//9
console.log(`${simpleString1} ${simpleString2}`);

//10
let stringWithSpace1 = " TrimStart";
let stringWithSpace2 = "TrimEnd ";
console.log(stringWithSpace1);
console.log(stringWithSpace2);

console.log(stringWithSpace1.trimStart());
console.log(stringWithSpace2.trimEnd());

//11
console.log(simpleString1.replace('o','i'));

//12
console.log(simpleString2.slice(0,3));

//13
console.log(simpleString2.substring(2));

//14
console.log(simpleString1.repeat(2));

//15
let cadena= "Esto es una oracion de ejemplo" ;
console.log(cadena.split(' '));

//16
console.log(simpleString2.toUpperCase());

//17
console.log(simpleString1.toLowerCase());

//18
let myBool = false;
console.log(typeof(myBool));

//19
let arreglo = ['Camilo', 27, true, 1.70, 'O+']
console.log(arreglo.length);
console.log(typeof(arreglo));


//21
let nulo = null;
console.log(typeof(nulo));

//22
let indefinido
console.log(typeof(indefinido));

//23
let decimal = 2.9877;
console.log(typeof(decimal));

//24
let negativo = -10;
console.log(typeof(negativo));

//25
let cadena1 = "Casa";
console.log(cadena1.indexOf('a'));

//26
console.log(strinUsingNewString1.includes("String"));

//27
console.log(simpleString1.concat(simpleString2));

//28
console.log(simpleString1+simpleString2);

//29
console.log(`${simpleString1} ${simpleString2}`);

//30
let cadenaConEspacios = " Ejemplo con espacios ";
console.log(cadenaConEspacios);
console.log(cadenaConEspacios.trimStart().trimEnd());

//31
let cadena2 = "el cielo es azul";
console.log(cadena2);
console.log(cadena2.replace('azul','rojo'));

//32
let cadena3 = "Programacion";
console.log(cadena3.slice(-4,));

//33
console.log(strinUsingString1.substring(2,));

//33.1
console.log(simpleString1.repeat(3));

//34
console.log(cadena.split(' '));

//35
console.log(strinUsingString1.toUpperCase());

//36
let cadena4 = "EJEMPLO";
console.log(cadena4.toLowerCase());

//37
let numero = 110;
console.log(typeof(numero));

//38
let booleana = true;
console.log(typeof(booleana));

//39
let arreglo2 = ['Camilo', 'Bienvenido', 2023]
console.log(arreglo2.length);
console.log(typeof(arreglo2));

//41
let nulo2 = null;
console.log(typeof(nulo2));

//42
let indefinido1
console.log(typeof(indefinido1));

//43
let decimalPI = 3.1416;
console.log(typeof(decimalPI));
