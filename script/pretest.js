const getButton = () => {
  const btnHide = document.querySelector("#hideBtn");
  const boxElement = document.querySelector(".box-dialog-container");
  const countdownElement = document.querySelector(".countdown");
  btnHide.addEventListener("click", () => {
    boxElement.classList.add("hide");
    let angka = 3;
    const countdown = setInterval(() => {
      countdownElement.innerHTML = `<div class="angka-countdown">${angka}</div>`;
      angka--;
      if (angka < 0) {
        clearInterval(countdown);
        countdownElement.classList.add("hide");
      }
    }, 1000);
  });
};

export { getButton };
