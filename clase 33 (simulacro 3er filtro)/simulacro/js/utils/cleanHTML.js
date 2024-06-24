export function cleanHtml(select){
    if (!select.firstChild) {
        return; 
    }
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
}