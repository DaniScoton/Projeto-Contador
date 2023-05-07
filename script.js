var numero;

function aumentar(){
    numero = parseInt(document.getElementById('numero').textContent);
    document.getElementById('numero').textContent = numero + 1;
}

function diminuir(){
    numero = parseInt(document.getElementById('numero').textContent);
    document.getElementById('numero').textContent = numero - 1;
}

function zerar(){
    document.getElementById('numero').textContent = 0;
}
