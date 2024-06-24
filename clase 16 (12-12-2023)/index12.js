
//Introduccion Eventos 
const btnOk = document.querySelector('#btnOk'); 
btnOk.addEventListener('click', ()=>{
    alert('Has dado click en boton OK');
});

//Invocando funciones
const btnCancel = document.querySelector('#btnCancel');
btnCancel.addEventListener('click', showMessage);


function showMessage(){
    if(btnCancel.classList.contains('boton')){
        this.classList.remove('boton');
        this.textContent = 'Cancelado';
        this.style.backgroundColor = 'red';
        this.style.color = 'white';
    }else{
        btnCancel.textContent = 'Aprobado';
        btnCancel.classList.add('boton');
        btnCancel.style.backgroundColor = 'green'
        btnCancel.style.color = 'white';
    }
};
console.log(1);
document.addEventListener('DOMContentLoaded', ()=>{
    console.log(2);
});
console.log(3);