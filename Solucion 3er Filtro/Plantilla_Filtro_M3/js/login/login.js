//importaciones
import { urlCompanies } from "../api/urls.js";
import { get } from "../api/clientHTTP.js";

//selectores
const form = document.querySelector('#formulario');
const btnform = document.querySelector('#buttonformu')
const email= document.querySelector('#email');
const password = document.querySelector('#password');

//funciones y eventos
form.addEventListener('submit',async e=>{
    e.preventDefault();
    login();
})
async function login(){
    const companies= await get(`${urlCompanies}?email=${email.value}`);
    //console.log(companies);
    if (!companies) {
        console.error("Email no registrado!");
        return;
    }
    if (companies[0].nit !== password.value) {
        console.error("Contraseña invalida");
        return;
    }
    console.log("Datos ingresados satisfactoriamente");
    localStorage.setItem('company',JSON.stringify(companies));
    window.location.href="administrator.html"
}
