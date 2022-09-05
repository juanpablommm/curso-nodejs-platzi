import sharp from 'sharp'

/**para enpezar a trabjar con sharp simplemnte llamanos a nuestro modulo 
 * que acabamos de importar y le pasamos como parametro la direccion de la imagen 
 * que vamos a trabajar
 */
sharp('./halo.png')
/**con resize definmos que lo vamos aredimensionar la imegen al tamño que definamos */
.resize(80)
/**con grayscale decimos que vamos a tranformar esa imagen abanco y negro */
.grayscale()
/**y con toFile es que vamos a crear una copia de esa imgan por asi decirlo con
 * todas las modificaciones que le hemos hecho
 */
.toFile('haloRedimensionado.png');