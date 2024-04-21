export default function SeleccionarDificultad() {
    return (
        <button
            onClick={() => location.reload()}
            className="fixed bottom-5 left-10 text-slate-600 hover:underline hover:cursor-pointer"
        >
            Seleccionar dificultad
        </button>
    );
}
