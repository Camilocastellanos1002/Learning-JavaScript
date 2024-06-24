
//caso #1
let quincenaHildebrando = 2500000;
const almojabanaConGaseosa = 15000;
const subwayConGaseosa = 23000;
let decision;

alert("Hildebrando, Bienvenido al aeropuerto el dorado!");
decision = Number(prompt(`Menu: \n1.Almojabana con gaseosa $${almojabanaConGaseosa}\n2.Subway con gaseosa $${subwayConGaseosa} \n3.No Comprar nada\nSeleccione: `));
switch (decision) {
    case 1:
        alert("diablos, te cayo mal");
        quincenaHildebrando-=almojabanaConGaseosa;
        console.log(`Saldo: $${quincenaHildebrando}`);
    break;
    case 2:
        alert("estas llenito, que bien");
        quincenaHildebrando-=subwayConGaseosa;
        console.log(`Saldo: $${quincenaHildebrando}`);
    case 3:
        alert("Buen Viaje");
    break;
    default:
        alert("opcion erronea");
    break;
}
//caso #2
alert("Pasajero, su maleta sobrepasa las dimnesiones de la aerolinea\ntiene que cambiarlas")
const altoMaletaAeropuerto=55;
const largoMaletaAeropuerto=40;
const anchoMaletaAeropuerto=20;

const areaMaletaAeropuerto=altoMaletaAeropuerto*largoMaletaAeropuerto;
const volumenMaletaAeropuerto=areaMaletaAeropuerto*anchoMaletaAeropuerto;
console.log(areaMaletaAeropuerto, volumenMaletaAeropuerto);

let altoMaletaHilde=60;
let largoMaletaHilde=40;
let anchoMaletaHilde=20;

let areaMaletaHilde=altoMaletaHilde*largoMaletaHilde;
let volumenMaletaHilde=areaMaletaHilde*anchoMaletaHilde;
console.log(areaMaletaHilde, volumenMaletaHilde);


let reduccionAlto=altoMaletaAeropuerto/altoMaletaHilde;
let reduccionLargo=largoMaletaAeropuerto/largoMaletaHilde;
let reduccionAncho=anchoMaletaAeropuerto/anchoMaletaHilde;
console.log(reduccionAlto,reduccionLargo,reduccionAncho);

let min=Math.min(reduccionAlto,reduccionLargo, reduccionAncho);
console.log(min);

let nuevoAlto = altoMaletaHilde*reduccionAlto;
let nuevoLargo = largoMaletaHilde * reduccionLargo;
let nuevoAncho = anchoMaletaHilde*reduccionAncho;
console.log(nuevoAlto,nuevoLargo, nuevoAncho);

//caso 3
alert("Diablos, la clave del wifi esta encriptada, desencriptala")
let decimal=0;
let decimales=[];
let ElPassEs = "01110010_01101001_01110111_01101001";
console.log(ElPassEs);
let claveSeparada = ElPassEs.split('_');
console.log(claveSeparada);
let nuevaClave=[];
let claveDesencriptada='';
for (let i = 0; i < claveSeparada.length; i++) {
   nuevaClave[i]=parseInt(claveSeparada[i],2);
   claveDesencriptada += String.fromCodePoint(nuevaClave[i]);
}
console.log(nuevaClave);
console.log(claveDesencriptada);


quincenaHildebrando-=50000;
console.log(`Saldo: $${quincenaHildebrando}`);


//caso 4
alert("Aca hablan diferente, tienes que adaptarte!")
let mensaje = "Taxi me puede llevar al hotel mariposas amarillas";
console.log(mensaje);
let nuevoMensaje=mensaje.replaceAll('a','i').replaceAll('e','i').replaceAll('o','i').replaceAll('u','i');
console.log(nuevoMensaje);

//caso 5
alert("Taxista Vs Pasajero")

let miOpcion=String(prompt("Inf¡grese piedra, papel o tijera: "));
miOpcion=miOpcion.toLocaleLowerCase();
const opcionesJuego= ["piedra", "papel", "tijera"];
const opcionTaxista=Math.floor(Math.random()*3);
const resultTaxista=opcionesJuego[opcionTaxista];
console.log(`Pasajero: ${miOpcion} vs Taxista: ${resultTaxista}`);
if ( (miOpcion==opcionesJuego[0]) || (miOpcion == opcionesJuego[1]) || (miOpcion == opcionesJuego[2]) ) {
    if ((miOpcion == opcionesJuego[0] && resultTaxista == opcionesJuego[2])||(miOpcion==opcionesJuego[1] && resultTaxista == opcionesJuego[0]) || (miOpcion==opcionesJuego[2] && resultTaxista == opcionesJuego[1])) {
        alert("Pasajero Gano, no tienes que pagar nada!\n");
    } else if ((miOpcion == opcionesJuego[0] && resultTaxista == opcionesJuego[1])||(miOpcion==opcionesJuego[1] && resultTaxista == opcionesJuego[2]) || (miOpcion==opcionesJuego[2] && resultTaxista == opcionesJuego[0])){
        alert("Taxista Gano,  pasajero tiene que pagar $300.000!\n");
        quincenaHildebrando-=300000;
        console.log(`Saldo: $${quincenaHildebrando}`);
    }else  if(miOpcion == resultTaxista){
        alert("Empate")
        console.log("Empate, cada uno por su lado");
    }
} else {
    alert("Ingresaste opcion erronea!")
}

//caso 6
let diasHotel=0;
let estadoVivoOMuerto= true;
alert("Bienvenido al Hotel !");
const patronVestimenta = ["Amarillo", "Verde", "Rojo", "Azul"];
diasHotel++;
let laDecision=prompt(`#${diasHotel} dia, codigo de vestimenta: ${patronVestimenta[0]}\nActividades del dia: Pisicina "que huele raro\nDeseas ingresar (si ó no): "`);
if ((laDecision == "si") || (laDecision == "Si") || (laDecision == "sI") || (laDecision == "SI")) {
    console.log("Te estas ahogando, demasiado cloro\nEstas Muerto!");
    estadoVivoOMuerto = false;
}else{
    diasHotel++;
    laDecision=prompt(`Segundo dia, codigo de vestimenta: ${patronVestimenta[1]}\nActividades del dia: Caminata y aguita para el camino!\nDeseas ir (si ó no): "`);
    if ((laDecision == "si") || (laDecision == "Si") || (laDecision == "sI") || (laDecision == "SI")) {
        console.log("luego de una enorme caminata, llegaste a una hermosa pradera, tomate algunas fotos de recuerdo!");
        diasHotel++;
        laDecision=Number(prompt(`#${diasHotel} dia, codigo de vestimenta: ${patronVestimenta[2]}\nActividades del dia: juegos en la playa\nSelecciona:
        1.Voleibol
        2.Nadar en el mar y montar moto
        3.Tomar cocteles
        tu opcion: "`));
        switch (laDecision) {
            case 1:
                console.log("La pasaste super bien! sigue asi");
                diasHotel++;
                laDecision=Number(prompt(`#${diasHotel} dia, codigo de vestimenta: ${patronVestimenta[3]}\nActividades del dia: actividades dentro del hotel \nSelecciona:
                1.Bingo
                2.Bailar
                3.Casino
                tu opcion: "`));
                switch (laDecision) {
                    case 1:
                        console.log("BINGO, Ganaste\n premio: 1'000.000");
                        quincenaHildebrando+=1000000;
                        console.log(`Saldo: $${quincenaHildebrando}`);
                    break;
                    case 2:
                        console.log("Baila, La pasaras muy bien!");
                    break;
                    case 3:
                        console.log("Perdiste, solo te queda el pasaje de regreso");
                        estadoVivoOMuerto = false;
                    break;
                }
            break;
            case 2:
                console.log("La pasaste bien, pudiste nadar y manejar moto!");
                diasHotel++;
                laDecision=Number(prompt(`#${diasHotel} dia, codigo de vestimenta: ${patronVestimenta[3]}\nActividades del dia: actividades dentro del hotel \nSelecciona:
                1.Bingo
                2.Bailar
                3.Casino
                tu opcion: "`));
                switch (laDecision) {
                    case 1:
                        console.log("BINGO, Ganaste\n premio: 1'000.000");
                        quincenaHildebrando+=1000000;
                        console.log(`Saldo: $${quincenaHildebrando}`);

                    break;
                    case 2:
                        console.log("Baila, La pasaras muy bien!");
                    break;
                    case 3:
                        console.log("Perdiste, solo te queda el pasaje de regreso");
                        estadoVivoOMuerto = false;
                    break;
                }
                
            break;
            case 3:
                console.log("Tienes dolor de cabeza, pierdes vision ¡fue chirrinchi adulterado! debes ir a emergencias");
                estadoVivoOMuerto = false;
            break;
        }
    }else{
        console.log("No puste terminar la caminata solo\nTe perdiste, estas muerto!");
        estadoVivoOMuerto = false;
    }

}
console.log(`Resultado Final: \nCantidad de dias en macondo: ${diasHotel}\nEstas vivo ó no: ${estadoVivoOMuerto}\nDinero gastado: ${quincenaHildebrando}`);


