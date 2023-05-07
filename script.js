function aumentar(){
    var numero = parseInt(document.getElementById('numero').textContent);
    document.getElementById('numero').textContent = numero + 1;
}

function diminuir(){
    var numero = parseInt(document.getElementById('numero').textContent);
    document.getElementById('numero').textContent = numero - 1;
}

function zerar(){
    document.getElementById('numero').textContent = 0;
}
