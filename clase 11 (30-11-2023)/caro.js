//1 con funciones autoejecutables
(function(num1,num2,num3){
    const numeros = [num1,num2,num3];
    let numeroMayor =0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i]>numeroMayor){
            numeroMayor=numeros[i];
        }
    }
    if ((num1 == num2) && (num1==num3)&& (num2==num3)) console.log(`son iguales`);
    return console.log(`numero mayor: ${numeroMayor}`);
})(60,90,60);

//2
function isVocal(char) {
    if(['a','e','i','o','u'].includes(char.toLowerCase())){
        return console.log(true);;
    }else{
        return console.log(false);;
    }
}
let letra = prompt("ingrese una letra: ");
isVocal(letra);

//3
const generarCaracteres =(num,char)=>{
    return console.log(char.repeat(num));
}
a = prompt("ingrese el numero: ");
b = prompt("ingrese el caracter: ");
generarCaracteres(a,b);
//4
const inversa = (tring)=>{
    const arr = tring.toLowerCase().split('').reverse().join(''); 
    console.log(arr)
}
inversa("Hola mundo");
//5
const sumaArreglo = (arreglo)=>{
    const total= arreglo.length;
    let suma=0;
    for (let i = 0; i < total; i++) {
        suma += arreglo[i];
    }
    return [suma, total];
}
let datos = sumaArreglo([1,2,3,4,5,6,7,8,9,500]);
console.log(`suma de los datos: ${datos[0]}\ncantidad de datos: ${datos[1]}`);
//6
const multiplicarArreglos= (miarreglo)=>{
    let minimo=Math.min(...miarreglo);
    let maximo=Math.max(...miarreglo);
    const multi= minimo*maximo;
    return console.log(`maximo: ${maximo}\nminimo: ${minimo}\nresultado: ${multi}`);
}

multiplicarArreglos([10,20,303,102,122,999]);
//7
const booleanoArray=(function(arr1, arr2){
    const arr3 = arr1.concat(arr2);
    let mibool;
    if (arr3.length >=10) {
        mibool = true;
    } else mibool = false;

    return console.log([arr3, mibool]);
})([1,2,3,4,5,6,7,8,9,0],[9,8,7,6,5,4,3,2,1]);
booleanoArray;
//8
const funcionArray=(function(arr1, arr2){
    const arr4 = arr1.concat(arr2);
    for (let i = 0; i < arr4.length; i++) {
        arr4[i] = 2*arr4[i];
    }
    return console.log(`arreglo#1: ${arr1}\narreglo#2: ${arr2}\nresultado: ${arr4}`);
})([1,2,3],[9,8,7]);
funcionArray;


