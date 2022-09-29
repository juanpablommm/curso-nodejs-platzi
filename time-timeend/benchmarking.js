console.time('todo el proceso');
let suma = 0;

console.time('proceso');
for(let i = 0; i < 1000000000; i++){
    suma += 1;
}
console.timeEnd('proceso');
console.log('finalizo la operacion...');


function asincrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
           console.log('termina el proceso asincrono');
           resolve(); 
        } );
    })
    
}

/**para medir el proceso de ejecucion de una funcion asincrona simplemente
 * mediemos en tiempo desde antes del llamado a la funcion y como sabemos
 * que nuestra funcion asincrona nos devolvera una promesa, entonces podemos
 * vsarnos en then() para ejcutar un callback, cuando termine de ejcutarse
 * la funcion y en este caso lo que vamos a ejecutar no es nada mas y nada menos
 * que nuestro timeEnd para saber cuanto demoro el proceso
 */
console.time('asincrona');
asincrona().then(()=>{
    console.timeEnd('asincrona');
});

console.timeEnd('todo el proceso');