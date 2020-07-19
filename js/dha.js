window.onload = async () => {
  await introAnimate(0, 30, 1, 0);
  await introAnimate(30, 90, 0.3, 1);
  await introAnimate(90, 100, 0.3, 0);
  showContent();
};

function showContent() {
  const mainDiv = document.querySelector("#main");
  const percentPage = document.querySelector("#percentPage");

  percentPage.style.display = "none";
  mainDiv.style.display = "block";
}

function introAnimate(begin, end, duration, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let percent = begin;

      const percentSpan = document.querySelector("#percent");
      const introOverlayDiv = document.querySelector("#intro-overlay");
      const idInterval = setInterval(() => {
        ++percent;

        introOverlayDiv.style.top = `-${percent}%`;
        percentSpan.innerText = `${percent}%`;
        if (percent === end) {
          clearInterval(idInterval);
          resolve("done!");
        }
      }, (duration * 1000) / (end - begin));
    }, delay * 1000);
  });
}
