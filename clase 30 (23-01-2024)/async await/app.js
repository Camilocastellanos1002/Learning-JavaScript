

/* ejecucion de codigo saltando errores */
/*
console.log(3);
try {
    imprimir(); //no se ha declarado
} catch (error) {
    
}
console.log(5);
*/


/*fetch con then then */
/*
const otroUrl= "https://www.themealdb.com/api/json/v1/1/categories.php";
document.addEventListener('DOMContentLoaded',getData);
function getData() {
    fetch(otroUrl)
    .then(result=>result.json())
    .then(data=>console.log(data.categories));
}*/


/* fetch con async await */

const otroUrl= "https://www.themealdb.com/api/json/v1/1/categories.php";
document.addEventListener('DOMContentLoaded',getData);
async function getData() {

    try {
        const response = await fetch(otroUrl);
        const datas= await response.json();
        console.log(datas.categories);
    } catch (error) {
        console.log("Error de ejecucion, vuelva a mirar el codigo");
    }

    
}