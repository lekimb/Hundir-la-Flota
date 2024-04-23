export default function Menu({ setPartidaIniciada, setDificultad }) {
    const tarjetas = [
        {
            dificultad: "Fácil",
            info: [
                "Tablero de 5x5",
                "Disparos: 20",
                "1 crucero",
                "1 velero",
                "2 lanchas",
                "0 botes",
            ],
        },
        {
            dificultad: "Normal",
            info: [
                "Tablero de 6x6",
                "Disparos: 30",
                "1 crucero",
                "2 veleros",
                "3 lanchas",
                "1 bote",
            ],
        },
        {
            dificultad: "Difícil",
            info: [
                "Tablero de 7x7",
                "Disparos: 40",
                "1 crucero",
                "2 veleros",
                "3 lanchas",
                "3 botes",
            ],
        },
    ];

    function iniciarPartida(dificultad) {
        setPartidaIniciada(true);
        setDificultad(dificultad);
    }

    return (
        <>
            <h2 className="my-10 text-center text-2xl text-slate-500">
                Elige la dificultad
            </h2>
            <section className="flex md:flex-row flex-col justify-center items-center gap-5">
                {tarjetas.map((tarjeta, index) => {
                    return (
                        <div
                            key={index}
                            className="border-4 w-52 border-blue-950 rounded-xl hover:cursor-pointer hover:-translate-y-2 transition-all"
                            onClick={() => iniciarPartida(index + 1)}
                        >
                            <button className="py-3 bg-blue-950 text-white font-bold block w-full text-lg tracking-wide">
                                {tarjeta.dificultad}
                            </button>
                            <div className="bg-blue-950">
                                <div className="bg-slate-50 rounded-t-lg rounded-b-lg p-4">
                                    {tarjeta.info.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <p className="text-slate-500 leading-relaxed">
                                                    {item}
                                                </p>
                                                {index === 1 ? (
                                                    <p className="h-[2px] my-2 w-full bg-slate-200"></p>
                                                ) : null}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
        </>
    );
}
