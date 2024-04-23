import { useEffect } from "react";

export default function InfoBarcos({
    barcos,
    isBarcoHundido,
    ultimoBarcoHundido,
    setUltimoBarcoHundido,
}) {
    function barcosAFlote() {
        let barcosAFlote = [];
        for (let barco of barcos) {
            if (!isBarcoHundido(barco)) {
                barcosAFlote.push(barco);
            }
        }
        return barcosAFlote;
    }

    function barcosAFloteInfo() {
        let botes = 0;
        let lanchas = 0;
        let veleros = 0;
        let cruceros = 0;

        for (let barco of barcosAFlote()) {
            switch (barco.coordenadas.length) {
                case 1:
                    botes++;
                    break;
                case 2:
                    lanchas++;
                    break;
                case 3:
                    veleros++;
                    break;
                case 4:
                    cruceros++;
                    break;
            }
        }

        let info = [
            { tipo: "Cruceros", longitud: 4, quedan: cruceros },
            { tipo: "Veleros", longitud: 3, quedan: veleros },
            { tipo: "Lanchas", longitud: 2, quedan: lanchas },
            { tipo: "Botes", longitud: 1, quedan: botes },
        ];

        return info;
    }

    useEffect(() => {
        setTimeout(() => setUltimoBarcoHundido(null), 750);
    }, [ultimoBarcoHundido]);

    return (
        <section>
            <p className="mb-5 text-blue-950 text-2xl font-bold tracking-wide text-center">
                Barcos restantes
            </p>
            <ul className="grid grid-cols-4 md:gap-2 gap-1">
                {barcosAFloteInfo().map((barco, index) => {
                    let resaltado;
                    if (ultimoBarcoHundido) {
                        resaltado =
                            ultimoBarcoHundido.coordenadas.length ===
                            barco.longitud;
                    } else {
                        resaltado = false;
                    }

                    return (
                        <li
                            key={index}
                            className={`bg-white md:w-32 text-center border-4 rounded-lg mb-5 md:px-5 px-2 py-2`}
                        >
                            <div className={`md:text-lg text-sm text-slate-500`}>
                                {barco.tipo}
                            </div>
                            <div
                                className={`text-4xl font-bold ${
                                    resaltado ? "text-red-400" : "text-blue-950"
                                }`}
                            >
                                {barco.quedan}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
