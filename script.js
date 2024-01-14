document.addEventListener("DOMContentLoaded", () => {
  const mouse = document.querySelector(".mouse_bg");
  const sec_shadow = document.querySelector(".sec_shadow");

  window.addEventListener("mousemove", (e) => {
    mouse.style.top = e.clientY - 45 + "px";
    mouse.style.left = e.clientX - 45 + "px";
  });

  window.addEventListener("click", (e) => {
    isclicked = true;
    sec_shadow.classList.add("active");
    setTimeout(() => {
      sec_shadow.classList.remove("active");
    }, 500);
  });
});
