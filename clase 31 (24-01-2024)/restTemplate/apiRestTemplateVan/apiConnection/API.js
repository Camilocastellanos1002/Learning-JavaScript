const url ="http://localhost:4000/coders";

/* obtener datos {coders} desde rest api- GET */

export const getCoders= async ()=>{
    try {
        const result = await fetch(url);
        const coders = await result.json();
        return coders;
    } catch (error) {

    }
}