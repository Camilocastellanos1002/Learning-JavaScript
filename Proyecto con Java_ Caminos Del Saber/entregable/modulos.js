/* declaracion de las clases */

export class Usuario{

    constructor(nom,doc,ed,corr,prof,password,picture,dir,us){
        this.nombre=nom;
        this.documento =doc;
        this.edad= ed;
        this.correo = corr;
        this.profesion = prof;
        this.contraseña = password;
        this.foto = picture;
        this.direccion = dir;
        this.user = us;
    }

    LogIN(correo,contraseña){

    };
    logOut(correo,contraseña){

    };
}

export class Profesor extends Usuario {
    nivelEducativoPosgrado;
    proyecto;
    numeroEstudiantes;
    materiaEjercida;
    asistencia;

    entregaDeNotas(){}
}


















export class Materias{
    nombreMateria;
    materiaHorario=[];
    intensidadSemanal;
    salon;
}


export class Estudiante extends Usuario{
    nivelEducativo;
    asistencia;

    materiasPerdidad(){}
    materiasGanadas(){}
    graduado(){}

}

export class PadreDeFamilia extends Usuario{
    nombreHijo;
    integranteComitePadreDeFamilia;

    boletinBimestral(){}
    reunionPadres(){}
    eventos(){}
}

export class Rector extends Usuario{
    numeroReuniones;
    periodoEjercion;   
    convocarComiteEstudiantil(){}
    convocarReunionPadres(){}
    publicarEvento(){}
}


/* declaracion de la instancia de las clases (objetos) */

export const camilo = new Usuario;

camilo.nombre="Juan Camilo";
camilo.profesion="Estudiante";
camilo.documento=1039466438;
camilo.edad=27;

console.log(camilo);
console.log(typeof(camilo));

const vermer = new Profesor;
vermer.nombre="Vermer";
vermer.apellido="Ayala";

console.log(vermer);

export default function mensajeDefault() {
    return `LA BASE DE DATOS HA CARGADO EXITOSAMENTE.`
    
}