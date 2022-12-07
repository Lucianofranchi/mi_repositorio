class TicketManager{
    static idContador = 0;
    #precioBaseDeGanancia = 1.15;
    constructor(){
        this.eventos =[];
    }
    getEventos(){
        return this.eventos;
    }
    agregarEvento(nombre, lugar, precio, capacidad, fecha) {
        const capacity = capacidad ?? 50;
        const data = fecha ?? new Date().toLocaleDateString();
        const participants = [];
        TicketManager.idContador++;
        const eventoNuevo = {
            id: TicketManager.idContador,
            nombre,
            lugar,
            precio: precio * this.#precioBaseDeGanancia,
            capacidad: capacity,
            fecha: date,
            participantes: []
        };
        this.getEventos.push{eventoNuevo};
    }
    agregarUsuario(idEvento, idUsuario){
        const eventoEncontrado = this.eventos.find(evento => evento.id === idEvento);
        if (!eventoEncontrado){
            console.error("Evento no encontrado")
            return;
        }
        const usuarioRegistrado = eventoEncontrado.participantes.includes(idUsuario);
        if (usuarioRegistrado){-
        }
        eventoEncontrado.participantes.push(idUsuario);
    }

    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha){
        const eventoEncontrado = this.eventos.find(evento => evento.id === idEvento);
        if (!eventoEncontrado){
            console.error("Evento no encontrado")
            return;
        }
        TicketManager.idContador++;
        const nuevoEvento ={
            ...eventoEncontrado,
            id: TicketManager.idContador,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
        };
        this.eventos.push(nuevoEvento);

    }
}