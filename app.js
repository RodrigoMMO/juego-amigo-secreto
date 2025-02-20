let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == null || nombreAmigo == ''){
        alert('Por favor, inserte un nombre');
    }
    amigos.push(nombreAmigo);
    document.getElementById('amigo').value = '';
    console.log(amigos);
    actualizarListaAmigos();
    return;
}

function actualizarListaAmigos(){
    let nombresListaAmigos = document.getElementById('listaAmigos');
    nombresListaAmigos.innerHTML = '';
    for (let index = 0; index < amigos.length; index++) {
        nombresListaAmigos.innerHTML += `<li>${amigos[index]}</li>`
    }
    
}

function sortearAmigo() {
    
}