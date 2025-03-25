function hora(){
    horaatual = document.getElementById("horaatual");
    
    let data = new Date();
    tempo = data.toLocaleTimeString();
    
    return horaatual.innerText = tempo;
}


teste = setInterval(hora,1000)

function parar(){
    clearInterval(teste)
}
