// usando length , cuenta los array (devuelve la cantidad de elementos)
const nombre = ['Carolina', 'Lobos'];
console.log(nombre.length);

// Un método .push()nos permite agregar elementos al final de un array.
const name = ['Carolina', 'Andrea'];
nam.push('Lobos', 'Navarrete');
console.log(nam)

//  el elemento pop("argumento") elimina el último elemento de un array.
// y si se llama la segunda variable con pop() se mostrara lo eliminado.
const name1 = ['Carolina','Andrea','Lobos' ,'Navarrete'];
const name2 = name1.pop();
console.log( name1);
console.log(name2);

// elemento shift() elimina el  primer array.

const name3 = ['Carolina','Andrea','Lobos' ,'Navarrete'];
name3.shift();
console.log(name3);

// elemento .unshift() se agrega un elemento en la primera lista del array
const name4 = ['Señorita', 'Carolina','Andrea','Lobos' ,'Navarrete'];
name4.unshift(name4);
console.log(name4);

// elemento slice() devuelve  una parte del array dentro de un nuevo array de un inicio y fin ej; [0,1,2,3,] con slice 
// [ 1,3 ] se veria 1,2.

const name5 = ['Señorita', 'Carolina','Andrea','Lobos' ,'Navarrete'];
console.log(name5.slice(1, 4));
console.log(name5);

// elemento .indexOf()retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
const name6 = ['Señorita', 'Carolina','Andrea','Lobos' ,'Navarrete'];
const Nombre = name6.indexOf('Andrea');
console.log(Nombre);
