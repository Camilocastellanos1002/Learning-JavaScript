import { cleanHtml } from "../../utils/cleanHTML.js";
import { deleteCategory, nameCategory, descriptionCategory } from "./index.js";



const categoriasTbody = document.querySelector('#categorias-tbody');
export const idCategoryUpdate = document.querySelector('#idCategoryUpdate');
export const btnAddCategoryModal = document.querySelector('#btnAddCategoryModal');

export function printCategories(category){
    category.forEach(category => {

        categoriasTbody.innerHTML="";
        //cleanHtml(categoriasTbody);

        const tr = document.createElement('tr');
        const tdId= document.createElement('td');
        const tdName= document.createElement('td');
        const tdDescription= document.createElement('td');
        const tdButtons= document.createElement('td');

        const btnEdit= document.createElement('button');
        btnEdit.textContent="Editar";
        const btnDelete= document.createElement('button');
        btnDelete.textContent="Eliminar";

        btnDelete.classList.add("btn", "btn-danger");
        btnEdit.classList.add("btn", "btn-primary");

        btnDelete.addEventListener('click',e=>{
            //console.log("Eliminando");
            deleteCategory(category.id);
            
        });
        btnEdit.addEventListener('click',e=>{
            //console.log("Editando");
            loadInfoCategory(category);
        });

        tdId.textContent= category.id;
        tdName.textContent = category.name;
        tdDescription.textContent = category.description;
        tdButtons.appendChild(btnEdit);
        tdButtons.appendChild(btnDelete);

        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdDescription);
        tr.appendChild(tdButtons);
        categoriasTbody.appendChild(tr);
    });
}

export function loadInfoCategory(category){
    nameCategory.value = category.name;
    descriptionCategory.value = category.description;
    idCategoryUpdate.value = category.id;
    btnAddCategoryModal.click();
}