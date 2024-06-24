class Salondeclase{
    //Propiedades
    nombre;
    tamaño;
    salon;

    //Metodos
    constructor(nombre){
        this.nombre = nombre;
        console.log(this);
    }

    constructor(tamaño){
        this.tamaño = tamaño;
        console.log(this);
    }

    constructor(salon){
        this.salon = salon;
        console.log(this);
    }

    ubicacion(){
        return "El salon se encuentra en el segundo piso";
    }

    herramientas(){
        return "El salon de clase cuenta con videobeam y 30 sillas (No tiene computadores)";
    }

    mantenimiento(){
        return "El salon de clase esta en mantenimiento de 3pm a 4pm";
    }
};

const jardin = new Salondeclase();
jardin.ubicacion();
const transicion =  new Salondeclase();
transicion.herramientas();
const primeroA  =  new Salondeclase();
primeroA.mantenimiento();
const primeroB  =  new Salondeclase("Primero B");
const segundoA  =  new Salondeclase("Segundo A", "15 estudiantes");
const segundoB  =  new Salondeclase("Segundo B", "13 estudiantes", "101");


class Profesor{
    //Propiedades
    nombre;
    edad;
    horario;
    proyecto;

    //Metodos
    constructor(nombre){
        this.nombre = nombre;
        console.log(this);
    }
    
    constructor(edad){
        this.edad = edad;
        console.log(this);
    }

    constructor(horario){
        this.horario = horario;
        console.log(this);
    }

    constructor(proyecto){
        this.proyecto = proyecto;
        console.log(this);
    }

    calificar(){
        return "La nota definitiva es:";
    }

    planeacion(){
        return "Las actividades de la semana son: ";
    }

    asistencia(){
        return "El dia 5 de diciembre no asistieron 4 estudiantes";
    }

    materiasDadas(){
        return "Las materias dictadas por el profesor son: Etica y sociales.";
    }

    directorCurso(){
        return "El profesor es el director de curso del grado quinto"
    }
}

const anaSanchez = new Profesor();
anaMaria.calificar();
const amparoMartinez = new Profesor();
anaMaria.planeacion();
const claudiaMartinez = new Profesor();
anaMaria.asistencia();
const gloriaCardona = new Profesor();
anaMaria.materiasDadas();
const dianaOsorio = new Profesor();
anaMaria.directorCurso();


class Estudiante{
    //Propiedades
    nombre;
    edad;
    horario;
    habilidades;
    salon;

    //Metodos
    constructor(nombre){
        this.nombre = nombre;
        console.log(this);
    }
    
    constructor(edad){
        this.edad = edad;
        console.log(this);
    }

    constructor(horario){
        this.horario = horario;
        console.log(this);
    }

    constructor(habilidades){
        this.habilidades = habilidades;
        console.log(this);
    }

    estudiar(){
        return "Los cursos que tienen actividades pendientes son: Matematicas e Ingles.";
    }

    asistencia(){
        return "Ha asistido a 14 clases. ";
    }

    inasistencia(){
        return "Ha inasistido a 2 clases. ";
    }

    extracurriculares(){
        return "Toma clases de piano y natacion.";
    }

    pruebas(){
        return "la proxima semana tiene 2 pruebas (Matematicas e ingles)";
    }

}

const juanPerez = new Estudiante();
juanPerez.estudiar();
const julianaArias = new Estudiante();
julianaArias.asistencia();
const estebanPerdomo = new Estudiante();
estebanPerdomo.inasistencia();
const pedroGutierrez = new Estudiante();
pedroGutierrez.extracurriculares();
const marianaVasquez = new Estudiante();
marianaVasquez.pruebas();

class Materias{
    //Propiedades
    nombre;
    intensidad;
    grados;
    proyecto;
    horario;

    //Metodos
    constructor(nombre){
        this.nombre = nombre;
        console.log(this);
    }
    
    constructor(intensidad){
        this.intensidad = intensidad;
        console.log(this);
    }

    constructor(horario){
        this.horario = horario;
        console.log(this);
    }

    constructor(grados){
        this.grados = grados;
        console.log(this);
    }

    constructor(proyecto){
        this.proyecto = proyecto;
        console.log(this);
    }


    estudiar(){
        return "Los cursos que tienen actividades pendientes son: Matematicas e Ingles.";
    }

    asistencia(){
        return "Ha inasistido a 4 clases. ";
    }
}

const matematicas = new Materias("matematicas");
const español = new Materias("español", "5 H");
const ingles = new Materias("ingles", "4 h", "jardin-quinto");
const ciencias = new Materias();
const sociales = new Materias();