console.log(coders);

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

/*3. event listeners */
document.addEventListener('DOMContentLoaded',()=>{
    showCoders(coders);
});
/*funcion para inyectar directamente al html las cards*/

function showCoders (coders){
    /*selector para cards */
    const contenedorTarjetas = document.querySelector('#tarjetas');

    coders.forEach((coder)=>{
        const coderHtml =document.createElement('p');
        coderHtml.innerHTML= `
        <div class="card" style="width: 18rem;">
            <img src="img/${coder.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${coder.nombre}</h5>
            <p class="card-text">${coder.detalle}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${coder.expertoTecnologia}</li>
            </ul>
        </div>
        `;
        contenedorTarjetas.appendChild(coderHtml);

    });
}
