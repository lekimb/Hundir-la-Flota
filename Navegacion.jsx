export default function Navegacion({ reiniciarPartida }) {
    return (
        <section>
            <div className="h-5"></div>
            <nav className="w-full justify-between py-3 flex">
                <button
                    onClick={() => location.reload()}
                    className="text-slate-600 sm:text-lg text-base hover:underline sm:ml-10 ml-10"
                >
                    Seleccionar dificultad
                </button>
                <button
                    onClick={reiniciarPartida}
                    className="text-slate-600 sm:text-lg text-base hover:underline sm:mr-10 mr-10"
                >
                    Reiniciar partida
                </button>
            </nav>
        </section>
    );
}
