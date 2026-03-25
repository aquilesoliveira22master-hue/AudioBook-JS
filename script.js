const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const audio = document.getElementById("audio-capitulo");
const textoCapitulo = document.getElementById("capitulo");
const qtdCapitulos = 10;

let taTocando = false;
let capituloAtual = 1;

// console.log(audio);

function tocarFaixa(){
    console.log("Clicou!");
    audio.play(); 
    taTocando = true;
    console.log("Deu play!");

    botaoPlayPause.classList.add('tocando');
}

function pausarFaixa(){
    console.log("Clicou!");
    audio.pause();
    taTocando = false;
    console.log("Deu pause!");

    botaoPlayPause.classList.remove('tocando');
}

function tocarOuPausar() {
    if (taTocando === true) {
        pausarFaixa();
    } else {
        tocarFaixa();
    }
}

function proximoCapitulo() {
     pausarFaixa();

    if (capituloAtual < qtdCapitulos) {
        capituloAtual = capituloAtual + 1;
    } else {
        capituloAtual = 1;
    }

    audio.src =  "./audio" + capituloAtual + ".mp3";
    textoCapitulo.innerText = "Capitulo " + capituloAtual;
}

function capituloAnterior() {
    pausarFaixa();
    
    if (capituloAtual === 1) {
        capituloAtual = qtdCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }
    
    audio.src =  "./audio" + capituloAtual + ".mp3";
    textoCapitulo.innerText = "Capitulo " + capituloAtual;
}


botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoProximoCapitulo.addEventListener('click', proximoCapitulo);
botaoCapituloAnterior.addEventListener('click', capituloAnterior);







// const botaoPlayPause = document.getElementById("play-pause");
// const audio = document.getElementById("audio-capitulo");

// let taTocando = false;

// function tocarFaixa() {
//     audio.play(); // Removi o comentário para o áudio tocar
//     taTocando = true;
//     botaoPlayPause.classList.add('tocando'); // Adiciona a classe para mudar o ícone (CSS)
// }

// function pausarFaixa() {
//     audio.pause();
//     taTocando = false;
//     botaoPlayPause.classList.remove('tocando'); // Remove a classe para voltar o ícone de play
// }

// function tocarOuPausar() {
//     // Corrigido de 'truee' para 'true'
//     if (taTocando === true) {
//         pausarFaixa();
//     } else {
//         tocarFaixa();
//     }
// }

// // Alterado de 'tocarFaixa' para 'tocarOuPausar'
// botaoPlayPause.addEventListener('click', tocarOuPausar);