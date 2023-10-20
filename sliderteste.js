document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    // Selecionar todas as imagens no slider
    const images = document.querySelectorAll(".slider img");
    const imageCount = images.length;

    // Adicionar um ouvinte de evento ao botão "Próxima"
    nextBtn.addEventListener("click", () => {
        if (currentIndex < imageCount - 1) {
            currentIndex++; // Avançar para a próxima imagem
        } else {
            currentIndex = 0; // Voltar ao início se já estiver na última imagem
        }
        updateSlider(); // Atualizar a exibição do slider
    });

    // Adicionar um ouvinte de evento ao botão "Anterior"
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--; // Voltar para a imagem anterior
        } else {
            currentIndex = imageCount - 1; // Ir para a última imagem se já estiver na primeira
        }
        updateSlider(); // Atualizar a exibição do slider
    });

    // Função para atualizar a exibição do slider
    function updateSlider() {
        const translateValue = -currentIndex * 100; // Calcular o valor de translação
        slider.style.transform = `translateX(${translateValue}%)`; // Aplicar a translação
    }

    // Inicie o slider na primeira imagem
    updateSlider();
});