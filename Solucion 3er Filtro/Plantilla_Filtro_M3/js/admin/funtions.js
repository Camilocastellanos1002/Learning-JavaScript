//importaciones
import { deleteVacante } from "./admin.js";
import { clean } from "../utils/clean.js";
const tbody = document.querySelector('#tbody');

//funcion principal
export function mostrarVacante(vacantes){

    //tbody.innerHTML="";
    clean(tbody)
    vacantes.forEach(vacante => {
        const tr = document.createElement('tr');
        const tdImage = document.createElement('td');

        //selectores y eventos
        tdImage.textContent= vacante.image;
        const tdCompany = document.createElement('td');
        tdCompany.textContent = vacante.titulo
        const tdDescription = document.createElement('td');
        tdDescription.textContent = vacante.descrip;
        const tdLocation = document.createElement('td');
        tdLocation.textContent= vacante.local;
        const tdExperience = document.createElement('td');
        tdExperience.textContent= vacante.experience;
        const tdModality = document.createElement('td');
        tdModality.textContent = vacante.modal;
        const tdSalary = document.createElement('td');
        tdSalary.textContent= vacante.salary;
        const tdAxc= document.createElement('td');
        const btnEdit= document.createElement('button');
        const btnDelete= document.createElement('button');

        btnEdit.addEventListener('click',e=>{
            actualizarTrabajo(vacante.id);

        })
        btnEdit.className="btn btn-primary";
        btnEdit.textContent="Edit"
        btnDelete.addEventListener('click', e=>{
            deleteVacante(vacante.id);
        })
        btnDelete.className="btn btn-danger";
        btnDelete.textContent="Delete"
        //agregar
        tdAxc.appendChild(btnEdit);
        tdAxc.appendChild(btnDelete)

        //llenar tabla
        tr.appendChild(tdImage);
        tr.appendChild(tdCompany);
        tr.appendChild(tdDescription);
        tr.appendChild(tdLocation);
        tr.appendChild(tdExperience);
        tr.appendChild(tdModality);
        tr.appendChild(tdSalary);
        tr.appendChild(tdAxc);

        tbody.appendChild(tr);
    });
}