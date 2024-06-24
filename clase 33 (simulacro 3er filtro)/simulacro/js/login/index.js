//importaciones
import { url_users } from "../api/urls.js";

//selectores
const formLogin = document.querySelector('#formlogin');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


//eventos
formLogin.addEventListener('submit',e=>{
    e.preventDefault();
    Login();
})

async function Login(){
    const response = await fetch(`${url_users}?email=${email.value}`);
    const data = await response.json();

    console.log(data);
    if (!data) {
        console.error("Email no registrado!");
        return;
    }
    if (data[0].password !== password.value) {
        console.error("Contraseña invalida");
        return;
    }

    console.log("Datos ingresados satisfactoriamente");
    localStorage.setItem('user',JSON.stringify(data[0]));
    window.location.href="administrator.html"
}