const header = document.querySelector("header");
const banner = document.querySelector(".banner");

window.addEventListener("scroll", function () {
    if (window.scrollY > 250) {
        header.classList.add("is-sticky");
    } else {
        header.classList.remove("is-sticky");
    }

    const pos = -window.scrollY * 0.2 + "px";
    banner.style.backgroundPosition = "center " + pos;
})