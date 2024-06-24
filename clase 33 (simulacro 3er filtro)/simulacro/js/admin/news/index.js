import { deleteC, get, update } from "../../api/clientHTTP.js";
import { url_base, url_categories, url_news } from "../../api/urls.js";
import { post } from "../../api/clientHTTP.js";
import { printNews } from "./funtionsDOM.js";

const formNews = document.querySelector('#formNews');
export const urlImage = document.querySelector('#urlImage');
export const nameNotice = document.querySelector('#nameNotice');
export const idCategory = document.querySelector('#idCategory');
export const contentNotice = document.querySelector('#contentNotice');
export const idNewsUpdate = document.querySelector('#idNewsUpdate');



formNews.addEventListener('submit',e=>{
    e.preventDefault();
    if (idNewsUpdate.value) {
        updateNew();
    }else{
        createNew();
    }
})

async function createNew(){
    const user = JSON.parse(localStorage.getItem("user"));

    if (!idCategory.value) {
        console.error("La categoria es obligatoria");
        return
    }
    const newNotice = {
        name: nameNotice.value,
        image: urlImage.value,
        categoryId: idCategory.value,
        content: contentNotice.value,
        userId: user.id,
        publicationDate: new Date().toISOString().split("T")[0],

    }
    await post(url_news, newNotice);

}
export async function loadCategories(){
    const categories = await get(url_categories);
    console.log(categories);
    categories.forEach(category => {
        const option = document.createElement('option');
        option.textContent = category.name;
        option.value= category.id;
        idCategory.appendChild(option);
    });

}
async function getNews(){
    const news = await get(`${url_news}?_embed=category&_embed=user`);
    console.log(news);
    printNews(news);
}
export async function deleteNews(id){
    await deleteC(`${url_news}/${id}`);
}

async function updateNew(id){
    const user = JSON.parse(localStorage.getItem("user"));

    const newNotice = {
        name: nameNotice.value,
        image: urlImage.value,
        categoryId: idCategory.value,
        content: contentNotice.value,
        userId: user.id,
        publicationDate: new Date().toISOString().split("T")[0],
    }
    await update(`${url_news}/${idNewsUpdate.value}`,newNotice);

}


document.addEventListener('DOMContentLoaded',()=>{
    loadCategories();
    getNews();
})



