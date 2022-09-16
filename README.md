### CURSO DE NODE JS EN PLATZI

22.  clase 22, **scraping** web scraping es una tecnica usada mediante programas de software para extraer informacion de sitios web, simulando la nevegacion de un humano ya sea utlizando protocolo http o incrustando un navegador en una aplicacion.
utilizacion de **npm i puppeteer** para hacer scraping desde node js, este lo que hara es levantar un chrome pero sin tener que verlo, sin interfas grafica ni nada, esto funcionara en el servidor lentara el chrome, hara todo lo que tenga que hacerdesde la consola y nos devolvera el resultado.

puppeteer, lo que hara es instalar chromiun.

* **puppeter.launch()** lanzara un navegador pra comenzar a trabajar con el
* **puppeter.launch().newPage()** abriremos una nueva pagina en el navegador
* **puppeter.launch().newPage().goto()** idicaremos la url de la pagina que querramos ir
* **puppeter.launch().newPage().goto().evaluate()** recibira como paramtro un claballck, en el cual
estaremos dentrando a interactuar con la pagina y su tags