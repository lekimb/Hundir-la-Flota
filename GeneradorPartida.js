export class GeneradorPartida {
    constructor(dificultad) {
        this.dificultad = dificultad;
        this.dimensionesTablero;
        this.tablero;
        this.disparos;
        this.grid;
        this.barcos;

        this.generarDimensionesTablero();
        this.generarTablero();
        this.generarDisparos();
        this.generarGrid();
        this.generarBarcos();
    }

    generarDimensionesTablero() {
        switch (this.dificultad) {
            case 1:
                this.dimensionesTablero = 5;
                break;
            case 2:
                this.dimensionesTablero = 6;
                break;
            case 3:
                this.dimensionesTablero = 7;
                break;
        }
        return this.dimensionesTablero;
    }

    generarTablero() {
        this.tablero = [];
        for (let i = 0; i < this.dimensionesTablero; i++) {
            let fila = [];
            for (let j = 0; j < this.dimensionesTablero; j++) {
                fila.push("");
            }
            this.tablero.push(fila);
        }
        return this.tablero;
    }

    generarDisparos() {
        switch (this.dificultad) {
            case 1:
                this.disparos = 20;
                break;
            case 2:
                this.disparos = 30;
                break;
            case 3:
                this.disparos = 40;
                break;
        }
        return this.disparos;
    }

    generarGrid() {
        if (this.dimensionesTablero === 5) {
            this.grid = "grid-cols-5";
        } else if (this.dimensionesTablero === 6) {
            this.grid = "grid-cols-6";
        } else if (this.dimensionesTablero === 7) {
            this.grid = "grid-cols-7";
        }
        return this.grid;
    }

    getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

    coordenadaDisponible(coordenadaInput, barcos) {
        let disponible = true;
        barcos.forEach((barco) => {
            barco.coordenadas.forEach((coordenadaBarco) => {
                if (
                    coordenadaBarco.x === coordenadaInput.x &&
                    coordenadaBarco.y === coordenadaInput.y
                ) {
                    disponible = false;
                }
            });
        });
        return disponible;
    }

    coordenadasDisponibles(coordenadas, barcos) {
        let disponibles = true;
        coordenadas.forEach((coordenada) => {
            if (!this.coordenadaDisponible(coordenada, barcos)) {
                disponibles = false;
                return disponibles;
            }
        });
        return disponibles;
    }

    generarBarcoGenerico(longitudBarco) {
        let coordenadasBarco;
        do {
            coordenadasBarco = []; // Reset coordenadasBarco
            const direcciones = ["v", "h"];
            const direccion = direcciones[this.getRandomInt(0, 2)];

            if (direccion === "v") {
                // coordenada eje x puede ser random
                const x = this.getRandomInt(0, this.dimensionesTablero);
                // coordenada eje y tiene que estar limitada
                const y = this.getRandomInt(
                    0,
                    this.dimensionesTablero - longitudBarco
                );
                for (let i = 0; i < longitudBarco; i++) {
                    coordenadasBarco.push({ x: x, y: y + i });
                }
            } else {
                // coordenada eje y puede ser random
                const y = this.getRandomInt(0, this.dimensionesTablero);
                // coordenada eje x tiene que estar limitada
                const x = this.getRandomInt(
                    0,
                    this.dimensionesTablero - longitudBarco
                );
                for (let i = 0; i < longitudBarco; i++) {
                    coordenadasBarco.push({ x: x + i, y: y });
                }
            }
        } while (!this.coordenadasDisponibles(coordenadasBarco, this.barcos));

        let barcoGenerico = {
            id: crypto.randomUUID(),
            coordenadas: coordenadasBarco,
            coordenadasTocadas: [],
        };

        this.barcos.push(barcoGenerico);
    }

    generarBote() {
        this.generarBarcoGenerico(1);
    }

    generarBotes(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            this.generarBote();
        }
    }

    generarLancha() {
        this.generarBarcoGenerico(2);
    }

    generarLanchas(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            this.generarLancha();
        }
    }

    generarVelero() {
        this.generarBarcoGenerico(3);
    }

    generarVeleros(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            this.generarVelero();
        }
    }

    generarCrucero() {
        this.generarBarcoGenerico(4);
    }

    generarCruceros(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            this.generarCrucero();
        }
    }

    generarBarcos() {
        this.barcos = [];
        switch (this.dificultad) {
            case 1:
                this.generarCruceros(1);
                this.generarVeleros(1);
                this.generarLanchas(2);
                this.generarBotes(0);
                break;
            case 2:
                this.generarCruceros(1);
                this.generarVeleros(2);
                this.generarLanchas(3);
                this.generarBotes(1);
                break;
            case 3:
                this.generarCruceros(1);
                this.generarVeleros(2);
                this.generarLanchas(3);
                this.generarBotes(3);
                break;
        }
        return this.barcos;
    }
}
