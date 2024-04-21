import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import { GeneradorPartida } from "./GeneradorPartida";

import Tablero from "./Tablero";
import InfoBarcos from "./InfoBarcos";
import InfoDisparos from "./InfoDisparos";
import Leyenda from "./Leyenda";
import ModalFinDelJuego from "./ModalFinDelJuego";
import ReiniciarPartida from "./ReiniciarPartida";
import SeleccionarDificultad from "./SeleccionarDificultad";

export default function Partida({ dificultad }) {
    const generador = new GeneradorPartida(dificultad);
    const tablero = generador.tablero; // Tablero
    const [disparos, setDisparos] = useState(generador.disparos); // Disparos
    const [barcos, setBarcos] = useImmer(generador.barcos); // Barcos

    const [coordenadasJugadas, setCoordenadasJugadas] = useImmer([]); // Coordenadas jugadas
    const [ultimoBarcoHundido, setUltimoBarcoHundido] = useState(null);
    const finDelJuego = isFinDelJuego(); // Derived state (computed from others states)

    function isBarcoHundido(barco) {
        return barco.coordenadas.length === barco.coordenadasTocadas.length;
    }

    function todosHundidos() {
        let todosHundidos = true;
        barcos.forEach((barco) => {
            if (!isBarcoHundido(barco)) {
                todosHundidos = false;
            }
        });
        return todosHundidos;
    }

    function isFinDelJuego() {
        return disparos <= 0 || todosHundidos();
    }

    function reiniciarPartida() {
        setDisparos(generador.generarDisparos());
        setBarcos(generador.generarBarcos());
        setCoordenadasJugadas([]);
    }

    useEffect(() => {
        // Logs
        if (coordenadasJugadas.length === 0) {
            for (let barco of barcos) {
                let mensaje = "";
                if (barco.coordenadas.length === 1) {
                    mensaje = mensaje + "Bote: ";
                } else if (barco.coordenadas.length === 2) {
                    mensaje = mensaje + "Lancha: ";
                } else if (barco.coordenadas.length === 3) {
                    mensaje = mensaje + "Velero: ";
                } else if (barco.coordenadas.length === 4) {
                    mensaje = mensaje + "Crucero: ";
                }
                barco.coordenadas.forEach((coordenada) => {
                    mensaje =
                        mensaje +
                        "(" +
                        coordenada.x +
                        "," +
                        coordenada.y +
                        ") ";
                });
                console.log(mensaje);
            }
        }
    }, [coordenadasJugadas]);

    return (
        <>
            <main className="flex justify-center">
                <div className="relative bg-yellow-10">
                    <InfoBarcos
                        barcos={barcos}
                        isBarcoHundido={isBarcoHundido}
                        ultimoBarcoHundido={ultimoBarcoHundido}
                        setUltimoBarcoHundido={setUltimoBarcoHundido}
                    />
                    <div className="w-fit mx-auto bg-yellow-20">
                        <InfoDisparos disparos={disparos} />
                        <div
                            className={`grid ${generador.generarGrid()} gap-2 relative w-fit mx-auto`}
                        >
                            <Tablero
                                tablero={tablero}
                                coordenadasJugadas={coordenadasJugadas}
                                barcos={barcos}
                                finDelJuego={finDelJuego}
                                setCoordenadasJugadas={setCoordenadasJugadas}
                                setDisparos={setDisparos}
                                setBarcos={setBarcos}
                                setUltimoBarcoHundido={setUltimoBarcoHundido}
                                isBarcoHundido={isBarcoHundido}
                            />
                            {finDelJuego ? (
                                <ModalFinDelJuego
                                    todosHundidos={todosHundidos}
                                    reiniciarPartida={reiniciarPartida}
                                />
                            ) : null}
                        </div>
                        {/* Fin grid */}
                        <Leyenda />
                    </div>
                </div>
            </main>
            {/* Fin flex */}
            <SeleccionarDificultad />
            <ReiniciarPartida reiniciarPartida={reiniciarPartida} />
        </>
    );
}
