const resultado = document.querySelector(' .result');
const confirmar = document.querySelector('.igual');

function insert(valor){
    resultado.innerHTML += valor;
}

function clean(){
    resultado.innerHTML = ' ';
}

function backspace(){
    if(resultado.textContent){
        result = document.getElementById('resultado').innerHTML
    resultado.innerHTML = result.substring(0, result.length -1);
    }
    
}
function confirm(){
    if(resultado.textContent != 'ERRO'){
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)

    }

}