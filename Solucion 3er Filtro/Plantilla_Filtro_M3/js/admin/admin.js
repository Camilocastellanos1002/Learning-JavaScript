//importaciones
import { del, get, post } from "../api/clientHTTP.js";
import { urlJobs } from "../api/urls.js";
import { mostrarVacante} from "./funtions.js";


//selectores
const formVacante = document.querySelector('#formvacante');

const titleJob = document.querySelector('#title-job');
const experience = document.querySelector('#experience');
const salary = document.querySelector('#salary');
const location = document.querySelector('#Location');
const description = document.querySelector('#description');
const modality = document.querySelector('#selectModality');
const image = document.querySelector('#imagenR');
image.src="assets/img/logo.webp"

//eventos y funciones
formVacante.addEventListener('submit',e=>{
    e.preventDefault();
    crearVacante();
})

async function crearVacante(){
    const newVacante={
        titulo: titleJob.value,
        experience: experience.value,
        salary: salary.value,
        local: location.value,
        descrip:description.value,
        modal: modality.value,
        image:image,
        time: new Date().toDateString()
    }
    await post(urlJobs, newVacante);

}

addEventListener('DOMContentLoaded',e=>{
    getVacante()
})

async function getVacante(){
    const data = await get(urlJobs);
    console.log(data);
    mostrarVacante(data); 

}
export async function deleteVacante(id){
    await del(`${urlJobs}/${id}`)
}
