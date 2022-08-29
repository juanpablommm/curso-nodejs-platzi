### CURSO DE NODE JS EN PLATZI

1. clase 1, analizando como funciona el eventLoop.
* Es un proceso con un bucle que gestiona de form asincrona todos los
procesos de la aplicacion
* El EventQueue este es la cola de evtnos, es decir el que va tener todo lo 
que nostors tengamos en nuestro codigo, funciones, request, todo lo que tegamos generara un evento,
los cuales se estaran eviando uno a uno al EventLoop,para que este los resulva, si el EventLoop los podra
resolver de forma super rapida en 1 minuto los reslvera y en caso de que no se pueda resolver los enviara 
ThreadPool.
* Thread Pool, es aqui donde se empezara a gestionar de forma asincrona todo, es decir que por ejemplo:
operaciones contra bases de datos, lectura de archivos, todo lo que sean operaciones muy lentas, no estara
bloqueando el hilo principal, el EventLoop va estar funcionado como si no hubiese pasado nada, ejecutando los eventos que vengan del EventQueue coo si no pasase nada, y cada ---Hilo--- en el ThreadPool se encaraga de gestionar su procesos lentos.
basicamente el ThreadPool lo que hace es que para cada petion que lellegue levanta un hilo nuevo  en nuestro procesador
y que ese proceso se jecute y demore lo que temga que demorarse sin interferir en el contesto principal de la palicancion es deicr en los procesos que esten suceciendo en el Event Loop 