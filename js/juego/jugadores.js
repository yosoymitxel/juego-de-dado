    class jugadores{
        id                  = 0
        dinero              = 0
        nombre              = 'juanito'
        posicionActual      = 0
        posicionAnterior    = 0
        imagenJugador       = ''
        color               = 'black'

        constructor(id,nombre='juanito',color="black"){
            this.id             =   id
            this.nombre         = nombre
            this.color          = color
        }

        tirarDados(){         
            this.posicionAnterior    = this.posicionActual
            this.posicionActual      = obtenerCeldaNumero(this.posicionAnterior + tirarDados())
            this.actualizarPosicionJugador()
        }

        actualizarPosicionJugador() {
            // Obtener la nueva celda
            const nuevaCelda = obtenerCelda(this.posicionActual);
    
            console.log(nuevaCelda)

            // Obtener la imagen del jugador (suponiendo que está almacenada en una variable)
            var imagenOriginal = document.getElementById('imagen-jugador');
            
            try {
                document.getElementById('imagen-jugador-' + this.id).remove();
            } catch (error) {
                console.error(error)
            }

            try {
                var imagenJugador = imagenOriginal.cloneNode(true); // Clona el nodo y sus hijos
                imagenJugador.id  = 'imagen-jugador-' + this.id
                console.log(imagenJugador.id)

            } catch (error) {
                console.error(error)
            }
           


            // Remover la imagen de la celda anterior (si existe)
            //imagenJugador.parentNode.removeChild(document.getElementById('imagen-jugador-' + this.id));
    
            // Agregar la imagen a la nueva celda
            nuevaCelda.appendChild(imagenJugador);
            console.log(obtenerCeldaId(this.posicionActual))
            console.log('ficha-'+this.color+' jugador-visible')
            util.appendClass('imagen-jugador-'+this.id,('ficha'))
            util.appendClass('imagen-jugador-'+this.id,('ficha-'+this.color))
            util.appendClass('imagen-jugador-'+this.id,('jugador-visible'))

        }
    }

