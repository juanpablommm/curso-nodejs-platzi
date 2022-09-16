const puppeteer = require('puppeteer');

/**lo primero que tenemos que entender es que todo puppeteer funciona de forma
 * asincrona, pero para poder hacer todas las petciones asincronas, vamos hacer lo que es una
 * funcion autoejecuta
 */

/**para que una funcion se autoejecuta la metemos dentro de parantesis, para combertirla en una
 * expresion y ejecutamos la expresion, todo esto no es mas que una funcion asincrona y la metemos dentro
 * de parentisis para comvertirla en una expresion y la ejecutamos, esto es igual que no hacer nada,pero como
 * estamos dentro de una funcion definidad esplicitamente como asincrona, ya podemos comenzar a tulizar los
 * awaits, teniedo la posiblidad de realizar una sincronia de todas las funciones asincronas que tengamos
 */
(async ()=>{
    console.log('lanzamos una navegador...');
    /*con el metodo launch de puppeteer ya estamos lanzando una navegador */
    //const browser = await puppeteer.launch();
    /**ahora nosotros al pasarle un obejecgo  omo parametreo con la propiedad headless en false,
     * podemos especificar que, se nos muestre el navegador, estamos diciendo a chromiun que se muestre,
     * que no se oculte
     */
    const browser = await puppeteer.launch({ headless: false });


    /*abrimos una page en el nevagdor, con ayuda del metodo newPage, perteneciente a nuestro navegador
    que obtuevimos anteriormente,  */
    const page = await browser.newPage();

    /**mediante el metodo goto, de nuestroa pagina que obtuvimos, le pasamos como parametro en un string,
     * la url del sitio al cual querramos ir
     */
    await page.goto('https://es.wikipedia.org/wiki/Node.js');


    /**podemos ejecutar un script, lo que nosotros querramos dentro de la pagina, y nos devolvera lo 
     * que definamos,
     * esto lo hacemos con ayuda del metodo evaluate para nuestra page que obtuvimos, donde simplemnte
     * le pasamos un callback a ejecutarse, esto sera dentreo de la pagina que allamos abierto dentro del
     * navegador.
     * 
     * para este caso simplmente estamos obeteniendo el tag h1 de la pagina con ayuda del document.querySelector,
     * y mostramos su conetnido de en la consola del lado del fron, y del lado del back-end rertonarmos
     * ese contenido para que nuestra variable titulo lo tenga y simplemente lo mostramos en la consola
     */
    let titulo = await page.evaluate(()=>{
        const h1 = document.querySelector('h1');
        console.log(h1.innerText);
        return h1.innerText;
    })

    console.log(titulo);

    console.log('cerramos navegador...');
    //browser.close();//con close cerrariamos el navegador
    console.log('navegador cerrado...');
})();