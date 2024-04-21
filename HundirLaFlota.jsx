import { useState } from "react";
import Partida from "./Partida.jsx";
import Menu from "./Menu.jsx";

export default function HundirLaFlota() {
    const [partidaIniciada, setPartidaIniciada] = useState(false);
    const [dificultad, setDificultad] = useState(null);

    return (
        <div class="tracking-wide font-lexend">
            <h1 className="text-center text-4xl text-blue-950 font-bold mt-10 mb-5">
                Hundir la flota
            </h1>
            {!partidaIniciada ? (
                <Menu
                    setPartidaIniciada={setPartidaIniciada}
                    setDificultad={setDificultad}
                />
            ) : (
                <div className="relative">
                    <Partida dificultad={dificultad} />
                </div>
            )}
        </div>
    );
}
