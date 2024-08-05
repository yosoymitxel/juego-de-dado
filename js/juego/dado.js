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

function mostrarPuntosDado(valor, idDado) {
    console.log(valor)
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
    console.log(patronesPuntos)
    dado.innerHTML = patronesPuntos[valor - 1];
}

function cambiarCara() {
    mostrarPuntosDado(numeroAleatorio(), 'dado-1')
    mostrarPuntosDado(numeroAleatorio(), 'dado-2')
}
