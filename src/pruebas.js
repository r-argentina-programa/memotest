/*

La idea es usar estrategias como las de Fabri en su simon. Ver como integrarlas acá:
-function vacia para bloquear la jugada del usuario
-e.target para manejar los clicks del input de usuario


Pseudo-code:

-----------------------------
Estructura:
Header
Boton jugar
Grilla de 4x4
Contador de tiempo
Contador de aciertos
-----------------------------

Arrancar con todos los cuadritos bloqueados
Al hacer click en jugar
    asignar una imagen random a cada cuadro. Tiene que existir siempre 1 par de imagenes.
    O sea, para 16 cuadritos (4x4) tienen que ser 8 imágenes de a pares asignadas random.
        (para esto un objeto con todos los href y valores a las imagenes y que asigne random de ese objeto?)
    desbloquear cuadros

Al hacer click en un cuadrito, pushear ese valor ¿clase? a un array vacío.
    el cuadrito debe tener una transition para mostrar la imagen que haya atrás
Al hacer click en otro cuadrito (if array.length === 2) chequear que array[0] y array[1] sean iguales y mientras bloquear los cuadritos
    Si no son iguales, resetear los arrays
    Si son iguales, ocultar esos cuadritos y sumar 1 acierto.

¿como saber si termino la jugada?
    llevar un contador de aciertos. Si la cantidad de aciertos === 8 significa que completó todos los pares y mostrar mensaje de éxito



    Alto nivel (visual)

    Hago click en JUGAR:
        Se completa el tablero con imágenes random
        Arranca el contador de tiempo
        Se oculta el boton
    
    Hago click en un cuadrito:
        Se muestra la imagen de la verdura
    

*/
