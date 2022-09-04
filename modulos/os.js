const os = require('os');

console.log(os.arch());/**mediante el metodo arch podremos
saber cual es nuestra arqutectura de la maquina */
console.log(os.platform());//nos infrmara la plataforma el sistema operativo linux, mac, windows
console.log(os.cpus().length);/*
el metodo cpus nos mostrara infromacion sobre cada nucle de la cpu, y con la propiedad length
pues simplmente los contamos cuantos nuecles tiene nuestro procesador*/

//console.log(os.constants);
/*con la propiedad constants podrmos saber cuales son todos los errores y todas la señales
del sitema, señales de propirdad y demas informacion */

console.log(( ( (os.freemem() / 1024) / 1024) / 1024) / 1024);
/**el emtodo freemen nos permitira saber cuanta memoria ram tenemos libre esta informacion
 * viene en bytes, por lo que se realiza la division hasta obtener la informacion en gb
 */
console.log(os.totalmem());/**totalmen, nos dira cuanta memeoria ram tenemos en total para nuestra
maquina */
console.log(os.homedir());/**nos dara la ruta raiz de la maquina */
console.log(os.tmpdir());/**todas las maquinas dejan un directorio temporal, en la raiz
para guardar archivos temporales, para aceder a este podemos poyarnos del metodo tmpdir */
console.log(os.hostname());/**nos dara el host de la mauina */
//console.log(os.networkInterfaces());
/**este nos ermitira acceder a las interfaces de red que 
que esten activas en la maquina */