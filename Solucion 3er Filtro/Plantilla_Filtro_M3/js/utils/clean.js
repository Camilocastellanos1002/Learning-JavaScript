
//funcion que permite eliminar los hijos estatos del html y que solo queden los elementos dinamicos
export function clean(e){
    if (!e.firstChild) {
        return; 
    }
    while (e.firstChild) {
        e.removeChild(e.firstChild);
    }
}