
/*
USANDO FUNCIONES, ARRAYS Y OBJETOS En JS:

Gestion miembros de iglesia: 
Manejo de creyentes.

Objetivo:
Administrar los creyentes de la iglesia, "las ovejas perdonadas", a través de un menú de opciones que 
permita agregar, eliminar, modificar y reportar a detalle a todos los miembros de la iglesia.

Funcionalidades:

-----Agregar Oveja-------

-Solicita ingresar nombre, edad, sexo, estadoCivil, inasistencias a la reunion dominical, versículos bíblicos memorizados o meditados durante semana, seArrepintio (boleano false por defecto), fuePerdonado (
Booleano false), tiempo de oración, y tiempo de lectura de las escrituras bíblicas.

-Agregar a la oveja (miembro) a la iglesia.

------Reportar a la oveja negra -------..... (la que tiene más inasistencias y es false en "seArrepintio", (nunca se arrepintió y jamas fue perdonado).
- Listar a las 3 ovejas con más inasistencias.

------Reportar a la oveja salvada-------que más ha llegado a memorizar o meditar versículos bíblicos en la semana y esta arrepentida y fue perdonada.

-------listar a las 3 ovejas con más versículos memorizados-------
-indicar si es una oveja arrepentida (antes fue oveja negra).
- indicar si fue perdonada.

------Eliminar Oveja-------
- Mostrar a todas las ovejas. 
- Eliminar a la oveja que nunca se arrepiente y por tanto nunca ha sido perdonada.

------Modificar Oveja Arrepentidas------
-Mostrar a todas las ovejas
-modificar a True propiedad seArrepintio de la oveja negra
-modificar a True propiedad fuePerdonada.

------!Informe mensual iglesia.
-Mostrar a todas las ovejas con toda su información
*/

alert("Bienvenido a la Iglesa 'Los Descarriados'!");
let opcion;
let opcion1;
const creyentesIglesia=[];
let contadorCreyentes=0;
let numMayor=0;
let nomMayor=0;
let numMVersis=0;
const ovejaNegras =[];
const ovejaSalvadas=[];


while (opcion!=7) {
    opcion=Number(prompt(`Menu:\n1. Ingresar Oveja\n2.Reportar oveja negra\n3.Reportar oveja salvada\n4.Modificar datos Oveja\n5.Eliminar Oveja\n6.Informe Mensual de la iglesia\n7.Salir\nseleccione: `));
    switch (opcion) {
        case 1:
            const oveja={
                nombre: prompt("Ingrese su nombre: "),
                //edad: Number(prompt("Ingrese la edad: ")),
                //sexo: prompt("Ingrese sexo: "),
                //estado: prompt("Ingrese su estado civil: "),
                asistencia: Number(prompt("Ingrese la cantidad de inasistencias: ")),
                //tiempoOracion: Number(prompt("Ingrese la cantidad de tiempo (h) de oracion: ")),
                //tiempoLectura: Number(prompt("Ingrese la cantidad de tiempo (h) de lectura de la biblia: ")),
                seArrepintio: false,
                fuePerdonando: false,
                versiculos: Number(prompt("Ingrese la catidad de versiculos que medito en la semana: ")),
            }
            
            function ovejaNegra (){
                creyentesIglesia.forEach((i)=>{
                    if ((i.asistencia>numMayor) &&(i.seArrepintio == false) &&(i.fuePerdonando == false)) {
                        numMayor=i.asistencia;
                        nomMayor=i.nombre;
                    }             
                });
                ovejaNegras.push([nomMayor,numMayor]);
                console.log("Oveja negra registrada!");
                alert("Oveja negra registrada!");
                console.log(ovejaNegras);
                console.log(numMayor,nomMayor);
            }

            function ovejaSalvada(){ 
                creyentesIglesia.forEach((j)=>{
                    if((j.versiculos>numMVersis) && (seArrepintio == true) && (fuePerdonando == true)){
                        numMVersis= j.versiculos;

                    }
                })
                ovejaSalvadas.push([j.nombre]);
                console.log("Oveja Salvada!");
                alert("Oveja Salvada!")
            }









            creyentesIglesia.push(oveja);
            contadorCreyentes++;
            console.log(oveja);
            console.log(creyentesIglesia);
        break;
        case 2:
            console.log(creyentesIglesia);
            ovejaNegra();
        break;
        case 3:

        break;
        case 4:

        break;
        case 5:
        break;
        default:
        break;
    }
}