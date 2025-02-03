document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slider-track");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let position = 0;
    const slideWidth = 210; // 200px + 10px margem direita
    const maxMove = track.scrollWidth - slideWidth * 5; // Limite do slider

    nextBtn.addEventListener("click", () => {
        if (Math.abs(position) < maxMove) {
            position -= slideWidth;
            track.style.transform = `translateX(${position}px)`;
        }
    });

    prevBtn.addEventListener("click", () => {
        if (position < 0) {
            position += slideWidth;
            track.style.transform = `translateX(${position}px)`;
        }
    });
});
