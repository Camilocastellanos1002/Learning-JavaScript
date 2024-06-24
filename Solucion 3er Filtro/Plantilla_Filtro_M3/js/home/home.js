//importaciones
import { clean } from "../utils/clean.js";
import { urlJobs } from "../api/urls.js";
import { get } from "../api/clientHTTP.js";
//import { mostrarVacante } from "../admin/funtions.js";

//selectores
const container= document.querySelector('#micontenedor');
const formsearch = document.querySelector('#formsearch');
const search = document.querySelector('#search1');
const modality= document.querySelector('#modality-filter');

//eventos y funciones
formsearch.addEventListener('submit',async e=>{
   e.preventDefault();
   //getJobs()
   const jobs = await get(`${urlJobs}?titulo=${search}&modal=${modality}`);
   console.log(jobs);
   //mostrarVacante(jobs)

})
async function homeJobs(){
    clean(container);
    const jobs = await get(`${urlJobs}`)
    jobs.forEach(element => {
        const card = document.createElement('section');
        card.className="card-job";
        const titleH2 = document.createElement('h2');
        const descriptJob = document.createElement('p');
        const {id,titulo,local,modal,descrip,time}=element;
        titleH2.textContent=titulo;
        descriptJob.textContent=descrip;
        card.appendChild(titleH2);
        card.appendChild(descriptJob);
        card.innerHTML+=`
            <div class="row">
                <div class="col-6">
                    <div class="d-flex gap-2 align-items-center fs-5 text-muted">
                        <i class="bx bx-current-location"></i>
                        <span class="fw-semibold">${local}</span>
                    </div>
                    <div class="d-flex gap-2 align-items-center fs-5 text-muted">
                        <i class="bx bx-time"></i>
                        <span class="fw-semibold">${time}</span>
                    </div>
                    

                </div>

                <div class="col-6 d-flex justify-content-end">
                <img
                    src="assets/img/logo.webp"
                    alt="logo"
                    height="80"
                    width="80"
                    class="object-fit-contain rounded-circle img-company"
                />
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

async function getJobs(){
    const job = await get(`${urlJobs}?_embed=companies`);
    console.log(job);
    mostrarVacante(job);
}

addEventListener('DOMContentLoaded',e=>{
 e.preventDefault();
    homeJobs();
})
