import bcrypt from 'bcrypt';

const password = '060900diminombre';

/***el metodo hash nos permitira cifrar un dato, tambien tenemos su equivalente a una funcion
 * sincrona que seria hashSync pero dado que esto bloquearia el hilo principal de la aplicacion
 * hasta que el proceso termine no seria muy buena idea
 * 
 * hash recibe 3 parametros, el primero seria el string a cifrar, el segundo el numero de veces
 * que queremos que se ejcute el algoritmo para que se cifre, cabe recordar que un has no es mas 
 * que una serie de operaciones matematicas y demas para cambiar el texto por uno que no tenga nada
 * que ver.
 * el tercer parametro seria el callback que tendria el error y el hash
 */
bcrypt.hash(password, 8, (err, hash)=>{
    if(err){
        console.error(err);
    }else{
        console.log(hash);

        /**tenemos el metodo compare, comparara el has generado y el texto antes de ser cifrado
         * para saber, si ese texto puedo generar ese hash, si es asi devolvera true de lo 
         * contrario flase.
         * recibira 3 paremetro tambien, el texto antes de ser endriptado, el has generado y
         * el callback que jecutaremos, el cual recibe un eror y un has como parametros
         */
        bcrypt.compare('060900diminombre', hash, (err, res)=>{
            if (err) {
                console.error(err);
            }else{
                console.log(res);
            }
        });
    }
});
