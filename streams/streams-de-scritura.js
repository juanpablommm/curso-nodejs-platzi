/**al igual que los strema de lectura, la finlidad de los stream de escritura es igual, 
 * en ves de cojer todo el contenido deuna sola, ir cojiendo pedacaitos de codigo para 
 * irlos escribiendo, y de esta manera vamos valanceando el flujo
 */


const fs = require('fs');
const readline = require('readline');


let i = readline.createInterface(process.stdin, process.stdout);

i.question('Cual es tu nombre? > ', (nombre)=>{

    /**creo mi stream de escritura, como parametro nos pedira el nombre del archivo y la ruta,
     * es decir el path completo, y como segundo parametro me pedira la codifacion si la queremos
     * pasar*/
    let stream = fs.createWriteStream(`${nombre}.txt`, 'UTF8');

    /**empezamos a escribir chuncks, pedacitos de infromacion en nuestro stream,
     * atraves del metdo write, donde nos pedira un chunk como primer parametro
     * y el segundo seria un callback si lo deceamos
     */
    stream.write(`Esto dijo ${nombre} \n`);

    /**escribimos en la salida estandar del sistema 'que quieres decir?' */
    process.stdout.write('Que quieres decir? \n');

    /**empazamos a escuchar las lienas de codigo que escriba con el evento line */
    i.on('line', (dicho)=>{

        if(dicho.trim() == 'salir'){
            /**si escuchar la plabra salir pues cerramos la interfaces, con lo que 
             * tambien tenemos que cerrar el stream, para evitar que se quede abierto 
             * el archivo
             */
            stream.close();
            i.close();
        }else {
            /**si no se escibe salir, sigo escribiendo en el stream, lo que venga en
             * el parametro dicho concatenado con un salto de linea
             */
            stream.write(dicho.trim() + '\n');
        }
    })
})