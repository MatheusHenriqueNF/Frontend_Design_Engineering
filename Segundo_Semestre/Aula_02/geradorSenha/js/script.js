
const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const symbolEl = document.getElementById('symbols');
const numberEl = document.getElementById('number');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = "!@#$%¨&*(){}_-+=?/";

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumberCase() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbolsCase() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function gerarSenha() {

    const senha = [];

    if (upperEl.checked) {
        senha.push(getUpperCase());
    }
    if (lowerEl.checked) {
        senha.push(getLowerCase());
    }
    if (numberEl.checked) {
        senha.push(getNumberCase());
    }
    if (symbolEl.checked) {
        senha.push(getSymbolsCase());
    }
    if (senha.length === 0) return '';
    //return senha.join('');

    return senha[Math.floor(Math.random() * senha.length)]

}

function criarSenha() {
    const len = lengthEl.value;
    let senhaNova = '';
    for (i = 0; i < len; i++) {
        senhaNova += gerarSenha();
    }

    pwEl.innerText = senhaNova;

}

generateEl.addEventListener('click', criarSenha);
copyEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = pwEl.innerText;

    if (!password) {
        return
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
})
