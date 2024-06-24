/* la mayoria del codigo es sincrono (el compilador y/o interprete no ejecuta la linea siguiente si no se ejecuta la actual) */

/* Callback es el termino al que se refiere la llamada de una funcion dentro de otra */

/* AJAX = Asynchronous Jvascript And XML 
    comunicacion con servidores web remoto de forma asincrona es con el llamado de AJAX por medio de Apis
    "es la manera antigua de comunicacion entre lenguajes antes de JSON"
    
*/
/* API's
    pedazo de un software utilizado por otro software, que permite la comunicacion entre softwares y/o lenguajes
*/

/*Promise
    * Es un objeto utilizado como un placeholder para un resultado a futuro de una operacion asincrona
    * Es un contenedor para un valor entregado de forma asincrona
*/




//1. Fetch API para consumir datos desde un txt... (fetch entiende json, txt pero no xml)
const loadTxtBtn = document.querySelector('#loadTxt');
loadTxtBtn.addEventListener('click',getData);

function getData(){
    fetch('data/datos.txt')
    .then(respuesta=>{
        console.log(respuesta);
        console.log(respuesta.status);
        console.log(respuesta.statusText);
        console.log(respuesta.url);

        return respuesta.text();
    })
    .then(datos=>{
        console.log(datos);
    });
}

//2. Fetch API para consumir un JSON (Objeto)
const loadJSONBtn = document.querySelector('#loadJSON');
loadJSONBtn.addEventListener('click',getDataJson);

function getDataJson(){
    fetch('data/coder.json')
    .then(rta=>{
        console.log(rta);
        return rta.json();
    })
    .then(data2=>{
        console.log(data2);
        showHtml(data2);
    })
}

function showHtml({id, nombre,edad, nivelIngles}){
    const contenido = document.querySelector('#contenido');
    contenido.innerHTML=`
        <p> id: ${id}</p>
        <p> Nombre: ${nombre}</p>
        <p> Edad: ${edad}</p>
        <p> Nivel de Ingles: ${nivelIngles}</p>
    `;
}
//3. Fetch API para consumir datos de un JSON (Array)
const loadJsonArrayBtn = document.querySelector('#loadJSONArray');
loadJsonArrayBtn.addEventListener('click',getDataJsonArray);

function getDataJsonArray(){
    const arr=[];
    fetch('data/coders.json')
    .then(res=>{
        console.log(res);
        return res.json();
    })
    .then(data3=>{
        console.log(data3);
        showHtmlArray(data3);
    })
}
function showHtmlArray(data){
    const contenido = document.querySelector('#contenido');
    data.forEach(ob=>{
        const {id,imagen,nombre,edad,promedio,clanRiwi,nivelIngles,especialidad,expertoTecnologia,detalle,celular,direccion}=ob;
        contenido.innerHTML+=`
            <p> id: ${id}</p>
            <p> imagen: ${imagen}</p>
            <p> Nombre: ${nombre}</p>
            <p> Edad: ${edad}</p>
            <p> Nivel de Ingles: ${nivelIngles}</p>
            <p> promedio: ${promedio}</p>
            <p> clanRiwi: ${clanRiwi}</p>
            <p> Especialidad: ${especialidad}</p>
            <p> ExpertoTecno: ${expertoTecnologia}</p>
            <p> detalle: ${detalle}</p>
            <p> celular: ${celular}</p>
            <p> direccion: ${direccion}</p>
        `;
    })
}
//4.  FetchAPI para consumir recursos desde una API PUBLICA (internet)
