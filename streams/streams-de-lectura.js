const fs = require('fs');


/*creamos un stream de lectura con el modulo fs, tenemos que indicar como parametro
la ruta del archivo y como segundo parametro obcional la condificacion del archivo
par poder leeer correctamente*/
let readableStream = fs.createReadStream(`${__dirname}/entrada.txt`, 'UTF8');

//varaible que ira comulando la data leida
let data = '';

/**el methodo once lo que hara es configurar un evvento tambien, diciendo que la primer
 * ves que detecte el evetno data ejecute lo que configuremos en la funcion, esto
 * solamente se ejecutra una sola vez, esto srive para por ejemplo inicilizar muestros stream
 * y óder saber cuando se esta inicilizando el proceos
 */
readableStream.once('data', ()=>{
    console.log('iniciando el stream...');
});


/**lo primero que debemos saber es que los stream funcionan con eventos, entonces para configuarar
 * un evento es .on();
 * utilizamos on, para configurar el evento, entonces le pasamos 'data' para que cuando
 * el stream detecte que halla data fluyendo activara el evento.
 *
 * el segundo argumento que pasamos, que seria nuestra funciona a jecutar, llevara un parametro,
 * lo que se le denomina chunks que son paqueticos de informacion que nos ira trallendo el 
 * stream a medida que va elleyendo los datos, paquetes del tamaño de memoria que pueda
 * recojer, la velocidad, siempre van a depender de la meoria, el SO, CPU, 
 * y lo que pueda hacer node js por detras, 
 * en este caso al ser el tamaño del archivo tan bajo nos trae toda l ainformacion en un paquete.
 * 
 * 
 * los chunk, los paquetes que nos trae el strem seran buffers, por lo que si queremos leerlo
 * correctamente tenemos que setearle al stream al codificacion de lo que esta leyendo si 
 * no la definmos al incio de stream
 */


readableStream.on('data', (chunk)=>{
    console.log(chunk.length);
    data += chunk; /*cada chunk, cada paquete lo vamos metiendo de nustra varaibles
    acomulativa*/
})

/**ahora necesitamos saber cuando termina el stream de leer la informacion para poder mandar a 
 * mostrar toda esta por medio de la variable acomulatica que tenemos.
 * lo podemos hacer apoyandonos de nuevo en on(), pero esta vez en el evento ya no escucharemos 
 * data sino que escucharemos end, es decir cuando el streams finalice de leer toda la informacion
 * y de igual manera pzsamos nuestra funcion en la que vamos hacer lo que necesitemos.
 * 
 * esta es la foma correcta de hacer las cosas, para cuando trabajemos con informacion muy pesada,
 * o informacion que venga de un servidor en el que no sepamos que tan grande o pequeña es, pueda
 * venir en trozos, o algun video muy pesado, en el que vamos subiendo pedacitos por pedacitos, y
 * en el caso de que se caiaga la conecion no tener que enpezar a cargarlo de nuevo
 */
readableStream.on('end', ()=>{
    console.log(data);//imprimimos toda la informacion
})


