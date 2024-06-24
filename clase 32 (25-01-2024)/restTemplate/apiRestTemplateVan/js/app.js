/* 3. importar coders */
import { getCoders } from "../apiConnection/API.js";


/*  1. funcion iife se autoejecuta sin invocarse, solo definirla */

(function(){
    document.addEventListener('DOMContentLoaded',showCoders);
    async function showCoders(){
        const coders = await getCoders();
        
        console.log(coders);
        const contenedor = document.querySelector('tbody');
        coders.forEach(coder => {
            const {id,imagen, nombre, promedio, especialidad, expertoTecnologia,nivelIngles} = coder;
            const rows = document.createElement('tr');
            rows.innerHTML=`
                <th scope "row">${id}</th>
                <td><img src="img/${imagen}" width="50px"></td>
                <td>${nombre}</td>
                <td>${promedio}</td>
                <td>${especialidad}</td>
                <td>${expertoTecnologia}</td>
                <td><button type="button" class="btn btn-warning">Details</button></td>
            `;
            contenedor.appendChild(rows);
        });
    }
})()