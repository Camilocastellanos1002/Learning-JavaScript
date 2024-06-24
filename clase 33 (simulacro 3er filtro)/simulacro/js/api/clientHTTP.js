import { url_categories } from "./urls.js";

export async function post(url,info){
    try {
        const response= await fetch(url,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function get(url){
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
    }
}

export async function deleteC(id){
    try {
        const response = await fetch(url_categories,{
            method:"DELETE",
        });
        const data= await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function update(url){
    try {
        const response = await fetch(url,{
            method: "PUT",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(info)
        });
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}