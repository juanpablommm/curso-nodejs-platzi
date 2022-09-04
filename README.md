### CURSO DE NODE JS EN PLATZI

10. clase 10 ***try-catch*** analizando como capturar un error con la sentencia try-catch,
se analiza desde procesos sincronos a procesos asincronos en donde para estos ultimos
tenemos que recordar que como el procesos no esta sucediendo en el hilo principal de al 
aplicacion, en el EventLoop sino que por el contrario estos procesos para una funcion asincrona esta sucediendo en el ThradPool entonces es en el hilo para nuestro proceso asincrono en el que debemos emplear el try-cath para caoturar posibles errores y no solamente en el hilo principal porque de romperse la palicacion no servira de nada la dfinicion de un try-catch en el EventLoop para nuestra funcion asincrona dado que no estaremos controlando el error dentro de Hilo para esa funcion asincrona, es decir dentro de ella.