//const process = requiere('process');
/**cabe recordar que no debemos hacwr una importacion del modulo de process
 * dado que ya tenemos acceso a este,siendo un modulo global podemos aceder.lo sin tener que 
 * realizar una importacion
 */


/**la diferencia entr beforeExit y el exit, es que con el exit ya se ha desconectado totalmente del
 * EventLoop, por lo que cualquier codigo que este dentro de es callback, tiene que ser sincrono,
 * si es asincrono no se podra ejecutar, no funcionara, dado que nos hemos desconectado de todo,
 * el proceso ya esta termimando
 */
 process.on('beforeExit', ()=>{
    /**con before Exit acedemos al proceso antes de que valla a termiar
     */
    console.log('El proceso va a terminar');
});


/**con el metodo on pasmos la instrcucion del procesos que queremos aceder, por ejemplo
 * queremos aceder a cuando el programa alla acabado, mediante el paso del parameteo 'exit',
 * y el segundo parametro que resice este metodo es un calbback para lo que vallamos a realiar
 * cuando el proceso halla acabado
 */
process.on('exit', ()=>{
    /**bascamente cuando llegue a este peunto es lo utimo que va a relizar le programa
     * antes del que proceso termine
     */
    console.log('se acabo el proceso');
});

/**podemos escuchar cuando ahy una excepcion que no se ha captura, cuando algo se rompe
 * y nadie lo ha capturado, no ahy un try-catch ni nada.
 * 
 * esto es de gran importancia dado que sia existe un error que no se capturo podemos evitar
 * que todo el proceso de la palicacion se rompa, y poder seguir en la ejcucion de cualquier 
 * codigo que tengamos planeado de ahy en mas.
 * 
 * tambien nos da una gran utilidad para cuando querramos asegurarnos de que todas las cosas
 * en el procesoo van bien, o queremos monitorear un proceso que tenemos en produccion, o 
 * testing intensivo
 
*uncaughtException para expceiones que no se han capturado, el calbback que usaremos como segundo 
argumento tendria dos parametros err, origen, para el error y el origen de la excepcion

unhandledRejection para promesas que se han rechazado y no se implemento un catch
*/

process.on('uncaughtException', (err, origen)=>{

    console.error('valla ha ocurrido un errro, que no se capturo');
    console.error(err);
});

/**vamos a forzar un error que no se controle para ver como aturia el uncaughtException
 * capturando ese error que no se cpaturo a tiempo
 */

funcionNoExiste();

/**el siguiente codigo no se ejecutaria, dado que ya el errror lo esta capturando el uncaughtException
 * porque no lo controlamos en donde debia ser
 */
console.log('esto no se vera');