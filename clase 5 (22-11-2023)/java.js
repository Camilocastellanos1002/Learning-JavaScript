//1

const anio=2000;
const anio1 = new Number (2023);
console.log(Number.MAX_VALUE);
console.log(typeof(anio));
console.log(typeof(anio1));
console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.isFinite(2/0));
console.log(Number.isInteger(anio));
console.log(Math.PI);
console.log(Number.isSafeInteger(85485151561651*6515616515));
console.log(anio1.toExponential(3));

let decimal = 1.54442;
console.log(decimal);
let dec = decimal.toFixed(3);
console.log(dec);
console.log(decimal.toFixed(2));
console.log(typeof(dec));
console.log(decimal.toPrecision(3));

let dinero ="1256";
console.log(Number.parseInt(dinero,8));
console.log(anio.toString());

let negativo= -6;
console.log(Math.abs(negativo));
let positivo = Math.abs(negativo);
console.log(typeof(positivo));

console.log(Math.sign(negativo));

console.log(Math.exp(negativo));
console.log(Math.max(1,2,3,4,5,6,7,8,9));
console.log(Math.pow(2,4));
console.log(Math.sqrt(32));
console.log(Math.cbrt(32));


//Ejercicios tejada
let numeroAstrom= prompt("Ingrese el numero a operar: ");
console.log(numeroAstrom);
let long = numeroAstrom.length;
let numero= numeroAstrom.split('');
console.log(numero);
for (let i = 0; i < long; i++) {

}
console.log(newNum);


let numDado= Number(prompt("Ingrese el numero a operar: "));
// let fibo= ( (1.618)**n - (-(1.618**-1))**n ) /Math.sqrt(5);
console.log(fibo);
if ((numDado % numDado == 1 || numDado % 1 == numDado) && ( numDado%2 ==0) && (numDado % fibo==0)) {
    console.log("el numero cumple");

} else{
    console.log("no cumple");
}



