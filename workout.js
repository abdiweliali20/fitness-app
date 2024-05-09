document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.querySelector(".searchBtn");
    const searchBox = document.querySelector(".searchBox");
    const productCards = document.querySelectorAll(".product-card");

    searchBtn.addEventListener("click", function() {
        const searchTerm = searchBox.value.toLowerCase();

        productCards.forEach(card => {
            const exerciseName = card.querySelector("h3").textContent.toLowerCase();
            if (exerciseName.includes(searchTerm)) {
                card.style.display = "inline-block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
