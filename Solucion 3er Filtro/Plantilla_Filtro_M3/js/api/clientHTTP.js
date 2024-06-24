//funciones CRUD


export async function get(url){
    try {
        const response = await fetch(url);
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function post(url,company){
    try {
        const response = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(company)
        });
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
        
    }
}

export async function del(url){
    try {
        const response = await fetch(url,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(url)
        });
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}