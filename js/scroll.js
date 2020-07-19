window.addEventListener("load", () => {
  const scrollBtn = document.querySelector("#scrollBtn");

  scrollBtn.onclick = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
});
