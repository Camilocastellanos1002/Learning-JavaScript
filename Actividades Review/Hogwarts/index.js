let estudianteHogwarts={
    nombre: "",
    edad: "",
    familia: {
        padre: "",
        madre: ""
    },
    linaje: "",
    casa: "",
    animalPatronus:"",
    cualidades: [""],
};

console.log(estudianteHogwarts.nombre)
let clases = {
    transformaciones: "Profesor Minerva McGonagall",
    herbologia: "Profesora Pomona Sprout",
    pociones: "Profesor Horace Slughorn",
    encantamientos: "Profesora Filius Flitwick",
    defensaContraLasArtesOscuras: "Profesor Severus Snape ",
    animalesMagicos: "Profesor Rubeus Hagrid",
    historiaDeMagia: "Profesor Cuthbert Binns"
    
};

let cena = {
    asignarCasa: function(estudiante) {
        // Determinar la casa según las cualidades y el linaje
        if (estudiante.cualidades.includes("Valor, fuerza, audacia")) {
            estudiante.casa = "Gryffindor";
        } else if (estudiante.cualidades.includes("Justicia, Lealtad, Paciencia") || estudiante.cualidades.includes("Lealtad") || estudiante.cualidades.includes("Paciencia")||estudiante.linaje==="muggle"||estudiante.linaje==="mestizo") {
            estudiante.casa = "Hufflepuff";
        } else if (estudiante.cualidades.includes("Creatividad, Erudiccion, Inteligencia") || estudiante.cualidades.includes("Erudiccion") || estudiante.cualidades.includes("Inteligencia")|| estudiante.linaje==="muggle"||estudiante.linaje==="mestizo") {
            estudiante.casa = "Ravenclaw";
        } else if (estudiante.cualidades.includes("Ambicion, Determinacion, Astucia") || estudiante.cualidades.includes("Determinacion") || estudiante.cualidades.includes("Astucia") || estudiante.linaje === "sangre pura") {
            estudiante.casa = "Slytherin";
            // this.cenaS;
        } else {
            console.log("No se puede determinar la casa. ¡El Sombrero Seleccionador está confundido!");
        }
    },
    cenaS: function(){
        estudianteHogwarts.casa = this.asignarCasa();
    }
};


let claseTransformaciones = {
    profesor: clases.transformaciones,
    hora: "9 AM",
    boggartTransformado: null,

    realizarTransformacionRiddikulus: function(){
        if(this.boggartTransformado === null){
            console.log("¡un Boggart aparecion en la clase de transformaciones¡¡ ");

        }else{
            console.log(`!Riddikulus¡ El boggart se transforma y da risa. Es ahora un ${this.boggartTransformado.formaTransformada}`)
        }
    },
    enfrentarBoggart: function(boggart){
        console.log(`!Un boggart ha aprecido en la clase de Transformaciones¡`);
        console.log(` Forma original del boggart: ${boggart.formaOriginal}`);
        this.boggartTransformado={
            formaOriginal: boggart.formaOriginal,
            formaTransformada: "Payaso gracioso"
        };

        this.realizarTransformacionRiddikulus();
    }
};

let boggartEjemplo = {
    formaOriginal: "Puerco araña"
}


let defensaContraLasArtesOscuras = {
    profesor: clases.defensaContraLasArtesOscuras,
    hora: "10 AM",
    animalPatronus: ["Ciervo", "Aguila", "Dragon", "Fenix", "Tlacuache", "Libelula", "gato", "perro"],
    generarAnimalPatronus: function(){
        let indiceAleatorio = Math.floor(Math.random() * this.animalPatronus.length);
        return this.animalPatronus[indiceAleatorio];
    }
};

let clasePociones = {
    profesor: clases.pociones,
    hora: "10 AM",
    ingredientes: {
        crisopos: 2, 
        talloDescurainiaSophia: 1
    },
    tiempoPreparacion: 5,
    pocionPreparada: false,
    prepararPocion: function (){
        if(this.ingredientes.crisopos ===2 && this.ingredientes.talloDescurainiaSophia===1 && this.tiempoPreparacion === 5 ){
            console.log("!Pocion Felix Felicis Preparada con exito¡");  
            this.pocionPreparada = true;          
        }else{
            console.log("No se pudo preparar la Pocion Felix Felicis");
            this.pocionPreparada =false;
        }
    },

    aplicarConsecuencias: function(){
        if(this.pocionPreparada){
            console.log("La pocion ha tenido efecto");
            console.log("cambiar profesor de pociones por el de animales magicos. ");
            this.profesor =clases.pociones;;
            clases.pociones = this.profesor;
            console.log(`profesor: ${this.profesor}`)
        }else{
            console.log("No se pueden aplicar consecuencias. ")
        }
    },

}


const bodyHtml = document.querySelector('body');
bodyHtml.innerHTML=`
    <section class="log_in">
        <section class="my_title">
            <h1>Bienvenido a Hogwarts</h1>
        </section>
        <section class="container">
            <section class="image">
                <img src="/img/portrait.png" alt="" width="350" height="350">
            </section>
            <section class="formulario">
                <p class="estatic">Nombre del estudiante: </p>
                <input class="my_input_name" type="text" placeholder="Ingrese el nombre: ">

                <p class="estatic">Nombre del padre: </p>
                <input class="my_input_name_padre" type="text" placeholder="Ingrese el nombre: ">

                <p class="estatic">Nombre del madre: </p>
                <input class="my_input_name_madre" type="text" placeholder="Ingrese el nombre: ">

                <p class="estatic">Edad: </p>
                <input class="my_input_age" type="text" placeholder="Ingrese su edad: ">
                <p class="estatic">Linaje: </p>
        
                <section class="col-sm-3">
                    <select class="form-select" class="my_input_linaje" id="linaje">
                        <option value="">Seleccione Linaje</option>
                        <option value="mestizo">Mestizo</option>
                        <option value="muggle">Muggle</option>
                        <option value="sangre pura">Sangre Pura</option>
                    </select>
                </section>
                <p class="estatic" >Cualidades: </p>
                <section class="col-sm-3">
                    <select class="form-select" id="cualidades">
                        <option value="">Seleccione Cualidades</option>
                        <option value="valor,fuerza,audacia">Valor, Fuerza y Audacia</option>
                        <option value="justicia,lealtad,paciencia">Justicia, Lealtad, Paciencia</option>
                        <option value="creatividad,erudicion,inteligencia">Creatividad, Erudicion, Inteligencia</option>
                        <option value="ambicion,determinacion,astucia">Ambicion, Determinacion, Astucia</option>
                    </select>
                </section>

                <button class="my_button" type="button" >Enviar</button>                
            </section>
        </section>
    </section>
`;


const botonBienvenida = document.querySelector('.my_button');
const nombreMago= document.querySelector('.my_input_name');
const nombrePadreMago = document.querySelector('.my_input_name_padre');
const nombreMadreMago = document.querySelector('.my_input_name_madre');
const edadMago=document.querySelector('.my_input_age');
const linajeMago = document.querySelector('#linaje');
const cualidadesMago = document.querySelector('#cualidades');




nombreMago.addEventListener('input',e=>{
    estudianteHogwarts.nombre=e.target.value;
})
nombrePadreMago.addEventListener('input',e=>{
    estudianteHogwarts.familia.padre =e.target.value;
})
nombreMadreMago.addEventListener('input',e=>{
    estudianteHogwarts.familia.madre = e.target.value;
})
edadMago.addEventListener('input',e=>{
    estudianteHogwarts.edad=e.target.value;
})
linajeMago.addEventListener('input',e=>{
    estudianteHogwarts.linaje=e.target.value;
})

cualidadesMago.addEventListener('input',e=>{
    estudianteHogwarts.cualidades=e.target.value;
})


botonBienvenida.addEventListener('click',e=>{
   console.log(estudianteHogwarts);
   bodyHtml.innerHTML=`
    <section class="log_in">
        <section class="my_title">
            <h1>Informacion del estudiante</h1>
        </section>
        <section class="container2">
            <section class="datos">
                <p class="estatic">Nombre del estudiante: </p>
                <p class="dinamic">${estudianteHogwarts.nombre}</p>
                <p class="estatic">Edad del estudiante: </p>
                <p class="dinamic">${estudianteHogwarts.edad}</p>  
                <p class="estatic">Linaje del estudiante: </p>
                <p class="dinamic">${estudianteHogwarts.linaje}</p>
                <p class="estatic">Padre: </p>
                <p class="dinamic">${estudianteHogwarts.familia.padre}</p>
                <p class="estatic">Madre: </p>
                <p class="dinamic">${estudianteHogwarts.familia.madre}</p>    
                <p class="estatic">Cualidades: </p>
                <p class="dinamic">${estudianteHogwarts.cualidades}</p>  
            </section>
            <button class="my_button2" type="button" >Vamos a la cena de bienvenida</button>                
        </section>
    </section>
    `;


    cena.asignarCasa(estudianteHogwarts)

    const botonCena = document.querySelector('.my_button2');
    botonCena.addEventListener('click',e=>{
        bodyHtml.innerHTML=`
        <h1>Cena de Bienvenida de Hogwarts</h1>
        <section class="container2">
                <section class="datos">
                    <p class="estatic">Nombre del estudiante: </p>
                    <p class="dinamic">${estudianteHogwarts.nombre}</p>
                    <p class="estatic">Edad del estudiante: </p>
                    <p class="dinamic">${estudianteHogwarts.edad}</p>  
                    <p class="estatic">Linaje del estudiante: </p>
                    <p class="dinamic">${estudianteHogwarts.linaje}</p>
                    <p class="estatic">Padre: </p>
                    <p class="dinamic">${estudianteHogwarts.familia.padre}</p>
                    <p class="estatic">Madre: </p>
                    <p class="dinamic">${estudianteHogwarts.familia.madre}</p>    
                    <p class="estatic">Cualidades: </p>
                    <p class="dinamic">${estudianteHogwarts.cualidades}</p>  
                </section>
        </section>
        <section class="LaCena container2">
            <section class="casa">
                <p class="estatic">Gryffindor</p>
                <img src="/img/gryffindor.png" alt="" height="100" width="100">    
            </section>
            <section class="casa">
                <p class="estatic">Ravenclaw</p>
                <img src="/img/ravenclaw.png" alt="" height="100" width="100">
            </section>
            <section class="casa">
                <p class="estatic">Hufflepuff</p>
                <img src="/img/hufflepuff.png" alt="" height="100" width="100">
            </section>
            <section class="casa">
                <p class="estatic">Slytherin</p>
                <img src="/img/slytherin.png" alt="" height="100" width="100">
            </section>
        </section>
        <section class="container2">
            <p class="estatic">Casa Asignada: </p>
            <p class="dinamic">¡Felicidades! Has sido asignado a la casa de ${estudianteHogwarts.casa}</p>
            <button class="my_button3" type="button" >Ir a Clases</button>                

        </section>
        `;
        console.log(`${estudianteHogwarts.nombre} ha sido seleccionado para la casa de ${estudianteHogwarts.casa}`);

        const botonClases = document.querySelector('.my_button3');
        botonClases.addEventListener('click',e=>{
            bodyHtml.innerHTML=`
            <h1>Seleccion de clases</h1>
            <section class="container2">
                <section class="datos">
                    <p class="estatic">Nombre del estudiante: </p>
                    <p class="dinamic">${estudianteHogwarts.nombre}</p>
                    <p class="estatic">Edad del estudiante: </p>
                    <p class="dinamic">${estudianteHogwarts.edad}</p>  
                    <p class="estatic">Linaje del estudiante: </p>
                    <p class="dinamic">${estudianteHogwarts.linaje}</p>
                    <p class="estatic">Padre: </p>
                    <p class="dinamic">${estudianteHogwarts.familia.padre}</p>
                    <p class="estatic">Madre: </p>
                    <p class="dinamic">${estudianteHogwarts.familia.madre}</p>   
                    <p class="estatic">Cualidades: </p>
                    <p class="dinamic">${estudianteHogwarts.cualidades}</p>
                    <p class="estatic">Casa: </p>
                    <p class="dinamic">${estudianteHogwarts.casa}</p>    
                </section>
            </section>
            <section class="container2">
                <section class="col-sm-3">
                    <p>Seleccione la clase que deseas ingresar: </p>
                    <select class="form-select" id="mis_clases">
                        <option value="">Seleccione: </option>
                        <option value="transformaciones">Transformaciones</option>
                        <option value="herbologia">Herbologia</option>
                        <option value="pociones">Pociones</option>
                        <option value="encantamientos">Encantamientos</option>
                        <option value="defensaContraLasArtesOscuras">Defensa contra las Artes Oscuras</option>
                        <option value="animalesMagicos">Animales Magicos</option>
                        <option value="historiaDeMagia">Historia de Magia</option>
                    </select>
                </section>
                <button class="my_button4" type="button" >Ir a la clase seleccionada</button>           
            </section>    
            `;
            let selectClas="";
            const miClase= document.querySelector('#mis_clases');
            miClase.addEventListener('input',e=>{
                selectClas=e.target.value;
            })
            const botonClase = document.querySelector('.my_button4');
            botonClase.addEventListener('click',e=>{
                switch (selectClas) {
                    case 'transformaciones':
                        claseTransformaciones.enfrentarBoggart(boggartEjemplo);

                        bodyHtml.innerHTML=`
                            <h1> Clase de Transformaciones</h1>
                            <section class="container2">
                                <section class="datos">
                                    <p class="estatic">Profesor: </p>
                                    <p class="dinamic">${clases.transformaciones}</p>
                                    <p class="estatic">Hora: </p>
                                    <p class="dinamic">${claseTransformaciones.hora}</p>

                                </section>
                            </section>
                            <section class="container2">
                                <p class="estatic">Se ha aparecido un Boggart, en forma de ${boggartEjemplo.formaOriginal}, Derrotalo!</p>
                                <p>Hechizo: "!Riddikulus¡"</p> 
                                <p class="estatic"> Boggart Derrotado, su forma es ${claseTransformaciones.boggartTransformado.formaTransformada}</p>
                            </section>
                            <button class="my_button5" type="button" >Atras</button>                
                        `;
                        const botonAtras = document.querySelector('.my_button5');
                        botonAtras.addEventListener('click',e=>{
                            bodyHtml.innerHTML=`
                            <h1>Seleccion de clases</h1>
                            <section class="container2">
                                <section class="datos">
                                    <p class="estatic">Nombre del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.nombre}</p>
                                    <p class="estatic">Edad del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.edad}</p>  
                                    <p class="estatic">Linaje del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.linaje}</p>
                                    <p class="estatic">Padre: </p>
                                    <p class="dinamic">${estudianteHogwarts.familia.padre}</p>
                                    <p class="estatic">Madre: </p>
                                    <p class="dinamic">${estudianteHogwarts.familia.madre}</p>    
                                    <p class="estatic">Cualidades: </p>
                                    <p class="dinamic">${estudianteHogwarts.cualidades}</p>
                                    <p class="estatic">Casa: </p>
                                    <p class="dinamic">${estudianteHogwarts.casa}</p>    
                                </section>
                            </section>
                            <section class="container2">
                                <section class="col-sm-3">
                                    <p>Seleccione la clase que deseas ingresar: </p>
                                    <select class="form-select" id="mis_clases">
                                        <option value="">Seleccione: </option>
                                        <option value="transformaciones">Transformaciones</option>
                                        <option value="herbologia">Herbologia</option>
                                        <option value="pociones">Pociones</option>
                                        <option value="encantamientos">Encantamientos</option>
                                        <option value="defensaContraLasArtesOscuras">Defensa contra las Artes Oscuras</option>
                                        <option value="animalesMagicos">Animales Magicos</option>
                                        <option value="historiaDeMagia">Historia de Magia</option>
                                    </select>
                                </section>
                                <button class="my_button4" type="button" >Ir a la clase seleccionada</button>           
                            </section>    
                        `;
                        let selectClas="";
                        const miClase= document.querySelector('#mis_clases');
                        miClase.addEventListener('input',e=>{
                            selectClas=e.target.value;
                        })
                    })
                    break;
                    case 'defensaContraLasArtesOscuras':
                        estudianteHogwarts.animalPatronus = defensaContraLasArtesOscuras.generarAnimalPatronus();
                        bodyHtml.innerHTML=`
                            <h1>Clase de Defensa Contra las Artes Oscuras</h1>
                            <section class="container2">
                                <section class="datos">
                                    <p class="estatic">Profesor: </p>
                                    <p class="dinamic">${clases.defensaContraLasArtesOscuras}</p>
                                    <p class="estatic">Hora: </p>
                                    <p class="dinamic">${defensaContraLasArtesOscuras.hora}</p>
                                </section>
                            </section>
                            <section class="container2">
                                <p class="estatic">Te enseño el hechizo "Expecto Patronum", Demuestralo!</p>
                                <p>tu patronus: ${estudianteHogwarts.animalPatronus}</p>   
                            </section>
                            <button class="my_button5" type="button" >Atras</button>                

                        `;
                        console.log("animal", estudianteHogwarts.animalPatronus);
                        botonAtras.addEventListener('click',e=>{
                            bodyHtml.innerHTML=`
                            <h1>Seleccion de clases</h1>
                            <section class="container2">
                                <section class="datos">
                                    <p class="estatic">Nombre del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.nombre}</p>
                                    <p class="estatic">Edad del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.edad}</p>  
                                    <p class="estatic">Linaje del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.linaje}</p>   
                                    <p class="estatic">Cualidades: </p>
                                    <p class="dinamic">${estudianteHogwarts.cualidades}</p>
                                    <p class="estatic">Casa: </p>
                                    <p class="dinamic">${estudianteHogwarts.casa}</p>    
                                </section>
                            </section>
                            <section class="container2">
                                <section class="col-sm-3">
                                    <p>Seleccione la clase que deseas ingresar: </p>
                                    <select class="form-select" id="mis_clases">
                                        <option value="">Seleccione: </option>
                                        <option value="transformaciones">Transformaciones</option>
                                        <option value="herbologia">Herbologia</option>
                                        <option value="pociones">Pociones</option>
                                        <option value="encantamientos">Encantamientos</option>
                                        <option value="defensaContraLasArtesOscuras">Defensa contra las Artes Oscuras</option>
                                        <option value="animalesMagicos">Animales Magicos</option>
                                        <option value="historiaDeMagia">Historia de Magia</option>
                                    </select>
                                </section>
                                <button class="my_button4" type="button" >Ir a la clase seleccionada</button>           
                            </section>    
                        `;
                        let selectClas="";
                        const miClase= document.querySelector('#mis_clases');
                        miClase.addEventListener('input',e=>{
                            selectClas=e.target.value;
                        })
                    })
                    break;
                    case 'pociones':
                        clasePociones.prepararPocion();
                        clasePociones.aplicarConsecuencias();
                        bodyHtml.innerHTML=`
                            <h1>Clase de Posiciones</h1>
                            <section class="container2">
                                <section class="datos">
                                    <p class="estatic">Profesor: </p>
                                    <p class="dinamic">${clases.pociones}</p>
                                    <p class="estatic">Hora: </p>
                                    <p class="dinamic">${clasePociones.hora}</p>
                                </section>
                            </section>
                            <section class="container2">
                                <p class="estatic">Tienes lo siguiente para generar una posicion de "Felix Felicis", A trabajar!</p>
                                <p>ingredientes: ${clasePociones.ingredientes}</p>   
                                <p>tiempo: ${clasePociones.tiempoPreparacion}</p>   
                                <p>Resultado: ${clasePociones.pocionPreparada}</p>   
                            </section>
                            <button class="my_button5" type="button" >Atras</button>                
                        `;
                        botonAtras.addEventListener('click',e=>{
                            bodyHtml.innerHTML=`
                            <h1>Seleccion de clases</h1>
                            <section class="container2">
                                <section class="datos">
                                    <p class="estatic">Nombre del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.nombre}</p>
                                    <p class="estatic">Edad del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.edad}</p>  
                                    <p class="estatic">Linaje del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.linaje}</p>   
                                    <p class="estatic">Cualidades: </p>
                                    <p class="dinamic">${estudianteHogwarts.cualidades}</p>
                                    <p class="estatic">Casa: </p>
                                    <p class="dinamic">${estudianteHogwarts.casa}</p>    
                                </section>
                            </section>
                            <section class="container2">
                                <section class="col-sm-3">
                                    <p>Seleccione la clase que deseas ingresar: </p>
                                    <select class="form-select" id="mis_clases">
                                        <option value="">Seleccione: </option>
                                        <option value="transformaciones">Transformaciones</option>
                                        <option value="herbologia">Herbologia</option>
                                        <option value="pociones">Pociones</option>
                                        <option value="encantamientos">Encantamientos</option>
                                        <option value="defensaContraLasArtesOscuras">Defensa contra las Artes Oscuras</option>
                                        <option value="animalesMagicos">Animales Magicos</option>
                                        <option value="historiaDeMagia">Historia de Magia</option>
                                    </select>
                                </section>
                                <button class="my_button4" type="button" >Ir a la clase seleccionada</button>           
                            </section>    
                        `;
                        let selectClas="";
                        const miClase= document.querySelector('#mis_clases');
                        miClase.addEventListener('input',e=>{
                            selectClas=e.target.value;
                        })
                        })
                    break;
                    case'herbologia':
                        bodyHtml.innerHTML=`
                            <h1>Clase de Herbologia</h1>
                            <section class="container2">
                                <section class="datos">
                                    <p class="estatic">Profesor: </p>
                                    <p class="dinamic">${clases.herbologia}</p>
                                </section>
                            </section>
                            <section class="container2">
                                <p class="estatic">En esta clase tienes que Tienes lo siguiente para generar una posicion de "Felix Felicis", A trabajar!</p>
                                <p>ingredientes: ${clasePociones.ingredientes[Object.keys, Object.values]}</p>   
                                <p>tiempo: ${clasePociones.tiempoPreparacion}</p>   
                                <p>Resultado: ${clasePociones.pocionPreparada}</p>   
                            </section>
                            <button class="my_button5" type="button" >Atras</button>                
                        `;
                        botonAtras.addEventListener('click',e=>{
                            bodyHtml.innerHTML=`
                            <h1>Seleccion de clases</h1>
                            <section class="container2">
                                <section class="datos">
                                    <p class="estatic">Nombre del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.nombre}</p>
                                    <p class="estatic">Edad del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.edad}</p>  
                                    <p class="estatic">Linaje del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.linaje}</p>   
                                    <p class="estatic">Cualidades: </p>
                                    <p class="dinamic">${estudianteHogwarts.cualidades}</p>
                                    <p class="estatic">Casa: </p>
                                    <p class="dinamic">${estudianteHogwarts.casa}</p>    
                                </section>
                            </section>
                            <section class="container2">
                                <section class="col-sm-3">
                                    <p>Seleccione la clase que deseas ingresar: </p>
                                    <select class="form-select" id="mis_clases">
                                        <option value="">Seleccione: </option>
                                        <option value="transformaciones">Transformaciones</option>
                                        <option value="herbologia">Herbologia</option>
                                        <option value="pociones">Pociones</option>
                                        <option value="encantamientos">Encantamientos</option>
                                        <option value="defensaContraLasArtesOscuras">Defensa contra las Artes Oscuras</option>
                                        <option value="animalesMagicos">Animales Magicos</option>
                                        <option value="historiaDeMagia">Historia de Magia</option>
                                    </select>
                                </section>
                                <button class="my_button4" type="button" >Ir a la clase seleccionada</button>           
                            </section>    
                        `;
                        let selectClas="";
                        const miClase= document.querySelector('#mis_clases');
                        miClase.addEventListener('input',e=>{
                            selectClas=e.target.value;
                        })
                        })
                    break;
                    case'encantamientos':
                        bodyHtml.innerHTML=`
                            <h1>Clase de Encantamientos</h1>
                            <section class="container2">
                                <section class="datos">
                                    <p class="estatic">Profesor: </p>
                                    <p class="dinamic">${clases.encantamientos}</p>
                                </section>
                            </section>
                            <section class="container2">
                                <p class="estatic">Van aprender a levitar Objetos, aprender "WinGardiumLeviosa", A trabajar!</p>  
                            </section>
                            <button class="my_button5" type="button" >Atras</button>                
                        `;
                        botonAtras.addEventListener('click',e=>{
                            bodyHtml.innerHTML=`
                            <h1>Seleccion de clases</h1>
                            <section class="container2">
                                <section class="datos">
                                    <p class="estatic">Nombre del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.nombre}</p>
                                    <p class="estatic">Edad del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.edad}</p>  
                                    <p class="estatic">Linaje del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.linaje}</p>   
                                    <p class="estatic">Cualidades: </p>
                                    <p class="dinamic">${estudianteHogwarts.cualidades}</p>
                                    <p class="estatic">Casa: </p>
                                    <p class="dinamic">${estudianteHogwarts.casa}</p>    
                                </section>
                            </section>
                            <section class="container2">
                                <section class="col-sm-3">
                                    <p>Seleccione la clase que deseas ingresar: </p>
                                    <select class="form-select" id="mis_clases">
                                        <option value="">Seleccione: </option>
                                        <option value="transformaciones">Transformaciones</option>
                                        <option value="herbologia">Herbologia</option>
                                        <option value="pociones">Pociones</option>
                                        <option value="encantamientos">Encantamientos</option>
                                        <option value="defensaContraLasArtesOscuras">Defensa contra las Artes Oscuras</option>
                                        <option value="animalesMagicos">Animales Magicos</option>
                                        <option value="historiaDeMagia">Historia de Magia</option>
                                    </select>
                                </section>
                                <button class="my_button4" type="button" >Ir a la clase seleccionada</button>           
                            </section>    
                        `;
                        let selectClas="";
                        const miClase= document.querySelector('#mis_clases');
                        miClase.addEventListener('input',e=>{
                            selectClas=e.target.value;
                        })
                        })
                    break;
                    case'animalesMagicos':
                        bodyHtml.innerHTML=`
                            <h1>Clase de Animales Magicos</h1>
                            <section class="container2">
                                <section class="datos">
                                    <p class="estatic">Profesor: </p>
                                    <p class="dinamic">${clases.animalesMagicos}</p>
                                </section>
                            </section>
                            <section class="container2">
                                <p class="estatic">Van aprender Montar un EpoGlifo, Muestren respeto antes!</p>  
                            </section>
                            <button class="my_button5" type="button" >Atras</button>                
                        `;
                        botonAtras.addEventListener('click',e=>{
                            bodyHtml.innerHTML=`
                            <h1>Seleccion de clases</h1>
                            <section class="container2">
                                <section class="datos">
                                    <p class="estatic">Nombre del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.nombre}</p>
                                    <p class="estatic">Edad del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.edad}</p>  
                                    <p class="estatic">Linaje del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.linaje}</p>   
                                    <p class="estatic">Cualidades: </p>
                                    <p class="dinamic">${estudianteHogwarts.cualidades}</p>
                                    <p class="estatic">Casa: </p>
                                    <p class="dinamic">${estudianteHogwarts.casa}</p>    
                                </section>
                            </section>
                            <section class="container2">
                                <section class="col-sm-3">
                                    <p>Seleccione la clase que deseas ingresar: </p>
                                    <select class="form-select" id="mis_clases">
                                        <option value="">Seleccione: </option>
                                        <option value="transformaciones">Transformaciones</option>
                                        <option value="herbologia">Herbologia</option>
                                        <option value="pociones">Pociones</option>
                                        <option value="encantamientos">Encantamientos</option>
                                        <option value="defensaContraLasArtesOscuras">Defensa contra las Artes Oscuras</option>
                                        <option value="animalesMagicos">Animales Magicos</option>
                                        <option value="historiaDeMagia">Historia de Magia</option>
                                    </select>
                                </section>
                                <button class="my_button4" type="button" >Ir a la clase seleccionada</button>           
                            </section>    
                        `;
                        let selectClas="";
                        const miClase= document.querySelector('#mis_clases');
                        miClase.addEventListener('input',e=>{
                            selectClas=e.target.value;
                        })
                        })
                    break;
                    case'historiaDeMagia':
                        bodyHtml.innerHTML=`
                            <h1>Clase de Animales Magicos</h1>
                            <section class="container2">
                                <section class="datos">
                                    <p class="estatic">Profesor: </p>
                                    <p class="dinamic">${clases.historiaDeMagia}</p>
                                </section>
                            </section>
                            <section class="container2">
                                <p class="estatic">Van a conocer la historia de Tom Riddle</p>  
                            </section>
                            <button class="my_button5" type="button" >Atras</button>                
                        `;
                        botonAtras.addEventListener('click',e=>{
                            bodyHtml.innerHTML=`
                            <h1>Seleccion de clases</h1>
                            <section class="container2">
                                <section class="datos">
                                    <p class="estatic">Nombre del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.nombre}</p>
                                    <p class="estatic">Edad del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.edad}</p>  
                                    <p class="estatic">Linaje del estudiante: </p>
                                    <p class="dinamic">${estudianteHogwarts.linaje}</p>   
                                    <p class="estatic">Cualidades: </p>
                                    <p class="dinamic">${estudianteHogwarts.cualidades}</p>
                                    <p class="estatic">Casa: </p>
                                    <p class="dinamic">${estudianteHogwarts.casa}</p>    
                                </section>
                            </section>
                            <section class="container2">
                                <section class="col-sm-3">
                                    <p>Seleccione la clase que deseas ingresar: </p>
                                    <select class="form-select" id="mis_clases">
                                        <option value="">Seleccione: </option>
                                        <option value="transformaciones">Transformaciones</option>
                                        <option value="herbologia">Herbologia</option>
                                        <option value="pociones">Pociones</option>
                                        <option value="encantamientos">Encantamientos</option>
                                        <option value="defensaContraLasArtesOscuras">Defensa contra las Artes Oscuras</option>
                                        <option value="animalesMagicos">Animales Magicos</option>
                                        <option value="historiaDeMagia">Historia de Magia</option>
                                    </select>
                                </section>
                                <button class="my_button4" type="button" >Ir a la clase seleccionada</button>           
                            </section>    
                        `;
                        let selectClas="";
                        const miClase= document.querySelector('#mis_clases');
                        miClase.addEventListener('input',e=>{
                            selectClas=e.target.value;
                        })
                        })
                    break;
                }
            })
        });
    })
})
