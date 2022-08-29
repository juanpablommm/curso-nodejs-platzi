console. log('hola mundo');


/*el setInterval nos sirve para ejecutar una funcion cada x  tiempo que indiquemos,
para que siga activo esta y no muera una vez ejecuta.
revice dos parametros el primero es una funcion y el segundo es la cantidad den milisegundos 
en que esta se ejecutara 

basicamente nosotros tenemos nuestro venetLoop que cada 1 segundo dispare un evento de consolo log
que diga tamos activos e imprima el numero.

dado que esta funcion seria asincrona al utlizar setInterval, esta lineas de codigo se jecutara cuando le toce,
es decir en este caso cada 1 segundo pero se estara ejecutando a de igual amanera las lienas despudes de esta funcion
es decir en este caso el consolo.log que dice segunda instrucion,
no tenemos que esperar a que se termine de ejcutar ese bloque de de codigo para ejecutar el siguiente, sino que por el contrario
esete se estara ejecutando cuando le toque mientras continua leyendo el resto del codigo
*/
 let i = 0;
setInterval(function (){
    console.log('tamos activo...' + i);
    i++;
    if(i === 5){
        /**forzamos un error para que el proceso se detenga
         */
        const a  = i + z;
    }
}, 1000)

console.log('segunda instruccion');