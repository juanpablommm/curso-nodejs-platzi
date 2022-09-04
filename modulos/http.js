/**importamos el modulo de http */
const http = require('http');

/**la forma mas sencilla para crear un servidor basico es con el metodo
 * createServer, el cual rescibira un callback, que tendra resquest y el response,
 * de ahy para comenzar a trabjar en la peticion.
 * 
 * tenemos que indicar por que pueto se va a escuchar el servidor con ayuda del 
 * metodo listen
 */
http.createServer(router).listen(9000);


function router(req, resp) {
    console.log('ruging in the port 9000');

    /**podemos vsiulizar algunos datos del request o el reques completo,
     * si lo imprimimos por consola, como por ejemplo, visulizar la url
     */
    console.log('nueva peticion');
    //console.log(req);
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            /**para escribir en el response utlizamos el metodo write y 
             * ejecutar e el metodo end para finalizar el reponse
             */
            resp.write('hola que tal')
            resp.end();
            break;
        default:
            resp.write('Error 404, no tengo ide que quieres');
            resp.end();
            break;
    }

    /**podemos escribir en las cabeceras de respues con ayuda del metodo writeHead,
     * donde pasamos dos parametros a el codigo de estado par la respuesta y el obejto
     * json con el que responderemos
     */
    // resp.writeHead(201, {
    //     'Content-Type': 'text/plain',
    // })
}