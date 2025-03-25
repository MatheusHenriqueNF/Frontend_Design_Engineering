/* 
// comentario de uma linha no JS
/*
    comentário de várias linhas

    var mens1 = "Isto é FIAP!! ";
    let mens2 = "Turma: ";
    mens3 = "1TDSQ";
    const mens4 = 'constante mens4';

    mens1 = 3;
    mens2 = 47;

    // concatenação
    mensagem = "Concatenação: " + (mens1 + mens2) + mens3;

    valor = mens1 + mens2
   
    //interpolação utiliza-se a crase (`) tanto no início quanto no final da linha
    mensagem1 = `Interpolação: ${ mens1 } ${ mens2 } ${ mens3 } ${ mens4 }`;
   // sinal + => concatanação
//alert(constante);

// document.write() => escreve uma mensagem qualquer na tela, porém ele apaga o conteúdo anteior.
document.write(mensagem); */

function somar(){
    let valor1 = parseInt(document.getElementById('txtValor1').value);
    let valor2 = parseInt(document.getElementById('txtValor2').value);

    let soma = valor1 + valor2;

    alert(soma);

}