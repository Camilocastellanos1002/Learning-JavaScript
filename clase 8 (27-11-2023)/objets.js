//1
const persona ={
    nombre: "juan camilo chaparro castellanos",
    edad: 27,
    ciudad : "medellin"
}
//2
persona.ocupacion = "estudiante";
//3
const {nombre}=persona;
console.log(nombre);
//4
const libro ={
    titulo :"100 años de soledad",
    autor : "Gabriel garcia marquez",
    añoPublicacion: 2023
}
//5
const informacion = {...libro, ...persona}
console.log(informacion);
//6
persona.ocupacion = "bartender";
console.log(persona);
//7
delete libro.añoPublicacion;
console.log(libro);
//8
const coche ={
    marca : "Kia",
    modelo: "Sportage",
    año: 2024
}
//9
console.log(Object.entries(coche));
//10
coche.mostrarCompra = function(){
    console.log(`Bienvenido a la familia ${this.marca}!\ngracias por la compra de tu ${this.modelo}`);
}
coche.mostrarCompra();
//11
const circulo ={
    radio: 5,
    color: "Red"
}
//12
const areaCirculo = Math.PI *(circulo.radio**2);
console.log(`Area del circulo: ${areaCirculo} m`);
//13
const rectangulo ={
    ancho:25,
    alto: 10
}
//14
const perimetroRectangulo= 2*(rectangulo.ancho * rectangulo.alto);
console.log(`Perimetro del rectangulo es: ${perimetroRectangulo} m`);
//15
const formas ={...rectangulo,...circulo}
console.log(formas);
//16
const computadora ={
    marca: "HP",
    modelo: 2020,
    precio: 2600000
}
//17
console.log(`precio de un computador ${computadora.marca} es: ${computadora.precio}`);
//18
computadora.tarjetaGrafica = true;
console.log(computadora);
//19
const mascota ={
    nombre: "Pascual",
    especie: "Bulldog Ingles",
    edad: 13
}
//20
console.log(`especie: ${mascota.especie.toUpperCase()}`);
//21
const fruta ={
    nombre: "Fresa",
    color: "Red"
}
//22
fruta.madura = function (){
    console.log(`la ${this.nombre} esta madura, cometela`);
}
fruta.madura()
//23
const estudiante = {
    nombre: "Juan Camilo Chaparro Castellanos",
    edad: 27,
    calificaciones : [5,4.5, 4.8, 4.9]
}
//24
let sumatoria=0;
for (let i = 0; i < estudiante.calificaciones.length; i++) {
    sumatoria+=estudiante.calificaciones[i];
}
const promedio = sumatoria/estudiante.calificaciones.length;
console.log(`El promedio de notas del estudiante ${estudiante.nombre} es de: ${promedio.toFixed(2)}`);
//25
estudiante.aprobadoOno=true;
console.log(estudiante);
//26
const bolsa ={
    tamaño : "Grande",
    color: "Negra"
}
//27
console.log(`el tamaño de la bolsa es: ${bolsa.tamaño}`);
console.log(`el color de la bolsa es: ${bolsa.color}`);
//28
bolsa.cambioColor = function(){
    this.color = prompt("Ingrese color de la bolsa: ")
}
bolsa.cambioColor();
console.log(`el color de la bolsa es: ${bolsa.color}`);
//29
const telefono ={
    marca: "Iphone",
    modelo: "Pro Max",
    sistemaOperativo: "IOS"
}
//30
console.log(`telefono: ${telefono.marca}\nmodelo: ${telefono.modelo}\nsistemaOp: ${telefono.sistemaOperativo}`);
//31
telefono.memoriaRam= "6 GB";
console.log(telefono);
//32
const animal ={
    tipo: "gato",
    sonido: "miauuuuuu"
}
//33
console.log(`${animal.sonido}`);
//34
animal.indicar = function(){
    console.log(`caracteristicas del animal: \ntipo:${this.tipo}\nsonido: ${this.sonido}`);
}
animal.indicar();
//35
const vuelo={
    aerolinea: "CopaAirlines",
    numeroVuelo: 256,
    horaSalida: 15 //horamilitar
}
//36
console.log(`los datos del vuelo son: \n${Object.values(vuelo)}`);
//37
vuelo.destino= "Barcelona";
console.log(vuelo);
//38
const jugador={
    nombre:"Messi",
    equipo: "Inter Miami",
    posicion: 10
}
//39
console.log(`El mejor jugador de la liga es: ${jugador.nombre} del equipo: ${jugador.equipo}`);
//40
jugador.posicionJugador = function (){
    console.log(`el jugador ${this.nombre} juega en la posicion #${this.posicion}`);
}
jugador.posicionJugador();

