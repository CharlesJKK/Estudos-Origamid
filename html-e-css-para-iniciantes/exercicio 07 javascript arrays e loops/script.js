const links = Array.from(document.querySelectorAll('nav a'))

function ativerLink(link){
    if(link.href === document.location.href){
        link.style.backgroundColor = 'black';
        link.style.color = 'white';
    }
}

links.forEach(ativerLink)