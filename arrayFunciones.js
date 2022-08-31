
const frutas = ['pera', 'platano', 'manzana'];
// 1- con .push un elemento al final del array.


function tutifruti(arr) {
    arr.push('naranja');
}
tutifruti(frutas);
console.log(frutas);

// 2- con reconociendo el parametro con un array puedo agregar argumentos.
function postre(arr){
    arr[2] = 'frutilla';
}
postre(frutas);
console.log(frutas);
 
//3- elimina el primer elemento 
function tuti(arr){
    arr.shift();
}
tuti(frutas);
console.log(frutas);

// 4- nos permite agregar el primer elemento 
 function fruti(arr){
    arr.unshift('chirimoya');
 }
 fruti(frutas);
 console.log(frutas);