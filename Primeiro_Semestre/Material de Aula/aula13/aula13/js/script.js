/*
    TIPOS DE OPERADORES

    aritméticos: + - / * ** \\ % ++ --
    comparação: > < >= <= == ===
    lógicos: && || !
    atribuição: = += -= /= *=
    concatenação: +

        CSS                 JS
        background-color    backgroundColor
        margin-left         marginLeft
        border-top          borderTop
        padding-right       paddingRight 

        todas as propriedades CSS podem ser utlizadas no JS, se uma propriedade do CSS for uma palavra composta, separada por hífen, no JS esta propriedade de ser escrita de forma única, ou seja, a palavra composta se torna única e a segunda palavra, deverá, obrigatoriamente, ter a letra inicial em maiúscula.  
        
        parseInt() => converte valores para Inteiro
        parseFloat() => converte valores para Real

        .innerText => insere somente textos em um determinado elemento HTML
        .innerHTML => insere elementos HTML em um determinado elemento HTML


*/
function somar(){
    let valor1 = document.getElementById('txtValor1');
    let valor2 = document.getElementById('txtValor2');
    let resultado = document.getElementById('resultado');
    let erroValor1 = document.getElementById('erroValor1');

    if(valor1.value == ''){
        //alert('Preencha o primeiro valor.');
        erroValor1.innerHTML="<div class='erro'>Preencha o primeiro valor</div>"

        valor1.style.backgroundColor = "#f00";
        valor1.style.border = "1px solid #0f0";

        valor1.focus();
        return false;
    }

    let soma = parseInt(valor1.value) + parseInt(valor2.value);

    resultado.innerText = soma;

    // document.write(soma) // apaga todo o conteúdo do documento.

}