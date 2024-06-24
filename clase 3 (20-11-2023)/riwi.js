//los datos de salida los envia a la consola
console.log("developers from riwi are going to sign up very soon today");


//1. Variables  ***** no comenzar con numeros
valor =20;
console.log(valor);

//1.1. Definicion de variables sin usar var, let, const

coder = "Camilo";
console.log(coder);
//1.2. Estilo de nombres de variables Js :using camel case 
sueldoEmpleado=2000;
console.log(sueldoEmpleado);

//1.3. Definicion de Variables using VAR /* 
/* podemos reasignar variables usando VAR podemos crear variable sin asignar valor con VAR */
/* 
------------------------------------------------------------------------------------------------ */
var developer;
console.log(developer);
developer = "Andres"
//forma de generar un error, var permite declarar una variable 2 veces
var developer = "Felipe"
console.log(developer);


//2. Definicion de variables usando LET
/* ------------------------------------------------------------------------------------------------ */
/* podemos reasignar variables usando let 
   podemos crear variable sin asignar valor con let
*/
let curso;
console.log(curso);
//let no permite declarar una variable 2 veces, pero si permite reasignar valores
//let curso;
curso = "NodeJs";
console.log(curso);

//const
const student = "Luisa";
//const no permite reasignamiento de valores a una variable, genera error en la consola
//  student="Liliana";
console.log(student)

//3. Data Types
/* typeof() */
//3.1 Number

let saldo = 10;
console.log(typeof(saldo)); //muestra el tipo de dato de la variable ingresada

saldo = "diez"
console.log(typeof(saldo)); //forma de reasignar


saldo = true
console.log(typeof(saldo));

//3.2 String Definition
//3.2.1 String - Definicion simple
let cancion ="la plata";
console.log(typeof(cancion));

//3.2.2 String - Definicion using String(' ')
let direccion = String('Calle 16 #20-30 de moda')
console.log(typeof(direccion));
console.log(direccion);

//3.2.3 String - definition using new String(' ')
let computador = new String('Vaio')
console.log(computador);

//---------------3.3  Some string methods---------------
//3.3.0 length /* es un atributo, no es nesesario () */
console.log(computador.length);

//3.3.1 indexOf()
console.log(computador.indexOf('i'));
/*Metodo vs Funcion
  es lo mismo, 
  la diferencia es que se llaman metodos a las funciones dentro de una clase

*/
//3.3.2 includes()
console.log(direccion.includes('Moda'));  //Javascript es sensible al camelCase

//3.3.3 Concatenar Cadenas (Strings)
let cadena1 = "Riwi is the best training center in the world";
let cadena2 = " and their coders are amazing people ";

console.log(cadena1.concat(cadena2).concat("but alejo is good too"));
//3.3.3.1  concatenar string - using concat
let cadena3 = cadena1.concat(cadena2.concat("but alejo is good too"));

console.log(cadena3);
//3.3.3.2 concatenar string - using + 
console.log(cadena1+cadena2);

//3.3.3.3 concatenar string using back ticks  o templatre strings ``
console.log(`Esta es la direccion de Riwi ${direccion}
y colombia es una maravilla`);

//3.3.4 quitando espacios en blanco en String- trimStart().trimEnd()
let password = "    castellanos     ";
console.log(password);
console.log(password.trimStart().trimEnd());

//3.3.5 replacing - reemplazando en String*/
console.log(cadena1.replace('world','Universe'));

//3.3.6 slice  -  cortando de un String
console.log(cadena1.slice(0,4));
//3.3.7  substring  - subcadena de un String
console.log(cadena1.substring(7,0));
//3.3.8 repeat() repitiendo un String 
console.log(cadena1.repeat(3));
//3.3.9 split - Dividir un String 
console.log(cadena2.split(' '));
daysWeek="Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";
console.log(daysWeek);
console.log(daysWeek.split(', '));

//3.3.10 Mayusculas y minusculas - ToUpperCase - ToLowerCase 
let lastName= "Chaparro Castellanos";
console.log(lastName.toUpperCase());
console.log(lastName.toLowerCase());

/* const password1 = "Admin"
const password2 = "admin"
console.log(password1 === password2);  */



                    /* ----------------------EJERCICIOS--------------------------- */
//3.4 Boolean 

/* Definicion de Variables using CONST*/
/* ------------------------------------------------------------------------------------------------ */
/* ------> no podemos reasignar valores   YY   las constantes deben tener un valor
*/

/* const can't re-asing */

//3.5 undefined 


//3.6 BigInt 
const numeroGrande = 22344534436463454545464354543565654n;
console.log(typeof(numeroGrande));


//3.7 objeto 
const objetoRiwi = {
  nombre : "castellanos",
  edad: 27,
  esGanador : true,
  salario : 1000000
};

console.log(objetoRiwi);


//4.  Operadores
/* -------------------------------------------------------------------------------------- */


//4.1 Operadores numericos 
let a = 3;
let b= 2;
let rto;
//suma
rto =a+b;
console.log(`el resultado de la suma es: ${rto}`);
//resta
rto = a-b;
console.log(`el resultado de la resta es: ${rto}`);
//multiplicacion
rto = a*b;
console.log(`el resultado de la multiplicacion es: ${rto}`);
//division
rto = a/b;
console.log(`el resultado de la divion es: ${rto}`);
//division modular
rto = a%b;
console.log(`el residuo de la division es: ${rto}`);

//potenciacion
rto = a**b;
console.log(`el resultado de la divion es: ${rto}`);


//OPERADORES DE ASIGNACION
//Incremento

//Pre-incremento (el operador ++ antes de la variable)

rto =++a;
console.log(a);
console.log(rto);

//Post-incremento (el operador ++ despues de la variable)

rto =b++;
console.log(b);
console.log(rto);



//Decremento
//Predecremento (el operador -- antes de la variable)

rto =--a;
console.log(a);
console.log(rto);

//Postdecremento  (el operador -- despues de la variable)

rto =b--;
console.log(b);
console.log(rto);

//Precedencia
/* -------------------------------------------------------------------------------------------- */
let c = 8;
let d = 4;
rto = a *b + c /d;
console.log(rto);
//4.2 operadores de asignacion  =   +=   -=
/* ----------------------------------------------------------------------------------- */
let x = 0;
x = x+3;
console.log(x);

x+=3;
console.log(x);
/*
*=
/=
%=
**=
*/

let m=5;
console.log(m);
console.log(m*=5);
console.log(m/=3);
console.log(m%=4);
console.log(m**=3);


//4.3 Operadores de comparacion 
//4.3.1 - Igual A
// == se revisa el valor sin importar el tipo
// === revisa los valores pero tambien los tipos
/* ----------------------------------------------------------------------------------------- */
let i =10;
let j="10";

rto = i ==j;
console.log(rto);

rto = i ===j;
console.log(rto);


/* Operadores de comparacion - 
//4.3.2 Diferente A
/* != se revisa el valor sin importar el tipo 
/* !== revisa los valores pero tambien los tipos 
/* ------------------------------------------------------------------------------------------- */
rto = i !=j;
console.log(rto);

rto = i !==j;
console.log(rto);


//4.4 Ejercicio operadores 
//4.5 Conviertiendo tipos de datos  parseInt()
console.log(i == parseInt(j));
console.log(typeof(j));
let l = parseInt(j);
console.log(typeof(l));

//4.6 comparando null con undefined 
let y;
let z = null;
console.log(y);
console.log(z);
console.log(typeof(y));
console.log(typeof(z));
console.log(y == z );
console.log(y === z );

/* 5. SENTENCIAS DE CONTROL */
/* ------------------------------------------------------------------------------------ */

/* 5.1 IF - EJERCICIO - si numero igual a 2 imprimir "numero dos" etc. */

// 5.2 CASE 

// 5.3 CICLOS 
//5.3.1 WHILE 

//5.3.2 DO WHILE

//5.3.3 FOR

//5.3.4 BREAK

//5.3.5 CONTINUE

/* 5.4 LABELS - ETIQUETAS */

                    /* ----------------------EJERCICIOS--------------------------- */


/* --------6 OBJETOS--------- */
/* --------------------------------------------------------------------------------------- */

/*Objetos en JS*/

/*Variables*/

/*6.1. Objetos literales*/

/*6.2. Acceso a valores del objeto*/

/*6.2.1 sintaxis de punto*/

/*6.2.2 agregar propiedades del objeto*/

/*6.2.3 eliminar propiedades del objeto*/

/*6.3. Asignar valores de propiedad de objeto a variable - Object Destructuring*/

/*6.4. Objetos dentro de objetos*/

/*6.5. Destructuring de objetos anidados*/

/*6.6.metodos objetos*/

/*6.6.1 congelar  .freeze*/

/* console.log((centroComercial.gerente = "Don Tu")); */



//7.  this 

//8. Objeto Constructor

/*9.--------ARRAYS--------- */
/* -------------------------------------------------------------------------------------- */

/* 9.  Recordando objetos */
  
  // 9.1  Creando arreglo
  
  //9.2 acceder a los elementos del arreglo
  
  //9.3 recorrer un array
  
  //9.4  agregar nuevos valores al final de un array 
  
  //9.5 agregar elemento al final sin conocer longitud del arreglo - Push

  //9.6 Agregando objetos a un arreglo
  
  //9.7 Eliminar ultimo elemento del arreglo - pop()
  
  //9.8 Eliminar primer elemento del arreglo - shift()

  /* carrito.shift();
  console.log(carrito); */
  
  //9.9 eliminar cualquier elemento/splice
  
  //10.  DESTRUCTURING - ARRAYS ...
  
  //11.  Iterar un array con objetos como elementos
  
  //11.1 Iterar con FOR  
  
  //11.2 Iterar con ForEach 
 
  //11.3 Iterar con Map  
  
  //12. FUNCIONES */
  /* ------------------------------------------------------------------------------------------------- */
  
  /* 12.1 Function Declaration */
  
  /* 12.2 Function Expression */
  
  /* 12.3 comunicacion entre funciones */
  
  /* 12.4 Agregar funciones a objetos - metodos de propiedad */
  
  /* 12.5 Arrow functions */
  
  /* const verTvs = () => {
    console.log(`la tvs se mira en las tardes`);
  }; */
  
  /* const verTvs = () => console.log(`la tvs se mira en las tardes`);
  verTvs();
   */
  
  /* de una sola linea */
  
  // parametros en arrow functions
  



