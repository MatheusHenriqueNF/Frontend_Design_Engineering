function cor(){

    valor = Math.floor(Math.random() * 255);
    valor = valor.toString(16);
    return valor

    
}

function cor1(){
    corfinal = "#"+ cor() + cor() + cor();
    document.body.style.backgroundColor = corfinal;
    alert(corfinal);
}