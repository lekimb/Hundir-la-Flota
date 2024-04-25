export default function Navegacion({ reiniciarPartida }) {
    return (
        <nav className="sm:bg-transparent bg-white fixed bottom-0 left-0 w-full flex justify-between md:py-3 py-2 text-lg">
            <button
                onClick={() => location.reload()}
                className="text-slate-600 hover:underline md:ml-10 ml-3"
            >
                Seleccionar dificultad
            </button>
            <button
                onClick={reiniciarPartida}
                className="text-slate-600 hover:underline md:mr-10 mr-3"
            >
                Reiniciar partida
            </button>
        </nav>
    );
}
