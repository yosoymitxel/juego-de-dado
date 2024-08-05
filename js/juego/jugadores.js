    class jugadores{
        dinero              = 0
        nombre              = 'juanito'
        posicionActual      = 0
        posicionAnterior    = 0
        imagenJugador       = ''
        color               = 'black'

        tirarDados(){         
            this.posicionAnterior    = this.posicionActual
            this.posicionActual      = this.posicionAnterior = tirarDados()
        }

    }
    let totalJugadores = 2
    
    let jugador1 = new jugadores()
    let jugador2 = new jugadores()
    let jugador3 = new jugadores()
    let jugador4 = new jugadores()

    //jugador1.tirarDados()

    function cambiarDeTurno(){
        let util = new Util
        let turno_actual = (util.getDataset('btn-turno','turnoActual'));

        if(turno_actual > totalJugadores){
            turno_actual = 1
        }

        console.log('Invoca Turno: '+turno_actual+'/'+totalJugadores)

        try {
            eval('jugador' + turno_actual).tirarDados();
        } catch (error) {
            console.error(error)
        }

        
        console.log(turno_actual)
        console.log(totalJugadores)

        util.setDataset('btn-turno','turnoActual',++turno_actual)
        if(turno_actual>totalJugadores){
            turno_actual = 1
        }
        util.setIdText("btn-text__turno-jugador",turno_actual)
        
    }
