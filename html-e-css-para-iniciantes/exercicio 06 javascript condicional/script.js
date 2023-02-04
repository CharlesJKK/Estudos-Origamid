const botao = document.querySelector('button');
const div = document.querySelector('div');

if(botao){
    function somar(){
        if(div.innerHTML < 10){
            div.innerHTML = Number(div.innerHTML) + 1
            console.log(div.innerHTML)
        }else{
            console.log('Não é possível adicionar mais ao elemento')
        }
    }
}

//É possível usar o botao.addEventListener("click", somar) ao invés de chamar a função no html.