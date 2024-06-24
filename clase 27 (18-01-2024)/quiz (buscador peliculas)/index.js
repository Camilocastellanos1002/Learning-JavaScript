const busqueda= document.querySelector('#buscar');
const loadApi = document.querySelector('#contenido');

let miBuscador;
let arrayPeliculas=[];

const url="http://www.omdbapi.com";
const apiKey="6df3ad82";



busqueda.addEventListener('input',e=>{
    miBuscador=e.target.value;
    getDataPeliculas(miBuscador);
    console.log(miBuscador);

})

function getDataPeliculas(movie){
    fetch(`${url}?apikey=${apiKey}&s=${movie}`)
    .then(rta=>{
        console.log(rta);
        return rta.json();
    })
    .then(data=>{
        clean();
        console.log(data.Search);
        data.Search.forEach(element => {
            const {Title,Year,Poster,Type}=element;
            loadApi.innerHTML+=`
                <div class="card" style="width: 30rem;">
                <img src="${Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                <h1 class="card-title">${Title}</h1>
                <p class="card-text">Tipo: ${Type}</p>
                <p class="card-text">Año: ${Year}</p>
                <a href="#" class="btn btn-primary">Reservar</a>
                </div>
            </div>
            `;
        });

    })
}

function clean(){
    loadApi.innerHTML="";
}
