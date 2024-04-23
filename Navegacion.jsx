export default function Navegacion({ reiniciarPartida }) {
    return (
        <div className="bg-white fixed flex justify-between w-full bottom-0 left-0 md:py-3 py-2">
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
        </div>
    );
}
