const url ="http://localhost:4000/coders";


/* 2. obtener datos {coders} desde rest api- GET */

export const getCoders= async ()=>{
    try {
        const result = await fetch(url);
        const coders = await result.json();
        return coders;
    } catch (error) {

    }
}

/* 11. Insertar nuevo coder en REST API - Metodo HTTP: (POST) */

export const newCoder = coder=>{
    // console.log(coder);
    try {
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(coder),
            headers:{
                'Content-Type':'application/json'
            }
        });
        window.location.href ='index.html'
    } catch (error) {
        console.log(error);
    }
}