import { calendario } from "./calendario.js";

function menuInicioPadres(cajaOpcionesPadres){
  const menuInicio = document.querySelector(".caja-opciones");
  const logoE = document.querySelector(".logo");
  const logoBienve = document.querySelector(".titulo");
  const log = document.querySelector(".caja-nombre");
  const miTab = document.querySelector(".info_tab");

  /* impresion del nombre en el menu desplegable */
  const nombreUsuario = document.querySelector(".nombre");
  const usuarioObtenido = JSON.parse(localStorage.getItem("usuario"));
  nombreUsuario.textContent = `Hola, ${usuarioObtenido[0].nombre}`;

  cajaOpcionesPadres[0].forEach((me) => {
    const theLogo = document.createElement("section");
    const { logo } = me;
    theLogo.innerHTML = `
            ${logo}
        `;
    logoE.appendChild(theLogo);
  });

  cajaOpcionesPadres[1].forEach((me) => {
    const theLogoBien = document.createElement("section");
    const { logoEs } = me;
    theLogoBien.innerHTML = `
            ${logoEs}
        `;
    logoBienve.appendChild(theLogoBien);
  });

  cajaOpcionesPadres[2].forEach((me) => {
    const menu = document.createElement("a");
    const { id, titleSection, icono, theTitle } = me;
    menu.id = `${id}`;
    menu.innerHTML = `
            <section class="${titleSection}">
                ${icono}
                <h3>${theTitle}</h3>
            </section>
        `;
    menuInicio.appendChild(menu);
    menu.addEventListener("click", (e) => {
      if (menu.id == 1) {
        console.log(menu.id);
        miTab.innerHTML = `
                    <section class="notas cajaA">Actividades semanales</section>
                    <section class="notas cajaA">Notas Estudiante</section>
                    <section class="ao cajaA">Actividades Extracurriculares</section>
                `;
      } else if (menu.id == 2) {
        console.log(menu.id);
        miTab.innerHTML = `
                    <section class="materia1 cajac">CIENCIAS</section>
                    <section class="materia2 cajac">MATEMATICAS</section>
                    <section class="materia3 cajac">ESPAÑOL</section>

                `;
      } else if (menu.id == 3) {
        console.log(menu.id);
        miTab.innerHTML = `
                    <section class="ah cajaA">Horario</section>
                `;
      } else if (menu.id == 4) {
        console.log(menu.id);
        miTab.innerHTML = `
                <section class="materia1 cajac">CIENCIAS</section>
                <section class="materia2 cajac">MATEMATICAS</section>
                <section class="materia3 cajac">ESPAÑOL</section>

                `;
      } else if (menu.id == 5) {
        console.log(menu.id);
        miTab.innerHTML = `
                    <section class="videos cajaA">BOTON DE PAGO BANCO CAJA SOCIAL</section>
                `;
      }
    });
  });

  cajaOpcionesPadres[3].forEach((me) => {
    const logito = document.createElement("section");
    const { theIcon } = me;
    logito.innerHTML = `
            ${theIcon}
        `;
    log.appendChild(logito);
  });
};

document.addEventListener('DOMContentLoaded',()=>{
    menuInicioPadres(cajaOpcionesPadres);
    calendario();
});

