
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#388E3C";
    } else {
        header.style.backgroundColor = "#4CAF50";
    }
});
