console.log(coders);


/*6. selectores */
const nombreCoder = document.querySelector('#nombre');
const edadCoder = document.querySelector('#edad');
const minimoPromedio = document.querySelector('#minimo');
const maximoPromedio = document.querySelector('#maximo');
const clanCoder = document.querySelector('#clanRiwi');
const nivelInglesCoder = document.querySelector('#nivelIngles');
const especialidadCoder = document.querySelector('#especialidad');
const expertoTecnologiaCoder = document.querySelector('#expertoTecnologia');
const buscadorCoder = document.querySelector('#buscador');




/*1. crear dinamicamente los valores del select con nombres coders */

coders.forEach((coder)=>{
    const opcion = document.createElement('option');
    opcion.value= coder.nombre;
    opcion.textContent = coder.nombre;
    document.querySelector('#nombre').appendChild(opcion);

});

/*2. crear dinamicamente los rango de edades de los coders (15-45) */

for (let edad = 15; edad <= 45; edad++) {
    const opcion = document.createElement('option');
    opcion.value = edad;
    opcion.textContent = edad;
    document.querySelector('#edad').appendChild(opcion);
};

/*7. event listener para los filtros */
nombreCoder.addEventListener('input',event=>{
    criteriosSeleccionado.nombre =event.target.value;
    
    /*8. llamado de funcion de alto nivel */
    filtrarCoder();

})

edadCoder.addEventListener('input',event=>{
    criteriosSeleccionado.edad =event.target.value;
    filtrarCoder();


})

minimoPromedio.addEventListener('input',event=>{
    criteriosSeleccionado.promedioMin =event.target.value;
    filtrarCoder();

})

maximoPromedio.addEventListener('input', event=>{
    criteriosSeleccionado.promedioMax = event.target.value;
    filtrarCoder();

})

clanCoder.addEventListener('input',event=>{
    criteriosSeleccionado.clanRiwi= event.target.value;
    filtrarCoder();

})

nivelInglesCoder.addEventListener('input',event=>{
    criteriosSeleccionado.nivelIngles = event.target.value;
    filtrarCoder();

})

especialidadCoder.addEventListener('input',event=>{
    criteriosSeleccionado.especialidad = event.target.value;
    filtrarCoder();

})

expertoTecnologiaCoder.addEventListener('input',event=>{
    criteriosSeleccionado.expertoTecnologia = event.target.value;
    filtrarCoder();

})


/*3. event listener DOM */
document.addEventListener('DOMContentLoaded',()=>{
    showCoders(coders);
    console.log(criteriosSeleccionado);
    selectCoder();
});
/*5. declaracion objeto para criterios de busqueda  */
const criteriosSeleccionado={
    nombre: "",
    edad: "",
    promedioMin : "",
    promedioMax: "",
    clanRiwi: "",
    nivelIngles: "",
    especialidad: "",
    expertoTecnologia : "",

}

/*4. funcion para inyectar directamente al html las cards*/

function showCoders (coders){
    /*selector para cards */
    const contenedorTarjetas = document.querySelector('#tarjetas');
    limpiar();
    
    coders.forEach((coder)=>{

        /*destructuring */
        const {imagen,nombre,promedio, detalle,especialidad,expertoTecnologia,celular,direccion,id}=coder;
        const coderHtml =document.createElement('p');
        coderHtml.innerHTML= `
        <div class="card" style="width: 18rem;">
            <img src="img/${imagen}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${detalle}</p>
            </div>
            <ul class="list-group list-group-flush">
                <a id="miBoton" href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" myname="${nombre}" img="${imagen}" prom="${promedio}" espe="${especialidad}" tecno="${expertoTecnologia}"  cel="${celular}" dir="${direccion}" >Detalles</a>

                <a href="#" class="btn btn-primary boton" id="${id}">Hire</a>

            </ul>
        </div>
        `;
        contenedorTarjetas.appendChild(coderHtml);

    });
}

/*8.1 declaracion de funcion de alto nivel */

function filtrarCoder(){
    const resultado = coders
    .filter(filtrarNombre)
    .filter(filtrarEdad)
    .filter(filtrarPromedioMinimo)
    .filter(filtrarPromedioMaximo)
    .filter(filtrarClanRiwi)
    .filter(filtrarNivelIngles)
    .filter(filtrarEspecialidad)
    .filter(filtrarExpertoTecnologia);
    console.log(resultado);

    if (resultado.length) {
        showCoders(resultado);
    } else {
        const notFoundHTML = document.createElement('p');
        notFoundHTML.innerHTML=`
            <img id="notFound" src="img/Not_found.jpg" class="card-img-top">
            <br>
            No se encontro el Coder
        `;
        limpiar();
        document.querySelector('#tarjetas').appendChild(notFoundHTML);
    }
}

/*8.2 declaracion de funcion filtrarNombre */

function filtrarNombre(coder){
    if(criteriosSeleccionado.nombre){
        return coder.nombre === criteriosSeleccionado.nombre;
    }
    else{
        return coder;
    }
}

function filtrarEdad(coder){
    if(criteriosSeleccionado.edad){
        return coder.edad === Number(criteriosSeleccionado.edad);
    }
    else{
        return coder;
    }
}
function filtrarPromedioMinimo(coder){
    if(criteriosSeleccionado.promedioMin){
        return coder.promedio <= Number(criteriosSeleccionado.promedioMin);
    }
    else{
        return coder;
    }
}
function filtrarPromedioMaximo(coder){
    if(criteriosSeleccionado.promedioMax){
        return coder.promedio >= Number(criteriosSeleccionado.promedioMax);
    }
    else{
        return coder;
    }
}
function filtrarClanRiwi(coder){
    if(criteriosSeleccionado.clanRiwi ){
        return coder.clanRiwi === criteriosSeleccionado.clanRiwi;
    }
    else{
        return coder;
    }
}
function filtrarNivelIngles(coder){
    if(criteriosSeleccionado.nivelIngles ){
        return coder.nivelIngles === criteriosSeleccionado.nivelIngles;
    }
    else{
        return coder;
    }
}
function filtrarEspecialidad(coder){
    if(criteriosSeleccionado.especialidad ){
        return coder.especialidad === criteriosSeleccionado.especialidad;
    }
    else{
        return coder;
    }
}
function filtrarExpertoTecnologia(coder){
    if(criteriosSeleccionado.expertoTecnologia ){
        return coder.expertoTecnologia === criteriosSeleccionado.expertoTecnologia;
    }
    else{
        return coder;
    }
}

function limpiar(){
    let m= document.querySelectorAll('p');
    for (let a = 0; a < m.length; a++) {
        m[a].remove();
    }
}

/*Sistema de buscador */

buscadorCoder.addEventListener('input',e=>{
    criteriosSeleccionado.nombre=e.target.value;
    filtrarCoder();
})

const tbody = document.querySelector('tbody');
const rowModal = document.createElement('tr');

/* */
function selectCoder() {
    const coderDetails = document.querySelector('#tarjetas');
    coderDetails.addEventListener('click', loadDetails);
}

function loadDetails(e) {
    const imagen = e.target.getAttribute('img');
    const promedio = e.target.getAttribute ('prom');
    const especialidad = e.target.getAttribute('espe');
    const tecnologia = e.target.getAttribute('tecno');
    const nombre = e.target.getAttribute('myname');
    const cel = e.target.getAttribute('cel');
    const dir = e.target.getAttribute('dir');

    const coderTitulo= document.querySelector('#exampleModalLabel');
    coderTitulo.textContent= nombre;


    rowModal.innerHTML=`
        <td>
            <img id="imagenModal" src="img/${imagen}" width="180px" alt="">
        </td>
        <td>
            <p>${promedio}</p>
            <p>${promedio>4.5?"Contratado": "Siga estudiando"}</p>
        </td>
        <td>
            <p>${especialidad}</p>
        </td>
        <td>
            <p>${tecnologia}</p>
        </td>
        <td>
            <p>${cel}</p>
        </td>
        <td>
            <p>${dir}</p>
        </td>
    `;
    tbody.appendChild(rowModal);

}

/*Modulo de contratacion -------------------- hire --------------- */

/*selectores */
const cards =document.querySelector('#tarjetas');
const tbody_hire = document.querySelector('#tbody_hire');

/*event listeners */
cards.addEventListener('click',selectCards);
let arraysCard=[];
function selectCards (e){
    e.preventDefault();
    if(e.target.classList.contains('boton')){
        const selectCard = e.target.parentElement.parentElement;       console.log(selectCard);
        details(selectCard);
    }
}

function details (selectC){
    const cardDetail ={
        imagen: selectC.querySelector('img').src,
        nombre: selectC.querySelector('.card-title').textContent,
        detalle : selectC.querySelector('p').textContent,
        id: selectC.querySelector('.boton').getAttribute('id')
    }
    arraysCard =[...arraysCard, cardDetail];
    console.table(arraysCard);
    injectingCoderHtml();
}

function injectingCoderHtml(){
    arraysCard.forEach((card)=>{
        const {imagen, nombre, detalle, id} = card;
        const row = document.createElement('tr');
        row.innerHTML =`
            <td>
                <img src="${imagen}" width="200px"> 
            </td>
            <td>
                <h5>${nombre}</h5>
            </td>
            <td>
                <p>${detalle}</p>
            </td>
        `;
        tbody_hire.appendChild(row);
    })
}
