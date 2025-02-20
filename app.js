let amigos = [];

//  Funcionalidad para presionar enter para ingresar amigo secreto
var input = document.getElementById("amigo");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    agregarAmigo();
    }
});

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == null || nombreAmigo == ''){
        alert('Por favor, inserte un nombre');
    }
    amigos.push(nombreAmigo);
    document.getElementById('amigo').value = '';
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
    let numeroGenerado = Math.floor(Math.random()*(amigos.length));
    console.log(numeroGenerado)
    let amigoSecreto = document.getElementById('resultado');

    amigoSecreto.innerHTML = `El amigo secreto es: ${amigos[numeroGenerado]}`;
}