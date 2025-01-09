const images = [
    { src: "Botton.png", caption: "Botton que você me deu e eu amei." },
    { src: "MaosDadas.png", caption: "A gente com as mão dadas no dia do bosque." },
    { src: "ElaEosGatos.png", caption: "Você(Fofa e Linda) fazendo carinho nos gatos do parque." },
    { src: "UnhasLindas.png", caption: "Eu, você, unhas, Tmj, biscoito e Brownies." }
];

// Posição das imagens
let index = 0;

// Elementos da página
const infoImage = document.getElementById('infoImage');
const imageCaption = document.getElementById('imageCaption');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Função para atualizar a imagem e legenda
function updateImage() {
    infoImage.src = images[index].src;
    imageCaption.textContent = images[index].caption;
}

// Ação ao clicar na seta "anterior"
prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1; // Se chegou no início, volta para o final
    }
    updateImage();
});

// Ação ao clicar na seta "próxima"
nextButton.addEventListener('click', () => {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0; // Se chegou no final, volta para o início
    }
    updateImage();
});

// Inicializar com a primeira imagem
updateImage();