const mouse = document.querySelector(".mouse_bg")

window.addEventListener("mousemove", (e) => {
    mouse.style.top = e.clientY * 1 - 45 + "px";
    mouse.style.left = e.clientX * 1 - 45 + "px";
})

window.addEventListener("click", (e) => {
    console.log(e);
})