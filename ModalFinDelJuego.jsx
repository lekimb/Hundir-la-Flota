import { MdOutlineReplay } from "react-icons/md";

export default function ModalFinDelJuego({ todosHundidos, reiniciarPartida }) {
    return (
        <div className="absolute w-full h-full bg-slate-700 bg-opacity-70">
            <div className="absolute top-1/2 -translate-y-20 left-1/2 -translate-x-1/2 w-full">
                <p className="text-4xl text-white font-bold text-center mb-3">
                    {todosHundidos() ? "¡Ganaste!" : "Game over"}
                </p>
                <button
                    className="p-3 block mx-auto bg-blue-950 text-white rounded-lg hover:scale-105 transition-all"
                    onClick={() => reiniciarPartida()}
                >
                    <MdOutlineReplay className="text-5xl " />
                </button>
            </div>
        </div>
    );
}
