    class jugadores{
        dinero              = 0
        nombre              = 'juanito'
        posicionActual      = 0
        posicionAnterior    = 0
        imagenJugador       = ''
        color               = 'black'

        tirarDados(){
            mostrarPuntosDado(7, 'dado-1');
            mostrarPuntosDado(7, 'dado-2');
            
            this.posicionAnterior    = this.posicionActual

            setTimeout(() => {
                this.posicionActual      = this.posicionAnterior = tirarDados()
            }, 3000);
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
        let turno = (util.getDataset('btn-turno','turnoActual'));

        if(turno>totalJugadores){
            turno = 1
        }

        console.log('Invoca Turno: '+turno+'/'+totalJugadores)

        switch(turno){
            case 1:
                console.log('Turno de jugador: '+1)
                jugador1.tirarDados()
            break;
            case 2:
                console.log('Turno de jugador: '+2)
                jugador2.tirarDados()
            break;
            case 3:
                console.log('Turno de jugador: '+3)
                jugador3.tirarDados()
            break;
            case 4:
                console.log('Turno de jugador: '+4)
                jugador4.tirarDados()
            break;
            default:
                console.log('Error turno: '+turno)
                break;
        }

        console.log(turno)
        console.log(totalJugadores)

        util.setDataset('btn-turno','turnoActual',++turno)
        if(turno>totalJugadores){
            turno = 1
        }
        util.setIdText("btn-text__turno-jugador",turno)
        
    }
