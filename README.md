### CURSO DE NODE JS EN PLATZI

19. clase 19 ***streams*** los streams los podemos imaginar como un paso de datos entre un punto y otro
* ***stream de lectura***
* ***stream de escritura*** 
* ***streams de doble sentido*** nos permiten escribir y leer streams

a travez del modulo fs, tenemos un method ***createReadStream()*** que nos permitira crear
un stream de lectura
los stream son muy importantes, por ejemplo cuando tenemos un archivo que leer muy grande, lo que podemos hacer es crear un stream de lectura e irlo leyendo poco a poco.
Por jemplo cuando cargamos unvideo en youtube, empiza a mostrarse el contenido pero no esta cargado todo el video, conforme vamos esperando a que cargue el video se van cargando pedacitos
para no tener problas y esperar a que se descargue todo el video para verlo, sino que por cada
paquete que vamos obteniendo vamos viendo

tambien a traves del modulo de fs, podemos crear un stream de escritura con me method ***createWriteStream*** de igual manera que el strema de lectura, este nos permitira es ir escribiendo la informacion mediante el paso de chunkc, pqueños pedazcos de informacion