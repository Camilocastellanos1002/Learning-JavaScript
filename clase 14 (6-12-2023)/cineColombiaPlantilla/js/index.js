const titulo = document.querySelector('title');
titulo.textContent="Cartelera Cine Colombia"

const logo = document.querySelector('.logo');
logo.src="img/cc.jpg"

const nav = document.querySelector('nav');
nav.innerHTML=`<a href="">Cartelera</a>
<a href="">Pronto</a>
<a href="">Cineco Alternativo</a>
<a href="">Comidas</a>`

const body = document.querySelector('body');
body.children[0].children[2].children[0].placeholder="Buscar Pelicula";

const ciudad = document.querySelector('.ciudad');
ciudad.innerHTML=`<a>Medellin</a>`

const container=document.querySelector('.container');

const h2=document.querySelector('.container h2');
h2.textContent = "Cine Colombia - Peliculas";

container.children[1].children[0].children[0].src="img/gato.jpg";
container.children[1].children[1].children[0].src="img/ballena.jpg";
container.children[1].children[2].children[0].src="img/houston.jpg";
container.children[1].children[3].children[0].src="img/conejo.jpg";

const parrafos=document.querySelector('.peliculas');
parrafos.children[0].children[1].textContent="Gato con Botas";
parrafos.children[1].children[1].textContent="La Ballena";
parrafos.children[2].children[1].textContent="Whitney Houston";
parrafos.children[3].children[1].textContent="Academia de Conejos";

const footer = document.querySelector('footer');
footer.innerHTML=`
<img src="img/cc.jpg" height="100px" >
<nav>
    <a href="">Informacion Legal</a>
    <hr>
    <a href="">Acerca de Cineco</a>
    <hr>
    <a href="">Contactanos PQRS</a>
    <hr>
    <a href="">Preguntas Frecuentes</a>
    <hr>
    <a href="">Redes Sociales</a>
    <hr>
</nav>
<p>Todos los derechos reservados</p>
`

