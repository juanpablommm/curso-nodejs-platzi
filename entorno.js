let saludo = 'hola';

/**para acceder a nuestra varaibles de entonro , tenemos que  acceder a nuestro proceso,
 * y llmanos a nuestras varaibles de entorno con env mas el nombre de nuestra varaible que queramos
 * acceder
 *
 * cabe recordar que desde los servidores linux antiguos las varaibles de entorno se escriben 
 * en mayusculas y con snake_case ejemplo JAVa_HOME.
 * 
 * y utilizamos una varaibla que indicamos que pude tener un valor u otro, para si la variable de entorno no tine un valor 
 * asociado en el momento de que la lllamemos tenga el valor que le demos en la creacion 
 * y no un undefined dado que  la variable no tien eun valor en el sistema en el que 
 * este creada*/
let variableEntorno = process.env.JAVA_HOME || 'no tenmos la jdk en esta maquina';

console.log(saludo);
console.log(variableEntorno);