// Captura o botao "proximo"
let btnProximo = document.getElementById("proximo");

//Captura o botao "anterior"
let btnAnterior = document.getElementById("anterior");

//Captura o quadro onde a fotografia é exibida
let Quadroimagem = document.getElementById("imagem");

// Cria o album e guarda as fotos
let album = [
    "https://picsum.photos/id/1015/1200/600",
    "https://picsum.photos/id/1025/1200/600",
    "https://picsum.photos/id/1043/1200/600"
];

//Quando o botão próximo for clicado, executará a função mostrarPróximo
btnProximo.addEventListener("click", mostrarProximo);
btnAnterior.addEventListener("click", mostrarAnterior);

//Define a posição inicial da fotografia do album
let foto = 0;

//Função responsável por mostrar a proxima fotografia
function mostrarProximo(){
    //Avança uma posição do álbum
    foto = foto + 1;

    if ( foto >= album.length){
        foto = 0;
    }
    Quadroimagem.src = album[foto];

}

//Função responsável por mostrar a fotografia anterior
function mostrarAnterior(){
    foto = foto - 1;

    if (foto < 0){
        foto =  album.length - 1;
    }
    Quadroimagem.src = album[foto];

}