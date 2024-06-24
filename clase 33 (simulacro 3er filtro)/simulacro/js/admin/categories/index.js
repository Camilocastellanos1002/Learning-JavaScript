//importaciones
import { get, post, deleteC } from "../../api/clientHTTP.js";
import { url_categories } from "../../api/urls.js";
import { idCategoryUpdate, printCategories, loadInfoCategory} from "./funtionsDOM.js";
//selectores
const formCategories = document.querySelector('#formCategories');
export const nameCategory = document.querySelector('#nameCategory');
export const descriptionCategory = document.querySelector('#descriptionCategory');



formCategories.addEventListener('submit',e=>{
    e.preventDefault();
    if (idCategoryUpdate.value) {
        //actualizar
        updateCategory(idCategoryUpdate.value);
    }else{
        createCategory();   
    }
})


async function createCategory(){
    const  newCategory ={
        name: nameCategory.value,
        description: descriptionCategory.value
    };
    await post(url_categories,newCategory);
}
async function getCategories(){
    const data = await get(url_categories);
    console.log(data);
    printCategories(data);  

}
export async function deleteCategory(id){
    console.log(`eliminando ${id}`);
    await deleteC(`${url_categories}/${id}`)

}
export async function updateCategory(id){
    const categoryUpdate = {
        name: nameCategory.value,
        description : descriptionCategory.value
    }
    await loadInfoCategory(`${url_categories}/${id}`)
}


document.addEventListener('DOMContentLoaded',()=>{
    getCategories();
})