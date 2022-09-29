const gulp = require('gulp');/*para la creacion de tareas atumatizadas con gulp, debemos
importar el mddulo de este que se instalo*/
const server = require('gulp-server-livereload');


/**para la creacion de una tarea con gulp, simplemente lo llamamos, y ejecutamos el metodo task,
 * de tarea, el cual recibe dos parametros, siendo el primero el nombre que le vamos a dar a 
 * la tarea y el segundo larametro una fu cion en la cual ejecutaremos todo lo que nosotros 
 * queremos que se haga, la tarea o tareas que queremos automatizar con nuestra tarea de gulp.
 * esta funcion recibe un callback que es el que se ejecutara al funal, si tenemos tareas que 
 * serana asincronas, pues siempremente e ejecutaran cuando tengan que ejcutarse y una vez terminen
 * se ejejutara el callback y sabremos que todo ha terminado
 * 
 * una vez creada esta tarea solamente configuramos el script a jecutarse con npm, y le damos
 * el valor a este, que sera nuestra tarea de gulp build, ejemplo:
 * script{
 *  "build": "gulp build"
 * }
 */
gulp.task('build', (callback)=>{
    console.log('coinstrullendo el sitio...');
    setTimeout(callback, 1200);
});


gulp.task('serve', (callback)=>{
    /*con gulp src, inicamos a gulp, desde donde empezara a mirar los archivos,
    en este caso la carpeta www*/
    gulp.src('www')
    /**utilizamos .pipe() dado que viene un stream, hacemos el pipe hacia nuestro
     * servidor, que es la importacion de nuestro modulo gulp-server-livereload, el cual
     * noes permitira montar un srvidor local para gulp, en este caso para ir viendo cambios
     * en front cuando modifiquemos los archivos, ya tendremos un servidor local en x puerto
     * y cuando modifiquemos los archivos, se vera reflejado directamente en nuestro servidor,
     * a medida que modificamos codigo lo iremos viendo.
     * 
     * pasamor el servidor, y le pasamos como parametros a nuestro objeto server un objecto json,
     * que tendra las opciones de configuracion, en este caso dos opciones, la cuales son el
     * livereload, donde su valor es igual a true, para que cuando halla un cambio en nuestro
     * codigo el servidor se actulice, y lo veamos reflejado al mismo tiempo.
     * y open, tambien con valor true, para que automaticamente habra el codigo
     */
    .pipe(server({
        livereload: true,
        open: true
    }))
});

/**al pasarle como parametro al nombre de la tare "default", sera la tarea que tenga por 
 * defecto gulp, lo que significa que para ejecutarla simplemente tendremos que ejecutar
 * "gulp" sin nombre de tarea.
 * ahora las tareas que vamos a ejcutar, en este caso utilizamos el metodo seriees de gulp,
 * para indicar que vamos a ejecutar variasa tareas de gulp que ya hemos definido, donde
 * le pasamos por parametrso el nombre de las tareas que vamos a realizar en esta que estamos
 * creando. en este caso vamos a ejecutar las tareas build y serve con la tarea por default 
 * de gulp.
 * ahora solo quedaria configurar esta tarea entre los script de nuestro pakage.json
 */
gulp.task('default', gulp.series('build', 'serve'));