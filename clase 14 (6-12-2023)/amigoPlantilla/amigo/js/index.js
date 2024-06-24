const titulo = document.querySelector('title');
titulo.textContent="Biografia";

const nav = document.querySelector('header h1'); 
nav.textContent="Luisa Fernanda Cardenas Duque"

const container=document.querySelector('.container');
container.children[1].children[0].children[0].src="img/Luisa.jpeg";

const parrafos=document.querySelector('.seccion');
parrafos.children[0].children[1].innerHTML=`
<ul>
    <h3>Cualidades: </h3>
    <br>
    <li>Mujer Cansona <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-tongue-wink-2" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
    <path d="M15 10h-.01" />
    <path d="M10 14v2a2 2 0 1 0 4 0v-2m1.5 0h-7" />
    <path d="M7 10c.5 -1 2.5 -1 3 0" />
  </svg></li>
    <li>Mujer Toxica <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-sad-dizzy" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
    <path d="M8 9l2 2" />
    <path d="M10 9l-2 2" />
    <path d="M14 9l2 2" />
    <path d="M16 9l-2 2" />
  </svg></li>
    <li>Cocino mas yo <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-disabled-2" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M9 11a5 5 0 1 0 3.95 7.95" />
    <path d="M19 20l-4 -5h-4l3 -5l-4 -3l-4 1" />
  </svg></li>
    <li>Leal <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-xd" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
    <path d="M9 14h6a3 3 0 1 1 -6 0z" />
    <path d="M9 8l6 3" />
    <path d="M9 11l6 -3" />
  </svg></li>
    <li>Empalagosa <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heartbeat" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" />
    <path d="M3 13h2l2 3l2 -6l1 3h3" />
  </svg></li>
    <li>Berraca <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hand-grab" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M8 11v-3.5a1.5 1.5 0 0 1 3 0v2.5" />
    <path d="M11 9.5v-3a1.5 1.5 0 0 1 3 0v3.5" />
    <path d="M14 7.5a1.5 1.5 0 0 1 3 0v2.5" />
    <path d="M17 9.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
  </svg></li>
    <li>Tiene Mero duraznito <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-apple" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 14m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M12 11v-6a2 2 0 0 1 2 -2h2v1a2 2 0 0 1 -2 2h-2" />
    <path d="M10 10.5c1.333 .667 2.667 .667 4 0" />
  </svg></li>
</ul>
<br>
<p>Y por eso la quiero mucho!</p> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-heart" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
<path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
<path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
</svg>`;

