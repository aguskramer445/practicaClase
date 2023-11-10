let titulo = document.querySelector('h1')

let botonRojo = document.querySelector('#Rojo')
let botonAzul = document.querySelector('#Azul')
let botonVerde = document.querySelector('#Verde')
let botonNegro = document.querySelector('#Negro')

botonRojo.onclick = function(){
    titulo.style.color = 'red'
}
botonAzul.onclick = function(){
    titulo.style.color = 'blue'
}
botonVerde.onclick = function(){
    titulo.style.color = 'green'
}
botonNegro.onclick = function(){
    titulo.style.color = 'black'
}