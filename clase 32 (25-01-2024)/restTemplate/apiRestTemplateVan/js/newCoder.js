/* 12. importar funcion para agregar  coder */
import { newCoder } from "/apiConnection/API.js";

/*4. seleccionar el formulario */
const formulario = document.querySelector('#formulario');

/* 5. listener para el formulario */
formulario.addEventListener('submit',valideCoder);

function valideCoder(e){
    e.preventDefault();

    /* 6. capturar datos */
    const nombre = document.querySelector('#nombre').value;
    const imagen = document.createElement('img');
    imagen.src="/img/alejoymanu.jpg";
    const promedio = document.querySelector('#promedio').value;
    const edad = document.querySelector('#edad').value;
    const nivelIngles = document.querySelector('#nivelIngles').value;
    const especialidad = document.querySelector('#especialidad').value;
    const expertoTecnologia = document.querySelector('#expertoTecnologia').value;

    /* 7. literal object Enhancment */
    const coder={
        nombre,
        imagen,
        promedio,
        edad,
        nivelIngles,
        especialidad,
        expertoTecnologia
    }

    /* 8. validar campos no vacios */

    console.log(!Object.values(coder).every(element=> element !== ''));

    /*9. declaracion de funcion de validacion */

    function validate(objecto) {
        return !Object.values(objecto).every(element=> element !== '');
    }
    /* 10 mostrar validacion */
    if (validate(coder)) {
        alert("TODOS LOS CAMPOS DE RESGISTRO SON OBLIGATORIOS");
        return
    }
    alert("PASO LA VALIDACION");
    newCoder(coder);

}