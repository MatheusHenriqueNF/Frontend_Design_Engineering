function validar(){
    let nome = document.getElementById('txtNome');

    if(nome.value == ""){
        alert("Preencha o campo nome");
        nome.focus();
        return false;
    }

    if(senha.value != confSenha.value){
        alert("As senhas não conferem");
    }
}

14li309i3fy4682vean