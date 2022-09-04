### CURSO DE NODE JS EN PLATZI

1.  clase 11. ***correr-procesos hijos en el sistema***, cada vez que trabajamos cualquier cosa asincrona pues se crea un hilo donde correr cosas, **pues ahora ademas de esos hilos podemos trabjaar con procesos**, sabiendo que un proceso simplemente es algo que se jecuta y termina, pues podemos levantar otros procesos con node, con python, con varaibles del sistema, con script, con lo que nos de la gana basicamente.
para realizar esto debemos apoyarnos del modulo ***child_process*** eñ cual nos procee dos funciones super importantes que son el **spawn** este nos devulve stream y por otro lado tenemos el **exec** que nos deculve un buffer
* se usa ***spawn*** cuando se quiere que el proceso hijo devulva datos binarios enormes a Node
* se usa ***exec*** cuando se quiere que el proceso hijo devulva mensajes de estado simples
* se usa ***spawn*** cuando se quiere recibir datos desde que el proceso arranca
* se usa ***exec*** cuando se quiere recibir datos al final del proceso