import { dataSoalPreTest } from "./soal.js";
let nomor_soal = 1;
const getButton = () => {
  const btnHide = document.querySelector("#hideBtn");
  const boxElement = document.querySelector(".box-dialog-container");
  const countdownElement = document.querySelector(".countdown");
  const soalContainerElement = document.querySelector(".soalContainer");
  btnHide.addEventListener("click", () => {
    boxElement.classList.add("hide");
    let angka = 3;
    const countdown = setInterval(() => {
      countdownElement.innerHTML = `<div class="angka-countdown">${angka}</div>`;
      angka--;
      if (angka < 0) {
        clearInterval(countdown);
        countdownElement.classList.add("hide");
        soalContainerElement.classList.remove("hide");
        getSoal(nomor_soal);
      }
    }, 1000);
  });
};

const getSoal = (nomor) => {
  showSoal(nomor);
};

const showSoal = (nomor) => {
  const soal = document.querySelector(".pertanyaan");
  const pilihan1 = document.querySelector("#pilihan1");
  const pilihan2 = document.querySelector("#pilihan2");
  const pilihan3 = document.querySelector("#pilihan3");
  const pilihan4 = document.querySelector("#pilihan4");
  const pilihan5 = document.querySelector("#pilihan5");
  const btnNext = document.querySelector("#next");
  const btnSelesai = document.querySelector("#selesai");

  if (nomor >= 10) {
    btnNext.classList.add("hide");
    btnSelesai.classList.remove("hide");
  }

  soal.innerHTML = `${dataSoalPreTest[nomor - 1].soal}`;
  pilihan1.innerHTML = `${dataSoalPreTest[nomor - 1].pilihan1}`;
  pilihan2.innerHTML = `${dataSoalPreTest[nomor - 1].pilihan2}`;
  pilihan3.innerHTML = `${dataSoalPreTest[nomor - 1].pilihan3}`;
  pilihan4.innerHTML = `${dataSoalPreTest[nomor - 1].pilihan4}`;
  pilihan5.innerHTML = `${dataSoalPreTest[nomor - 1].pilihan5}`;

  btnNext.addEventListener("click", handleNext);
};

const handleNext = () => {
  nomor_soal = nomor_soal + 1;
  console.log(nomor_soal);
  getSoal(nomor_soal);
};

export { getButton };
