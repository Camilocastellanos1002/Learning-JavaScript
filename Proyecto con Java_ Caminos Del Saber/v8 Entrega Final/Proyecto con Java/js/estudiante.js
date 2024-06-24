import { calendario } from "./calendario.js";
import { getSubjectsOne, getSubjectsTwo, getSubjectsThree, getSubjectsFour, getSubjectsFive } from "../apiConnection/API.js";

function menuInicioEstudiantes(cajaOpcionesEstudiante){

  const menuInicio = document.querySelector('.caja-opciones');
  const logoE =document.querySelector('.logo');
  const logoBienve= document.querySelector('.titulo');
  const log= document.querySelector('.caja-nombre');
  const miTab = document.querySelector('.info_tab');
  const contentTab = document.querySelector(".contenido_tab");

  /* impresion del nombre en el menu desplegable */
  const nombreUsuario = document.querySelector('.nombre');
  const usuarioObtenido = JSON.parse(localStorage.getItem('usuario'));
  nombreUsuario.textContent = `Hola, ${usuarioObtenido[0].nombre}`;

    cajaOpcionesEstudiante[0].forEach((me)=>{
        const theLogo =document.createElement('section');
        const {logo}=me
        theLogo.innerHTML=`
            ${logo}
        `;
        logoE.appendChild(theLogo);
    })

    cajaOpcionesEstudiante[1].forEach((me)=>{
        const theLogoBien =document.createElement('section');
        const {logoEs}=me
        theLogoBien.innerHTML=`
            ${logoEs}
        `;
        logoBienve.appendChild(theLogoBien);
    })

    cajaOpcionesEstudiante[2].forEach((me)=>{
        const menu =document.createElement('a');
        const {id,titleSection, icono, theTitle}=me
        menu.id =`${id}`;
        menu.innerHTML=`
            <section class="${titleSection}">
                ${icono}
                <h3>${theTitle}</h3>
            </section>
        `;
        menuInicio.appendChild(menu);
        menu.addEventListener('click',async e=>{
            if (menu.id==1){
                miTab.innerHTML=`
                    <section class="notas cajaA">Tus notas</section>
                    <section class="notas cajaA">Tus profesores</section>
                    <section class="ao cajaA">Actividades En-Linea</section>
                    <section class="ac cajaA">Actividades Extracurriculares</section>

                `;
            } else if (menu.id==2){
              miTab.innerHTML = "";
              if (usuarioObtenido[0].nivelAcademico === "primero") {
                e.preventDefault();
                const materias = await getSubjectsOne();
                //console.log(materias);
                materias.forEach(materia => {
                  const subject = document.createElement('a');
                  subject.id = materia.id;
                  subject.type="button"
                  subject.className = "materia cajac";
                  subject.textContent = `${materia.materia}`;
                  miTab.appendChild(subject);

                  subject.addEventListener('click',e => {
                    contentTab.innerHTML = "";
                    const contenidoMateria = document.createElement('ol');
                    materia.contenido.forEach(content => {
                      contenidoMateria.innerHTML+=`
                      <li>${content}</li>`;
                    })
                    contentTab.appendChild(contenidoMateria);
                  })
                  miTab.appendChild(contentTab);
                })

              } else if (usuarioObtenido[0].nivelAcademico === "segundo") {
                e.preventDefault();
                const materias = await getSubjectsTwo();
                console.log(materias);
                materias.forEach((materia) => {
                  const subject = document.createElement("a");
                  subject.className = "materia cajac";
                  subject.textContent = `${materia.materia}`;
                  miTab.appendChild(subject);
                  subject.addEventListener("click", (e) => {
                    console.log(subject.id);
                    contentTab.innerHTML = "";
                    const contenidoMateria = document.createElement("ol");
                    materia.contenido.forEach((content) => {
                      contenidoMateria.innerHTML +=` <li>${content}</li>`
                    });
                    contentTab.appendChild(contenidoMateria);
                  });
                  miTab.appendChild(contentTab);
                });
              } else if (usuarioObtenido[0].nivelAcademico === "tercero") {
                e.preventDefault();
                const materias = await getSubjectsThree();
                console.log(materias);
                materias.forEach((materia) => {
                  const subject = document.createElement("a");
                  subject.className = "materia cajac";
                  subject.textContent = `${materia.materia}`;
                  miTab.appendChild(subject);
                  subject.addEventListener("click", (e) => {
                    console.log(subject.id);
                    contentTab.innerHTML = "";
                    const contenidoMateria = document.createElement("ol");
                    materia.contenido.forEach((content) => {
                      contenidoMateria.innerHTML += `<li>${content}</li>`
                    });
                    contentTab.appendChild(contenidoMateria);
                  });
                  miTab.appendChild(contentTab);
                });
              } else if (usuarioObtenido[0].nivelAcademico === "cuarto") {
                e.preventDefault();
                const materias = await getSubjectsFour();
                materias.forEach((materia) => {
                  const subject = document.createElement("a");
                  subject.className = "materia cajac";
                  subject.textContent = `${materia.materia}`;
                  miTab.appendChild(subject);
                  subject.addEventListener("click", (e) => {
                    contentTab.innerHTML = "";
                    const contenidoMateria = document.createElement("ol");
                    materia.contenido.forEach((content) => {
                      contenidoMateria.innerHTML += `<li>${content}</li>`
                    });
                    contentTab.appendChild(contenidoMateria);
                  });
                  miTab.appendChild(contentTab);
                });
              } else if (usuarioObtenido[0].nivelAcademico === "quinto") {
                e.preventDefault();
                const materias = await getSubjectsFive();
                console.log(materias);
                materias.forEach((materia) => {
                  const subject = document.createElement("a");
                  subject.className = "materia cajac";
                  subject.textContent = `${materia.materia}`;
                  miTab.appendChild(subject);
                  subject.addEventListener("click", (e) => {
                    console.log(subject.id);
                    contentTab.innerHTML = "";
                    const contenidoMateria = document.createElement("ol");
                    materia.contenido.forEach((content) => {
                      contenidoMateria.innerHTML += `<li>${content}</li>`;
                    });
                    contentTab.appendChild(contenidoMateria);
                  });
                  miTab.appendChild(contentTab);
                });
              }
            }else if(menu.id==3){
              miTab.innerHTML = "";
              miTab.innerHTML=`
                  <style>
                  #calendar{
                    display:none;
                  }
                  .titulo-horario{
                    display:flex;
                    justify-content:center;
                  }
                  #thorario{
                    display:block;
                    width:20rem;
                    height:8rem;
                    margin:0;
                  }
                  #horario{
                    display: grid;
                    border-style: solid;
                    max-width: auto;
                    max-height: auto;
                    margin: 2rem;
                  }
                
                  #evento_por_fecha{
                    display: grid;
                    overflow:hidden;
                    font-size: 12px;
                  }
                  #horario{
                    display: grid;
                    font-size: 1rem;
                    margin: 0 10rem 0 10rem ;
                    border-radius: 1.2rem;
                    padding: 0.5rem;
                  }
                  </style> 
                  <div class="titulo-horario">
                  <img src="/images/horario.png" alt="horario" id="thorario">
                  </div>`;
            }else if(menu.id==4){
              miTab.innerHTML = "";
              miTab.innerHTML=`
                  <section class="santillana cajaA">Santillana</section>   
              `;
            }
            else if(menu.id==5){
              miTab.innerHTML = "";
              miTab.innerHTML=`
                  <section class="videos cajaA">Videos de Refuerzo</section>
              `;
            }
            else if(menu.id==6){
              window.location.href="/componentes/inicio_estudiantes/emociones.html"
            }
        })
    })
    
    cajaOpcionesEstudiante[3].forEach((me)=>{
        const logito =document.createElement('section');
        const {theIcon}=me
        logito.innerHTML=`
            ${theIcon}
        `;
        log.appendChild(logito);
    })

    /*
    const fecha = new Date();
    const miEvent=document.querySelector('.event_box');
    miEvent.innerHTML=`
        <p>${fecha.toDateString()}<br>Evento: </p> 
    `;*/

};

document.addEventListener('DOMContentLoaded',()=>{
    menuInicioEstudiantes(cajaOpcionesEstudiante);
    calendario();
});