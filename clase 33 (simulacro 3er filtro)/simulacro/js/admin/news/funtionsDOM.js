import { cleanHtml } from "../../utils/cleanHTML.js";
import { loadInfoCategory } from "../categories/funtionsDOM.js";
import { contentNotice, deleteNews, idCategory, idNewsUpdate, loadCategories, nameNotice, urlImage } from "./index.js";

const btnOpenModalNews = document.querySelector('#btnOpenModalNews');
const newsTbody = document.querySelector('#news-tbody');

export function printNews(news){
    cleanHtml(newsTbody);
    news.forEach(tempNew => {
        const tr = document.createElement('tr');

        const tdImage= document.createElement('td');
        const tdTitle= document.createElement('td');
        const tdContent= document.createElement('td');
        const tdDate= document.createElement('td');
        const tdUser= document.createElement('td');
        const tdCategory= document.createElement('td');
        const tdAxc= document.createElement('td');

        const image = document.createElement('img');
        image.src= tempNew.image;
        image.width="50";
        image.height="50";
        image.classList.add("rounded-circle");

        const btnEdit = document.createElement('button');
        btnEdit.textContent="Editar";
        btnEdit.classList.add("btn","btn-primary");
        const btnDelete = document.createElement('button');
        btnDelete.textContent="Eliminar";
        btnDelete.classList.add("btn","btn-danger");

        btnDelete.addEventListener('click',e=>{
            deleteNews(tempNew.id);  
        });
        btnEdit.addEventListener('click',e=>{
            // console.log("Editando");
            loadInfoNew(tempNew);
        });

        tdTitle.textContent = tempNew.name;
        tdContent.textContent = tempNew.content;
        tdDate.textContent = tempNew.publicationDate;
        tdUser.textContent = tempNew.user.name;
        tdCategory.textContent = tempNew.category.name;

        tdImage.appendChild(image);
        tdAxc.appendChild(btnEdit);
        tdAxc.appendChild(btnDelete);

        tr.appendChild(tdImage);
        tr.appendChild(tdTitle);
        tr.appendChild(tdContent);
        tr.appendChild(tdDate);
        tr.appendChild(tdCategory);
        tr.appendChild(tdAxc);

        newsTbody.appendChild(tr);

    });
}

export function loadInfoNew(newTemp){
    btnOpenModalNews.click();
    nameNotice.value = newTemp.name;
    urlImage.value= newTemp.image;
    idCategory.value = newTemp.categoryId;
    contentNotice.value = newTemp.content;
    idNewsUpdate.value = newTemp.id;


}