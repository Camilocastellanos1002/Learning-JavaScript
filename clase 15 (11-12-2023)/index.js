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
const main = document.querySelector('img');
// main.parentElement.parentElement.parentElement;
console.log(main);
// console.log(main.parentElement.parentElement.parentElement);

main.parentElement.parentElement.parentElement.parentElement.children[0].textContent="Productos";
/* 1.9 Traversing - hermanos nextElementSibling previousElementSibling*/
const nosotros = document.querySelector('.navegacion-principal');
nosotros.children[1].nextElementSibling.textContent= "Despues de nosotros";

nosotros.children[1].previousElementSibling.textContent ="Antes de nosotros";

/* 1.10. traversing primero - ultimo firstElementChild lastElementChild */

const contenedor2 = document.querySelector('.contenedor');
contenedor2.firstElementChild.textContent="Primero";
contenedor2.lastElementChild.textContent="Ultimo";

/*1.11 eliminar elementos del dom. desde si mismo - remove() */
contenedor2.firstElementChild.remove();

/*1.12 Eliminar elementos del dom- desde referencia del padre */
contenedor2.removeChild(contenedor2.children[0]);

/*2 Generar html con javascript DOM Scripting */
/*2.1 crear elemento html createElement('elemento') */
const menuPrivado = document.createElement('a');

/*2.2 añadir texto al elemento - textContent */
menuPrivado.textContent = "Acceso Privado";

/*2.3 añadir atributos href al elemento */
menuPrivado.href = "private.html";

/*2.4 añadir target al elemento */
menuPrivado.target="_blank";
console.log(menuPrivado);

/*2.5 seleccionar el padre (ej la navegacion) */
const mainNav = document.querySelector('.navegacion-principal');

/*2.6 añadir elemento al final - appendChild() */
mainNav.appendChild(menuPrivado);

/*2.7 añadir elemento en cualquier lugar
insertBefore(elemento, nodo de referencia) */

mainNav.insertBefore(menuPrivado, contenedor2.children[1]);

/*dom scripting - crear elementos */
const newProduct = document.createElement('h3');
newProduct.textContent= "Metaverso";

const newImage = document.createElement('img');
newImage.src ="coding.jpg";

const newParagraph= document.createElement('p');
newParagraph.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 4";

const newSection = document.createElement('section');
newSection.classList.add('diseño_container');
newSection.appendChild(newProduct);
newSection.appendChild(newImage)
newImage.style.width="250px";
newSection.appendChild(newParagraph);

const servicios1= document.querySelector('#services');
servicios1.appendChild(newSection);

//2 dom scripting
const newProduct1 = document.createElement('h3');
newProduct1.textContent= "Ingenieria";

const newImage1 = document.createElement('img');
newImage1.src ="coding.jpg";

const newParagraph1= document.createElement('p');
newParagraph1.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 5";

const newSection1 = document.createElement('section');
newSection1.classList.add('diseño_container');
newSection1.appendChild(newProduct1);
newSection1.appendChild(newImage1)
newImage1.style.width="250px";
newSection1.appendChild(newParagraph1);

const servicios2= document.querySelector('#services');
servicios2.appendChild(newSection1);

//3 dom scripting
const newProduct2 = document.createElement('h3');
newProduct2.textContent= "VideoJuegos";

const newImage2 = document.createElement('img');
newImage2.src ="coding.jpg";

const newParagraph2= document.createElement('p');
newParagraph2.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 6";

const newSection2 = document.createElement('section');
newSection2.classList.add('diseño_container');
newSection2.appendChild(newProduct2);
newSection2.appendChild(newImage2)
newImage2.style.width="250px";
newSection2.appendChild(newParagraph2);

const servicios3= document.querySelector('#services');
servicios2.appendChild(newSection2);






