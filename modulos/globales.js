/**global es el objeto donde estan todos los modulos globales guardados.
 * este tiene una dependenica cirular hacia si mismos.
 * dentro del el tnemos objetos ya vistos como setInterval para ejejutar una operacion
 * cada x tiempo,
 * setTimeout para ejeutar una tarea en x tiempo
 * etc...
 */
console.log(global);

console.log('-------------------');
let i = 0;
let intervalo = setInterval(()=>{
    console.log('hola mundo');
    if(i === 3){
        /**clearInterval nos permitiral limpiar el intevalo, algun proceso que se este ejecutando
         * varias veces dado x tiempo, donde simplemente le pasmo como paremtro el nombre.
         * 
         * estas funciones son de gran utiliad para cosas que queremos intentar vraias veces,
         * como por ejemplo si la conexion anuestra base de datos se ha roto, y queremos
         * reintentar cada 3 segundos, 5 segundos por ejemplo, hacerlo por 5 0 10 veces y si terminar
         * el proceso si no se puede, sabiendo por ejemplo bueno el servidor puede estar caido
         */
        clearInterval(intervalo);
    }
    i++;
}, 1000);

/**tambien tenemos la funcion inmediate, que basicamente lo que hara es buscar ejecutar una funcion de forma
 * inmediata en cuanto pueda
 */

setImmediate(()=>{
    console.log('inmediato');
});

/**require() vamos a poder utlizar require pra requirir cualquier modulo, basicamente 
 * para realizar la importacion de cualquier modulo
 */

/**tambien podremos acceder al proceso, como se realizo anteriormente para aceder a la vraibles de entorno */
console.log('--------------------------process');
console.log(process);

/**podemos saber en donde estamos parado, la ruta en la que estamos con __dirname 
 * o ser mas especificos y con __filename saber la ruta mas el nombre del archivo en el que estamos
*/
console.log('--------------------------------');
console.log(__dirname);
console.log(__filename);

/*lo recomendable es si no podemos usar variables globables no las usemos dado el problema que puede 
tener el manejo de estas,
 pero en el caso de que se llegase a necesitar la creacion de una vraible global para toto el proceso
 de la aplicacion, podemos recurrir al mudlo global.nombreVariable 
 y simplmente la llamaremos con el nombre que le hemos dado*/
 global.miVariable = 'juampiss gonzales papa';
 console.log(miVariable);