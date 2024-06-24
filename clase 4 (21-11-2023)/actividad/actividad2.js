
//1
console.log("Ejercicio #1");
let nota;
let promedio;
let suma=0;
let cantidadNotas = Number(prompt("ingrese la cantidad de notas: "));
for (let i = 0; i < cantidadNotas; i++) {
  nota=Number(prompt(`Ingrese la nota #${i+1}`));
  console.log(`nota #${i}: ${nota}`);
  suma+=nota;
  console.log(`sumatoria: ${suma}`);
}
promedio = suma/cantidadNotas;
console.log(`el promedio de ${cantidadNotas} notas es: ${promedio} `);
if (promedio <= 3.9){
  console.log("Estudie, vago");
}else{
  console.log("Estas Becado");
}
//2
console.log("Ejercicio #2");

let numero = Number(prompt("Ingresar numero: "))
if (numero%2==0) {
  console.log(`${numero} es numero par`);
} else {
  console.log(`${numero} es numero impar`);
}
//3
console.log("Ejercicio #3");
let resistencia=Number(prompt("Ingrese el valor de la resistencia"));
let corriente=Number(prompt("Ingrese el valor de la corriente"));
let voltaje = corriente*resistencia;
console.log(`el voltaje del circuito es: ${voltaje}`);

//4
console.log("Ejercicio #4");
let edad=[];
let nombre=[];
let edadMayor=0;
let mayor;

for (let j = 0; j < 3; j++) {
  nombre[j] = prompt("Ingrese su nombre: ");
   edad[j]= Number(prompt("Ingrese su edad: "));
   if (edad[j] > edadMayor) {
     edadMayor= edad[j];
     mayor = nombre[j];
  }
}
console.log(`el mayor es: ${mayor} con ${edadMayor}años`);


//5
console.log("Ejercicio #5");
let cantidadHombres=0;
let cantidadMujeres=0;
let notaMayor=0;
let mejorEstudiante;
let contadorEstudiantes=0;
let opcion =-1;

while (opcion!=0) {
  opcion=Number(prompt("1.Ingresar estudiante \n0.Imprimir datos y salir"));
  if (opcion ==1){
    contadorEstudiantes++;
    let nombreEstudiante= prompt(`Ingrese nombre del estudiante #${contadorEstudiantes}:`);
    let sexoEstudiante= prompt(`Ingrese sexo (M ò F) del estudiante #${contadorEstudiantes}:`);
    let notaEstudiante=Number(prompt(`Ingrese nota del estudiante #${contadorEstudiantes}:`));
    console.log(`datos estudiante ${contadorEstudiantes}:
    nombre: ${nombreEstudiante}
    sexo: ${sexoEstudiante}
    nota: ${notaEstudiante}`);

    if (sexoEstudiante == 'M') {
      cantidadHombres++;
    } else if(sexoEstudiante == 'F'){
      cantidadMujeres++;
    }
    if (notaEstudiante > notaMayor){
      notaMayor = notaEstudiante;
      mejorEstudiante = nombreEstudiante;
    }
  }else if (opcion ==0){
    console.log("Adios");
    console.log(`mejor estudiante: ${mejorEstudiante}`);
    console.log(`mejor nota: ${notaMayor}`);
    console.log(`cantidad de hombres: ${cantidadHombres}`);
    console.log(`cantidad de mujeres: ${cantidadMujeres}`);
    break;
  }else{
    console.log("Opcion erronea");
  }
}

//6
console.log("Ejercicio #6");
const nombreArticulo = prompt("Ingrese el nombre del producto: ");
const precioArtiuclo = Number(prompt("Ingrese el precio del producto: "));
const cantidadProducto = Number(prompt("Ingrese la cantidad de articulos: "));
const total = precioArtiuclo * cantidadProducto;

console.log(`Aqui tiene su factura:
articulo: ${nombreArticulo}
valor articulo: ${precioArtiuclo}
cantidad de articulo: ${cantidadProducto}

valor total: ${total}`);

//7
console.log("Ejercicio #7");
console.log("Cuadrado");
let ladoCuadrado = Number(prompt("Ingrese el lado del cuadrado en (m): "));
const perimetro = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es: ${perimetro}(m)`);
console.log("Rectangulo");
let baseRectangulo = Number(prompt("Ingrese la base del rectangulo en (m): "));
let alturaRectangulo = Number(prompt("Ingrese la altura del rectangulo en (m): "));

const areaRectangulo = baseRectangulo * alturaRectangulo;
console.log(`El area del cuadrado es: ${areaRectangulo}(m)`);

//8
console.log("Ejercicio #8 \nSalto de Triple Femenino");
let option = -1;
let cantidadAtletas=0;
const record= 15.5
let nombreAtleta =[];
let recordAtleta =[];
let mayorRecord=0;
let mejorSaltador;

while (option != 0) {
  option = Number(prompt(`1.Ingresar atleta\n2.Resultado\n0.Salir`));
  switch (option) {
    case 1:
      cantidadAtletas++;
      nombreAtleta[cantidadAtletas] = prompt(`Ingrese nombre del atleta #${cantidadAtletas}: `);
      recordAtleta[cantidadAtletas] = prompt(`Ingrese record del salto  del atleta #${cantidadAtletas} en (m): `);
      console.log(`Atleta #${cantidadAtletas}: ${nombreAtleta[cantidadAtletas]} \nrecord: ${recordAtleta[cantidadAtletas]}`);
      if (recordAtleta[cantidadAtletas]>mayorRecord){
        mayorRecord = recordAtleta[cantidadAtletas];
        mejorSaltador = nombreAtleta[cantidadAtletas];
      }
      
    break;
    case 2:
      console.log(`Felicidades ${mejorSaltador} ganaste la medalla de oro`);
      if (mayorRecord>record){
        console.log(`Rompiste record ${mejorSaltador},Felicidades ganaste 500millones`);
      }
      break;
    case 0:
      console.log("Adios"); 
    break;
    default:
      console.log("Opcion erronea");
    break;
  }
}


//9
console.log("Ejercicio #9 \nDato numerico");
let datos=[];
let miOpcion=-1;
let contDatos=0;
let sumaValores=0;
let promedioValores;
let mayorValor=0;
let menorValor=99999999;

while (datos[contDatos] != 0) {
  contDatos++;
  datos[contDatos]=Number(prompt("Ingrese numero, 0 para salir"));
  sumaValores+=datos[contDatos];
  promedioValores=sumaValores/contDatos;
  if (datos[contDatos] > mayorValor) {
    mayorValor = datos[contDatos];
  }
  if (datos[contDatos]< menorValor){
    menorValor = datos[contDatos];
  }
  if (datos[contDatos] ==0){
    datos.pop();
    break
  }
  console.log(`Sumatoria total: ${sumaValores}\nPromedio: ${promedioValores}\nCantidad de valores: ${contDatos}\nMayor Valor: ${mayorValor}\nMenor Valor: ${menorValor}`);
}