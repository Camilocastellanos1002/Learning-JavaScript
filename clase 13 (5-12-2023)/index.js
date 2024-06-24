/* 1 DOCUMENT OBJET MODEL - DOM */
/* ------------------------------------------------------------------------ */
console.log("hello");
const body = document.body;
console.log(body);

const head = document.head;
console.log(head);

const domain = document.domain;
console.log(domain);

const url = document.baseURI;
console.log(url);

const formulario = document.forms;
console.log(formulario);

const formularioHijo= document.forms[0];
console.log(formularioHijo);

const enlaces = document.links;
console.log(enlaces);


/* 1.1 seleccionar elementos por su clase - getElementsByClassName*/
const navBg = document.getElementsByClassName('nav-bg');
console.log(navBg);

const navegacionPrincipal= document.getElementsByClassName('navegacion-principal');
console.log(navegacionPrincipal);

const diseñoContainer = document.getElementsByClassName('servicios_container');
console.log(diseñoContainer);

/* 1.2 seleccionar elementos por su id - getElementById */
const services = document.getElementById('services');
console.log(services);

/* 1.2.1 seleccionar elementos por nombre etiqueta html - getElementsByTagName */

const subtitulo = document.getElementsByTagName('h1');
console.log(subtitulo);
/* 1.3 Seleccionar elementos con querySelector -
Solo el primero - clases, id, tag*/

/* class */
const serviciosClass = document.querySelector('.servicios_container');
console.log(serviciosClass);

const serviciosContainer = document.querySelector('.diseño_container');
console.log(serviciosContainer);

/* id */
const servicesId = document.querySelector('#services');
console.log(servicesId);

/* tag */
const footer = document.querySelector('footer');
console.log(footer);

/* 1.4 Seleccionar todos los elementos con querySelectorAll -
todos - clases,id,tag*/
const serviciosContainerAll = document.querySelectorAll('.diseño_container');
console.log(serviciosContainerAll);

const clientes = document.querySelector('.Clientes');
console.log(clientes);

/* 1.5 Seleccionar y modificar el texto - textContent */
//.innerHTML;
//.innerText;
const titulo = document.querySelector('.titulito h1');
// console.log(titulo);
titulo.textContent = "He is the best dudeeeeeee";

titulo.innerHTML= `
<h2>Hola Camilo</h2>
<p>Vas a salir de esta!</p>`

/* 1.6 Seleccionar y modificar imagenes imagen.src*/
const imagenDiseñoWeb = document.querySelector('img');
imagenDiseñoWeb.src = "coding.jpg"

/* 1.7 Traversing de Padre a Hijo - children[] recorre hacia el hijo*/
const menuTraversing = document.querySelector('.navegacion-principal');
menuTraversing.children[3].textContent = "Menu Luisa";

const menuTraversing1 = document.querySelector('.nav-bg');
menuTraversing1.children[0].children[1].textContent = "Lelo";

const menuTraversing2 = document.querySelector('.hero');
menuTraversing2.children[0].children[2].textContent = "contactanus";

/* 1.8 Traversing de Hijo a Padre - parentElement - recorre
hacia el padre*/


/* 1.9 Traversing - hermanos nextElementSibling previousElementSibling*/


/* 1.10. traversing primero - ultimo firstElementChild lastElementChild */











