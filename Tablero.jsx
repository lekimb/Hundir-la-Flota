export default function Tablero({
    setCoordenadasJugadas,
    setDisparos,
    setBarcos,
    setUltimoBarcoHundido,
    tablero,
    coordenadasJugadas,
    barcos,
    finDelJuego,
    isBarcoHundido,
}) {
    function isCoordenadaJugada(coordenada) {
        let isCoordenadaJugada = false;
        for (let coordenadaJugada of coordenadasJugadas) {
            if (
                coordenada.x === coordenadaJugada.x &&
                coordenada.y === coordenadaJugada.y
            ) {
                isCoordenadaJugada = true;
                break;
            }
        }
        return isCoordenadaJugada;
    }

    function addCoordenadaJugada(coordenada) {
        setCoordenadasJugadas((draft) => {
            draft.push(coordenada);
        });
    }

    function restarDisparo() {
        setDisparos((prev) => prev - 1);
    }

    function addCoordenadaTocada(coordenada, id) {
        setBarcos((barcos) => {
            barcos.forEach((barco) => {
                if (barco.id === id) {
                    barco.coordenadasTocadas.push(coordenada);
                }
            });
        });
    }

    function handleClick(input) {
        if (isCoordenadaJugada(input) || finDelJuego) {
            return;
        }

        addCoordenadaJugada(input);
        restarDisparo();

        // Comprobar match
        for (let barco of barcos) {
            for (let coordenada of barco.coordenadas) {
                if (coordenada.x === input.x && coordenada.y === input.y) {
                    addCoordenadaTocada(input, barco.id); // coordenada, id
                    if (
                        barco.coordenadas.length ===
                        barco.coordenadasTocadas.length + 1
                    ) {
                        setUltimoBarcoHundido(barco);
                    }
                }
            }
        }
    }

    return (
        <>
            {tablero.map((fila, indexFila) => {
                return fila.map((item, indexColumna) => {
                    const coordenada = { x: indexColumna, y: indexFila };
                    // Coordenada sin jugar
                    let bgColor = "bg-slate-300";
                    // Coordenada jugada
                    for (let coordenadaJugada of coordenadasJugadas) {
                        if (
                            coordenadaJugada.x === coordenada.x &&
                            coordenadaJugada.y === coordenada.y
                        ) {
                            bgColor = "bg-blue-300";
                        }
                    }
                    // Coordenada tocada o hundida
                    for (let barco of barcos) {
                        for (let coordenadaTocada of barco.coordenadasTocadas) {
                            if (
                                coordenadaTocada.x === coordenada.x &&
                                coordenadaTocada.y === coordenada.y
                            ) {
                                if (isBarcoHundido(barco)) {
                                    bgColor = "bg-red-400";
                                } else {
                                    bgColor = "bg-orange-300";
                                }
                            }
                        }
                    }
                    return (
                        <div
                            key={indexColumna + "" + indexFila}
                            className={`${bgColor} ${
                                finDelJuego ? "" : "hover:cursor-pointer"
                            } sm:size-12 size-10 flex justify-center items-center`}
                            onClick={() => handleClick(coordenada)}
                        ></div>
                    );
                });
            })}
        </>
    );
}
