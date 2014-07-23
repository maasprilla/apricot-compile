apricot-compile
===============

Optimizacion de apricot


##Template Apricot

###Pruebas en base a blank_page.html

En general tiene mucha basura dando vueltas, plugins que se inicializan contra selectores que no existen y algunas funcionalidades que ni figuran.

Cosas que me parecieron al pedo:

 - La fecha
 - El reloj
 - El newsticker
 - El chat en el sidebar derecho
 - El estilo de la hojita doblada, junto con el title (donde se ve el titulo de la pagina, la bienvenida y un dropdown menu). Saca espacio y no suma nada, ahi tendria que ir un submenu segun en que endpoint estemos
 - El quicksearch del sidebar izquierdo, a menos que el largor del menu lo justifique, no tiene sentido
 - El background changer

----

###CSS

Esencialmente carga:
 - assets/css/style.css
 - assets/css/loader-style.css
 - assets/css/bootstrap.css

Despues tiene CSS correspondientes a los plugins JS que usa. Probé de cambiar el orden y todo se veía igual.

####Procesamiento
Cuando puse estos CSS para procesar con Grunt (concat y cssmin) no hubo problema. En loader-style hay una lista de css que se traen con @import, los ingresé a mano en el Gruntfile y no tuvo problemas.

-----

###JS

Se cargan principalmente 4 JS, pero el main.js se encarga de cargar, a traves de Head.js, una patadita mas de scripts.

En una prueba preliminar grunt no pudo compilar los js, pero lo hice muy por arriba, estaba probando CSS cuando lo hice.

 - assets/js/preloader.js
   
   detalles esteticos para cuando termina de cargar scripts y pagina
   
 - assets/js/bootstrap.js

   bootstrap

 - assets/js/app.js

   prepara los clicks en el menu Settings para cambiar el background, pero si se cambia queda mal encajado el fondo

   setea el .click() para .nav-toggle, pero este selector no esta en ningun lado

   setea el .click() para .nav-toggle-alt que es un collapse que usa la template en distintos lugares

   setea el .click() para .gone, una clase que asigna a pequeños botones de cerrar en algunos divs

   activa tooltip en los .tooltitle, que son solo 2 y uno esta mal puesto, solo funciona el de HELP (un icono de salvavidas en el topbar, al lado de las notifications)

 - assets/js/load.js

   Este en realidad es Head.js, una libreria para cargar asincronicamente (pero en orden) otros scripts. Provee un callback para cada carga. Esta bueno, pero puede traer dolores de cabeza con sails. 

 - assets/js/main.js

   ejecuta todas llamadas de head.js a otros scripts con sus callbacks:

   - assets/js/skin-select/jquery.cookie.js
   - assets/js/skin-select/skin-select.js

    Arma toda la funcionalidad del sidebar izquierdo, asigna clases y anima la entrada y salida del sidebar

   - assets/js/clock/date.js

    libreria para tener la hora, se usa en el topbar

   - assets/js/newsticker/jquery.newsTicker.js

    news ticker, se usa en el topbar junto con el reloj

   - assets/js/custom/scriptbreaker-multiple-accordion-1.js

    es un accordion custom, pero se aplica en el UL padre y donde encuentra UL’s anidados arma los accordion del sidebar:

     - blog app
     - extra page
     - ui element
     - form
     - tables

   - assets/js/slidebars/slidebars.min.js

    Arma la funcionalidad para el sidebar derecho. Aparentemente busca los class sb-right y despues engancha con un .toggle(‘right’)

   - assets/js/search/jquery.quicksearch.js

    Da funcionalidad al search de la sidebar izquierda

   - assets/js/gage/jquery.easypiechart.min.js

    Genera los mini charts que se ven en el sidebar derecho, esta bueno, revisar.

   - assets/js/tip/jquery.tooltipster.js

    Inicializa el tooltipster plugin en todas las clases .tooltip-* Se pueden ver cuando el sidebar izquierdo esta minificado

   - assets/js/nano/jquery.nanoscroller.js

    Inicializa los custom scrollbars







