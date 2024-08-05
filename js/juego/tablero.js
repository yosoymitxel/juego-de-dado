    const motivosAleatorios = [
        { casilla: 1, motivo: '¡Felicidades! Has ganado un concurso de belleza de perros.', operacion: '+', monto: 500, tipoDinero: 'azul' },
        { casilla: 2, motivo: 'Tu casa se incendió. ¡Necesitas reconstruirla!', operacion: '-', monto: 1000, tipoDinero: 'rojo' },
        { casilla: 3, motivo: 'Has encontrado un tesoro enterrado en tu jardín.', operacion: '+', monto: 200, tipoDinero: 'verde' },
        { casilla: 4, motivo: 'Multa por exceso de velocidad. ¡Pagas la multa!', operacion: '-', monto: 150, tipoDinero: 'azul' },
        { casilla: 5,  motivo: '¡Heredaste una fortuna de un pariente lejano!', operacion: '+', monto: 5000, tipoDinero: 'oro' },
        { casilla: 6,  motivo: 'Tu inversión en criptomonedas se desplomó.', operacion: '-', monto: 800, tipoDinero: 'rojo' },
        { casilla: 7,  motivo: '¡Ganaste la lotería! Pero solo el premio menor.', operacion: '+', monto: 100, tipoDinero: 'azul' },
        { casilla: 8,  motivo: 'Tu negocio ha tenido pérdidas inesperadas.', operacion: '-', monto: 300, tipoDinero: 'verde' },
        { casilla: 9,  motivo: '¡Te casaste! ¡Celebra con una gran fiesta!', operacion: '-', monto: 2000, tipoDinero: 'rojo' },
        { casilla: 10, motivo: 'Encontraste un billete de alta denominación en la calle.', operacion: '+', monto: 500, tipoDinero: 'azul' },
        { casilla: 11, motivo: 'Un OVNI te secuestró y te devolvió con un regalo extraterrestre: ¡un millón de monedas alienígenas!', operacion: '+', monto: 10000, tipoDinero: 'plata' },
        { casilla: 12, motivo: 'Tu mascota ganó un concurso de talentos y te dio su premio.', operacion: '+', monto: 300, tipoDinero: 'verde' },
        { casilla: 13, motivo: 'Te perdiste en la jungla y te comieron los mosquitos. ¡Gastos médicos!', operacion: '-', monto: 400, tipoDinero: 'rojo' },
        { casilla: 14, motivo: 'Inventaste una nueva máquina del tiempo y la vendiste a un museo.', operacion: '+', monto: 10000, tipoDinero: 'oro' },
        { casilla: 15, motivo: 'Tu barco pirata fue hundido por una ballena. ¡Perdiste todo tu botín!', operacion: '-', monto: 2000, tipoDinero: 'rojo' },
        { casilla: 16, motivo: '¡Ganaste un concurso de baile! El premio es un viaje a las Bahamas.', operacion: '-', monto: 1500, tipoDinero: 'rojo' },
    ];

    function generarTableroNumerado(filas) {
        let columnas = filas
        generarTablero(filas, columnas);
        return numerarBorde(document.getElementById('tablero'),filas, columnas);
    }

    // Función para generar el tablero
    function generarTablero(filas, columnas) {
        const tablero = document.getElementById('tablero');
        let html = '<table>';
        for (let i = 0; i < filas; i++) {
            html += '<tr>';
            for (let j = 0; j < columnas; j++) {

                html += `<td id="celda-x-${i}-y-${j}" class="tablero-celdas">
                            <div id="motivo-x-${i}-y-${j}"></div>
                            <div id="tablero-x-${i}-y-${j}"></div>
                            <div class="jugador" data-fila="${i}" data-columna="${j}"></div>
                        </td>`;
            }
            html += '</tr>';
        }
        html += '</table>';
        tablero.innerHTML = html;
    }

    // Función para generar el tablero
    function numerarBorde(tablero,filas,columnas) {
        let celda
        let celdas = []

        let numero  = 0;
        let fila    = columna = 0;

        // Coordenadas
        let i = j = 0

        //Fila de izquierda
        while(i<filas){
            celda = tablero.querySelector(`#tablero-x-${filas-1-i}-y-0`);
            
            if(celda ){
                celda.textContent = ++numero;
                celdas.push({numero: numero, id : `x-${filas-1-i}-y-0` })
            }
            i++
            
        }

        //Columna superior
        i = 1
        while(i<filas){
            celda = tablero.querySelector(`#tablero-x-0-y-${i}`);
            if(celda ){
                celda.style='color:green'
                celda.textContent = ++numero;
                celdas.push({numero: numero, id : `x-0-y-${i}` })
            }
            i++
            
        }


        //Columna superior
        i = 0
        while(i<filas){
            celda = tablero.querySelector(`#tablero-x-${i+1}-y-${filas-1}`);
            if(celda ){
                celda.style='color:blue'
                celda.textContent = ++numero;
                celdas.push({numero: numero, id : `x-${i+1}-y-${filas-1}` })
            }
            i++
            
        }

        //Columna inferior
        i = 1
        while(i<filas-1){
            celda = tablero.querySelector(`#tablero-x-${columnas-1}-y-${filas-1-i}`);
            if(celda ){
                celda.style='color:red'
                celda.textContent = ++numero;
                celdas.push({numero: numero, id : `x-${columnas-1}-y-${filas-1-i}` })
            }
            i++
            
        }

        return celdas
    }

    function generarMotivoAleatorio(){
        let motivoAleatorio = Math.floor(Math.random() * motivosAleatorios.length-1) + 1;
        return motivosAleatorios[motivoAleatorio]
    }

    function recorerTodoElTablero(celdas){
        
        // Constructor de motivos de pagos
        for (const iterator of celdas) {
            let motivo = generarMotivoAleatorio()
            util.setDataset(`motivo-${iterator.id}`,'casilla', motivo.casilla)
            util.setDataset(`motivo-${iterator.id}`,'monto', motivo.monto)
            util.setIdText(`motivo-${iterator.id}`, motivo.motivo)
                       
        }
    }
