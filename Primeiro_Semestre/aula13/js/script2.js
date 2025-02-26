
function trocar(){
    var lamp = document.getElementById("lampada");
    var interruptor = document.getElementById("btnInterruptor");
    if (lamp.src.match("bulbon")) {
        lamp.src = "imagens/pic_bulboff.gif";
        interruptor.value="Acender";
        document.body.style.backgroundColor="#000"
    }
    else{
        lamp.src = "imagens/pic_bulbon.gif";
        document.body.style.backgroundColor="#fff"
        interruptor.value="Apagar";
    }
}