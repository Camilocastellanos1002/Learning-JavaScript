//los datos de salida los envia a la consola
console.log("developers from riwi are going to sign up very soon today");


//1. Variables  ***** no comenzar con numeros
valor =20;
console.log(valor);

//1.1. Definicion de variables sin usar var, let, const

coder1 = "Camilo";
console.log(coder1);
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
let condition = true;
/*
if (condition === true){
  console.log(condition);
  console.log("Fin del Programa");
}else{
  console.log("No se cumplio el programa");
}

let numero= parseInt(prompt("Ingrese numero: "))
if (numero === 1){
  console.log("numero uno");
}else if (numero ===2){
  console.log("numero dos");
}else if (numero ===3){
  console.log("numero tres");
}else if (numero ===4){
  console.log("numero cuatro");
}else if (numero ===5){
  console.log("numero cinco");
}else if (numero ===6){
  console.log("numero seis");
}else if (numero ===7){
  console.log("numero siete");
}else if (numero ===8){
  console.log("numero ocho");
}else{
  console.log("es otro numero");
}

// 5.2 CASE 
let numberCase;
numberCase = Number(prompt("Ingrese un numero del caso: "))
let numberText = "Opcion no valida";

switch (numberCase) {
  case 1:
    numberText = "numero uno";
    break;
  case 2:
    numberText = "numero dos";
    break;
  case 3:
    numberText = "numero tres";
    break;
  case 4:
    numberText = "numero cuatro";
    break;
  case 5:
    numberText = "numero cinco";
    break;
  case 6:
    numberText = "numero seis";
    break;
  default:
    numberText;
    break;
}
console.log(numberText);

let mesAño=prompt("Ingrese el mes de cumpleaños: ")
switch (mesAño) {
  case "enero":
    console.log("cumples en enero");
    break;
  case "febrero":
    console.log("cumples en feb");
  break;
  case "marzo":
    console.log("cumples en mar");
    break;
  case "abril":
    console.log("cumples en abril");
    break;
  case "mayo":
    console.log("cumples en may");
    break;
  case "junio":
    console.log("cumples en jun");
    break;
  case "julio":
    console.log("cumples en jul");
  break;
  case "agosto":
    console.log("cumples en agost");
    break;
  case "septiembre":
    console.log("cumples en sept");
    break;
  case "octubre":
    console.log("cumples en oct");
    break;
  case "noviembre":
    console.log("cumples en nov");
    break;
  case "diciembre":
    console.log("cumples en dic");
    break;
  case "enero":
    console.log("cumples en enero");
    break;
  default:
    console.log("ingresaste mes erroneo");
    break;
}

// 5.3 CICLOS 
//5.3.1 WHILE 
let contador = 0;
while (contador<4) {
  console.log(contador);
  contador++;
}
console.log("fin del while");

//5.3.2 DO WHILE
let contadorDoWhile=0;
do {
  console.log(contadorDoWhile);
  contadorDoWhile++;
} while (contadorDoWhile<7);
console.log("fin del ciclo del do while");
//5.3.3 FOR
for (let cont = 0; cont < 10; cont++){
  console.log(cont);
}
*/
/* 5.4 LABELS - ETIQUETAS */

                    /* ----------------------EJERCICIOS--------------------------- */


/* --------6 OBJETOS--------- */
/* --------------------------------------------------------------------------------------- */
/*Objetos en JS*/

/*Variables*/
// const factura = "pascual";

/*6.1. Objetos literales*/
const veterinaria ={
  mascota: "pascual",
  cliente: "camilo",
  factura: 200000,
  servicio: "peluqueria",
  estado: "muerto"
}

const departamento = {
  nombre : "antioquia",
  capital : "medellin",
  avenidas: {
    av1: "las vegas",
    av2: "la oriental",
    av3: "la regional",
    av3: "las palmas"
  },
  centroComerciales: {
    nombreCCUno: "Viva Envigado",
    direccion: "Av las vegas #33",
    pisos:{
      s1:{
        parqueadero : {
          plazas: 150,
          desde : 1,
          hasta :8,
        }
      },
      p1:{
        zonas: {
          juegos:{
            mecanicos:{
              nombre: "Futbol",
            }
          }
        }
      }
    },
    nombreCCDos:{
      nombreCCDos: "Santa fe",
      direccion: "Av el poblado #25",
    }
  }
}
/*6.2. Acceso a valores del objeto*/
/*6.2.1 sintaxis de punto*/
console.log(departamento.centroComerciales.pisos.p1.zonas.juegos.mecanicos.nombre);
/*6.2.2 agregar propiedades del objeto*/
veterinaria.foto = "veterinaria.jpg";
console.log(veterinaria);
/*6.2.3 eliminar propiedades del objeto*/
delete veterinaria.estado
console.log(veterinaria);

/*6.3. Asignar valores de propiedad de objeto a variable - Object Destructuring*/
const {factura, servicio, cliente} = veterinaria;
console.log(factura, servicio, cliente);

/*6.4. Objetos dentro de objetos*/

/*6.5. Destructuring de objetos anidados*/
const {centroComerciales: {pisos : {p1 : {zonas : {juegos : {mecanicos: {nombre}}}}}}} = departamento;
console.log(nombre);

const {centroComerciales: {nombreCCDos : {nombreCCDos}}} = departamento;
console.log(nombreCCDos);

/*6.6.metodos objetos*/

//object.key()

const coder ={
  nombre: "Camilo",
  edad : 27,
  estadoCivil : "soltero",
  persona: "novia",
  nombreNovia: "Luisa"
}
console.log(Object.keys(coder));


const trainer ={
  nombre1 : "vermen",
  sueldo : 1000000,
  estadoCivil : "felizmente casado"
}
console.log(Object.values(trainer));
/*6.6.1 congelar  .freeze*/

/* console.log((centroComercial.gerente = "Don Tu")); */

//Object.entries(Objet)
const seleccionFutbol ={
  equipo : "Colombia",
  goles: 4,
  triunfos : "Invicto",
  goleador : "Falcao"
}
console.log(Object.entries(seleccionFutbol));


//clonar objeto
const copia = {...coder, ...trainer};
console.log(copia);

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
  



