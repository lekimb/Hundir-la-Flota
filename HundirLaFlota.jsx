import { useState } from "react";
import Partida from "./Partida.jsx";
import Menu from "./Menu.jsx";

export default function HundirLaFlota() {
    const [partidaIniciada, setPartidaIniciada] = useState(false);
    const [dificultad, setDificultad] = useState(null);

    return (
        <div className="tracking-wider font-ubuntu">
            <h1 className="text-center sm:text-5xl text-4xl text-blue-950 font-bold mt-10">
                Hundir la flota
            </h1>
            {!partidaIniciada ? (
                <Menu
                    setPartidaIniciada={setPartidaIniciada}
                    setDificultad={setDificultad}
                />
            ) : (
                <Partida dificultad={dificultad} />
            )}
        </div>
    );
}
