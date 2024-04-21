export default function ReiniciarPartida({ reiniciarPartida }) {
    return (
        <button
            onClick={reiniciarPartida}
            className="fixed bottom-5 right-10 text-slate-600 hover:underline hover:cursor-pointer"
        >
            Reiniciar partida
        </button>
    );
}
