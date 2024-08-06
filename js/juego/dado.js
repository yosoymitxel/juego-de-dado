function numeroAleatorio(rango = 6){
    return Math.floor(Math.random() * rango) + 1;
}

function tirarDados() {
    // Lógica para simular la tirada de dados
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
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

    
    console.log(turno_actual)
    console.log(totalJugadores)

    util.setDataset('btn-turno','turnoActual',++turno_actual)
    if(turno_actual>totalJugadores){
        turno_actual = 1
    }
    util.setIdText("btn-text__turno-jugador",turno_actual)

    for(i=0;i<totalJugadores;i++){
        console.log('DTETETE')
        console.log(eval('jugador' + turno_actual).posicionActual)
        util.setIdText('datos-jugador-'+(i+1),eval('jugador' + turno_actual).posicionActual)
        //eval('jugador' + turno_actual).tirarDados();
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
