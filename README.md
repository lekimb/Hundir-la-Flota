# Hundir-la-Flota-React-App

https://mikelbarberoles.netlify.app/hundirlaflota

## Componentes

`HundirLaFlota` es el componente raíz de la aplicación y contiene a los componentes `Menu` y `Partida`. En el componente `Partida` se encuentra la estructura de datos del juego, así como algunas funciones auxiliares básicas.

El componente `Partida` contiene al resto de componentes: `InfoBarcos`, `InfoDisparos`, `Tablero`, `Leyenda`, `ModalFinDelJuego` y `Navegacion`. En el componente `Tablero` se encuentra la lógica principal del juego.

## Estructura de datos

-   `partidaIniciada`: tipo booleano, permite renderizar el menú o la partida según convenga.
-   `dificultad`: tipo numérico, permite generar tres tipos de partidas distintas, según el nivel de dificultad escogido (1, 2 o 3).
-   `disparos`: tipo numérico, representa el número de disparos disponibles. Si llega a cero, termina el juego.
-   `barcos`: un array representando los barcos dispuestos en el tablero. Cada barco es un objeto autosubsistente, lo cual permite diferenciar entre coordenadas tocadas y barco hundido. 
-   `coordenadasJugadas`: un array representando las coordenadas jugadas hasta el momento.
-   `ultimoBarcoHundido`: una referencia al último barco hundido que permite resaltar por pantalla (en color rojo) la información del último barco hundido.
-   `finDelJuego`: tipo booleano, se deriva de `disparos`, `coordenadasJugadas` y `barcos`. Permite renderizar el modal de fin de juego si el juego ha terminado.
