//importaciones
import { get, post } from "../api/clientHTTP.js";
import { urlCompanies } from "../api/urls.js";

//selectores
const form = document.querySelector('#formularioregistro');
const email= document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password-confirmation');
const company = document.querySelector('#company');
const imgCompany = document.querySelector('#img-company');
const nitCompany = document.querySelector('#nitcompany');

//eventos
form.addEventListener('submit',async e=>{
    e.preventDefault();
    const companies = await get(urlCompanies);
    console.log(companies);
    //companies.forEach(element => {
    if (!companies.includes(email.value) ) {
        register();
    }else if (!companies.includes(nitCompany.value)){
        register();
    }else if ((password.value === passwordConfirmation.value)) {
        register();
    } else if ((password.value.lenght > 6)) {
        register();
    }else{
        alert("Registro invalido, Verifique la informacion ingresada");
    }
})

async function register(){
    const newCompany={
        name:company.value, 
        img:"",
        email:email.value,
        nit:nitCompany.value,
        password: password.value
    }
    console.log(newCompany);
    const newC = await post(urlCompanies,newCompany);
    console.log("registro hecho satisfactoriamente");
}