# Hundir-la-Flota
https://mikelbarberoles.netlify.app/hundirlaflota

## Componentes
`HundirLaFlota` es el componente raíz de la aplicación y contiene a los componentes `Menu` y `Partida`. En el componente `Partida` se encuentra la estructura de datos del juego, así como algunas funciones auxiliares básicas. 

El componente `Partida` contiene al resto de componentes: `InfoBarcos`, `InfoDisparos`, `Tablero`, `Leyenda`, `ModalFinDelJuego` y `Navegacion`. En el componente `Tablero` se encuentra la lógica principal del juego. 

## Estructura de datos
- partidaIniciada: tipo booleano, permite renderizar el menú o la partida según convenga.
- dificultad: tipo numérico, permite generar tres tipos de partidas distintas, según el nivel de dificultad escogido (1, 2 o 3).
- disparos: tipo numérico, representa el número de disparos disponibles. Si llega a cero, termina el juego.
- barcos: un array de objetos 'barco' que representa los barcos dispuestos en el tablero
- barco: cada barco es un objeto con tres propiedades: id, coordenadas y coordenadasTocadas. Si coordenadas y coordenadasTocadas coinciden, entonces se considerará barco hundido.
- coordenadasJugadas: un array
- ultimoBarcoHundido
- finDelJuego
