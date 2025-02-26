function hora() {
    let data = new Date();

    tempo = data.toLocaleDateString();
    document.write(tempo)
}



setInterval(hora, 1000);

