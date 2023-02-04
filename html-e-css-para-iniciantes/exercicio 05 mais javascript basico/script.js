const circulo = document.querySelector('.circulo')

function coordenadaMouse(event){

    circulo.style.top = event.y - 8 + 'px';
    circulo.style.left = event.x - 8 + 'px';
}

window.addEventListener('mousemove', coordenadaMouse)