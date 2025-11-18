function verificarIdade() {

    const inputIdade = document.getElementById('idade');
    const idade = parseInt(inputIdade.value, 10);

    if (isNaN(idade) || idade < 0) {
        alert("Por favor, insira uma idade válida.");
        inputIdade.focus(); 
        return; 
    }

    let urlDestino = 'pagina-seguinte.html';

    
    if (idade < 18) {
        urlDestino = 'index.html';
    } else {
        urlDestino = 'index.html'; 
    }

    window.location.href = urlDestino;
}