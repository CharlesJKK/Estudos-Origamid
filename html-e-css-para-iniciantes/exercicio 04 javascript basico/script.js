function livro(nome, ano, autor){

    const nomeCaps = nome.toUpperCase();
    const totalAno = 2050 - Number(ano);
    const frase = nome + ' por ' + autor + ' em ' + totalAno;

    const objeto = {
        nome: nomeCaps,
        totalAno,
        frase
    }

    return objeto;

}

const fraseFinal = livro('O Senhor dos Anéis'.toUpperCase(), 1954, 'J. R. R. Tolkien')

console.log(fraseFinal.frase)