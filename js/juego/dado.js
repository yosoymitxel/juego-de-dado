function numeroAleatorio(rango = 6){
    return Math.floor(Math.random() * rango) + 1;
}

function tirarDados() {
    // Lógica para simular la tirada de dados
    const dado1 = numeroAleatorio(6)
    const dado2 = numeroAleatorio(6)
    const total = dado1 + dado2;

    mostrarPuntosDado(7, 'dado-1');
    mostrarPuntosDado(7, 'dado-2');

    const intervalId = setInterval(cambiarCara, 10);

    // Mostrar los puntos de los dados
    setTimeout(() => {
        clearInterval(intervalId);
        mostrarPuntosDado(dado1, 'dado-1');
        mostrarPuntosDado(dado2, 'dado-2');
    }, 1000);

    return total
}


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

    
   /*  console.log(turno_actual)
    console.log(totalJugadores) */

    util.setDataset('btn-turno','turnoActual',++turno_actual)
    if(turno_actual>totalJugadores){
        turno_actual = 1
    }
    util.setIdText("btn-text__turno-jugador",turno_actual)

    for(i=0;i<totalJugadores;i++){
        util.setIdHtml('datos-jugador-'+(i+1),
            `<div id="datos-jugador_detalles" class="jugador-color-${eval('jugador' + (i+1)).color} ">
                <div id="dato-jugador_nombre-${(i+1)}">
                    ${eval('jugador' + (i+1)).nombre} 
                </div>
                <div id="dato-jugador_posicion-${(i+1)}">
                    ${eval('jugador' + (i+1)).posicionActual} 
                </div>
                <div id="dato-jugador_dinero-${(i+1)}">
                    ${eval('jugador' + (i+1)).dinero} 
                </div>
            </div>`
        )
    }
    
}

function mostrarPuntosDado(valor, idDado) {
    //console.log(valor)
    const dado = document.getElementById(idDado);
    const patronesPuntos = [
        '●',
        '● ●',
        '●</br> ● </br>●',
        '● ●</br>● ●',
        '● ●</br>  ●</br>● ●',
        '● ●</br>● ●</br>● ●',
        '?'
    ];
    //console.log(patronesPuntos)
    dado.innerHTML = patronesPuntos[valor - 1];
}

function cambiarCara() {
    mostrarPuntosDado(numeroAleatorio(), 'dado-1')
    mostrarPuntosDado(numeroAleatorio(), 'dado-2')
}
