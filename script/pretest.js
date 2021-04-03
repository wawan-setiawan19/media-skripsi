import { loadPage, loadToast } from "./nav.js";
import { showNotifikasiBadge } from "./notification.js";
import { lihatKelompok } from "./randomKelompok.js";
import { dataSoalPreTest } from "./soal.js";
let nomor_soal = 1;
let pilihan1, pilihan2, pilihan3, pilihan4, pilihan5;
let soalContainerElement, boxElement, countdownElement;
let btnSelesai;
let temp_jawaban = "";
let skor = 0;
const getButton = () => {
    boxElement = document.querySelector(".box-dialog-container");
    countdownElement = document.querySelector(".countdown");
    soalContainerElement = document.querySelector(".soalContainer");
    const btnHide = document.querySelector("#hideBtn");
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
    pilihan1 = document.querySelector("#pilihan1");
    pilihan2 = document.querySelector("#pilihan2");
    pilihan3 = document.querySelector("#pilihan3");
    pilihan4 = document.querySelector("#pilihan4");
    pilihan5 = document.querySelector("#pilihan5");
    const btnNext = document.querySelector("#next");
    btnSelesai = document.querySelector("#selesai");

    if (nomor > 20) {
        btnNext.classList.add("hide");
        btnSelesai.classList.remove("hide");
        boxElement.classList.remove("hide");
        console.log(skor);
        boxElement.innerHTML = `
    <div style="text-align:center;">Nilai kamu</div>
    <div class="angka-countdown">${skor}</div>
    <div class="message">Kamu sudah selesai tes, kamu klik selesai dan data akan tersimpan</div>`;
        soalContainerElement.classList.add("hide");
    } else {
        soal.innerHTML = `${dataSoalPreTest[nomor - 1].soal}`;
        pilihan1.innerHTML = `${dataSoalPreTest[nomor - 1].pilihan1}`;
        pilihan2.innerHTML = `${dataSoalPreTest[nomor - 1].pilihan2}`;
        pilihan3.innerHTML = `${dataSoalPreTest[nomor - 1].pilihan3}`;
        pilihan4.innerHTML = `${dataSoalPreTest[nomor - 1].pilihan4}`;
        pilihan5.innerHTML = `${dataSoalPreTest[nomor - 1].pilihan5}`;

        btnNext.addEventListener("click", handleNext);
        btnSelesai.addEventListener("click", handleSelesai);
        pilihan1.addEventListener("click", handlePilihan1);
        pilihan2.addEventListener("click", handlePilihan2);
        pilihan3.addEventListener("click", handlePilihan3);
        pilihan4.addEventListener("click", handlePilihan4);
        pilihan5.addEventListener("click", handlePilihan5);
    }
};

const handleSelesai = () => {
    pretest = skor;
    let data = {
        pretest: skor,
    };

    let dataNilai = {
        nama: nama,
        pretest: skor,
    };

    firebaseDatabase.ref(`users/${uid}/data`).update(data, (err) => {
        if (err) {
            loadToast(err);
        } else {
            loadToast("Pretest tersimpan");
        }
    });

    firebaseDatabase.ref(`nilai/${absen}`).update(dataNilai, (err) => {
        if (err) {
            loadToast(err);
        }
    });
    loadPage(page);
    lihatKelompok();
    showNotifikasiBadge(
        "Belajar Berhadiah",
        "Dapatkan kesempatan mendapat hadiah uang tunai langsung"
    );
};

const handleNext = () => {
    pilihan1.classList.add("gradient");
    pilihan2.classList.add("gradient");
    pilihan3.classList.add("gradient");
    pilihan4.classList.add("gradient");
    pilihan5.classList.add("gradient");
    if (temp_jawaban === dataSoalPreTest[nomor_soal - 1].jawaban) skor = skor + 5;
    nomor_soal = nomor_soal + 1;
    tampilProgress(nomor_soal);
    getSoal(nomor_soal);
};

const handlePilihan1 = () => {
    pilihan1.classList.remove("gradient");
    pilihan2.classList.add("gradient");
    pilihan3.classList.add("gradient");
    pilihan4.classList.add("gradient");
    pilihan5.classList.add("gradient");
    temp_jawaban = dataSoalPreTest[nomor_soal - 1].pilihan1;
};
const handlePilihan2 = () => {
    pilihan1.classList.add("gradient");
    pilihan2.classList.remove("gradient");
    pilihan3.classList.add("gradient");
    pilihan4.classList.add("gradient");
    pilihan5.classList.add("gradient");
    temp_jawaban = dataSoalPreTest[nomor_soal - 1].pilihan2;
};
const handlePilihan3 = () => {
    pilihan1.classList.add("gradient");
    pilihan2.classList.add("gradient");
    pilihan3.classList.remove("gradient");
    pilihan4.classList.add("gradient");
    pilihan5.classList.add("gradient");
    temp_jawaban = dataSoalPreTest[nomor_soal - 1].pilihan3;
};
const handlePilihan4 = () => {
    pilihan1.classList.add("gradient");
    pilihan2.classList.add("gradient");
    pilihan3.classList.add("gradient");
    pilihan4.classList.remove("gradient");
    pilihan5.classList.add("gradient");
    temp_jawaban = dataSoalPreTest[nomor_soal - 1].pilihan4;
};
const handlePilihan5 = () => {
    pilihan1.classList.add("gradient");
    pilihan2.classList.add("gradient");
    pilihan3.classList.add("gradient");
    pilihan4.classList.add("gradient");
    pilihan5.classList.remove("gradient");
    temp_jawaban = dataSoalPreTest[nomor_soal - 1].pilihan5;
};

const tampilProgress = (progress) => {
    const progressBar = document.querySelector("#progressBar");
    if (progress <= 20) {
        progressBar.innerHTML = `${progress}/20`;
        progressBar.style.width = `${(progress / 20) * 100}%`;
    } else {
        progressBar.innerHTML = `Test Selesai`;
        progressBar.style.width = `100%`;
    }
};

export { getButton };
