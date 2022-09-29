const { app, BrowserWindow} = require('electron');
/* utlizamos la desesructuracion de ECS6 para importar app, que es la
apliacion principal de lectron, y BrowserWindow, el cual nos permitira crear ventanas
para nuestra aplicacion nativa *-/

/*vamos a tener una venta principal que es donde se va a ver toda la aplicacion, para ello 
creamos una variable que la signifique */
let mainWindows;



/**COMO O CUANDO EJECUTAMOS NUESTRA FUNCION QUE CREA LA VANTANA?
 * 
 * cuando nos traemo electrom, app empieza ya por defecto un proceso con la palicacion, por
 * debajo crea una aplicacion, que dice que va anecesitar empezar abrir ventas y todo lo que 
 * necesite, pero este procesos tardara un tiempo en estar listo, por lo que si llamamos a una
 * funcion de crear una venta antes de que ese proceso este listo para crear la ventana, 
 * pues nunca se creara, dado que la estamos llamando antes de que esta pueda existir, por lo que
 * podemos hacer es aprovechar la capacidad de node js para escuchar eventos.
 
    donde nos tulizaremos nuevamente .on() en nustra app de lectrom y le pasmo por parametro el
    nombre del evento a escuchar en este caso "ready" para saber cuando app ya este lista, 
    y el segundo parametro nuestro callback a ejcutarse, que seria la funcion que creamos para
    crear la ventana 
 */
app.on('ready', createWuindows);



/**creamos una funcion que sera la encargada de crear la ventana,
 * esta va a encargarse de que venga un new BrowserWindow de electron y
 * asignarlo a nustra varaible que creamos para significar la ventan principal
 */
function createWuindows() {
    /**BrowserWindow recibe como parametro con objecto json que tendra las propiedades
     * para que configuremos la ventana, en este caso le definimos solamente el ancho
     * y el alto; width y height.
     * 
     * tambien podemos configurarle que carge un script antes, mediante webPreferences: y entre
     * { } lo que queremos colarle
     */
    mainWindows = new BrowserWindow({
        width: 860,
        height: 600,
    });
    /** ahora simplmente nos encargaremos de cargar nuestro .html a nuestra ventana, donde
     * este lo podremos realizar a travez del metodo loadFile() y a este le pasamos como
     * parametro la ruta del archivo, el path donde se encuentra nuestro html a comvertir a
     * una ventana de una aplicacion nativa.
     * 
     * la ventana tomara los diseños que tenga en la hoja de estilos css que tenga el html,
     * es decir los cocolres de fondo, colores de fuente, el tipo de fuente y demas seran
     * los que tengamos definido en el css
    */
    mainWindows.loadFile('index.html');

    /**COMO LO EJECUTO???
     * creamos un script en el package.json, donde le daremos el valor "electron ruta", 
     * donde la ruta simplemente es la ruta donde queremos que valla electron, donde 
     * queramos acceder, en este caso dado que los archivos y el package.json esta en la misma 
     * ubicacion seria 
     * script {
     *  "start": "lectron ."
     * }
     */
}

