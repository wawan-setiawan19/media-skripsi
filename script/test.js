let visual = 0;
let audio = 0;
let kinestetik = 0;
const getTest = () => {
    let choices = document.querySelectorAll(".choices");
    let currentSoal = 1;

    choices.forEach((element) => {
        element.addEventListener("click", () => {
            currentSoal++;
            if (currentSoal <= 10) {
                tampil(currentSoal);
            }
            getSoal(currentSoal);
        });
    });

    tampil(currentSoal);
    getSoal(currentSoal);
};

const tampil = (progress) => {
    const progressBar = document.querySelector("#progressBar");
    const progressSoal = document.querySelector(".progress-soal");
    progressSoal.innerHTML = `${progress}/10`;
    progressBar.style.width = `${(progress / 10) * 100}%`;
};

const getSoal = (nomorSoal) => {
    const soal = document.querySelector(".pertanyaan");
    const pilihan1 = document.querySelector("#pilihan1");
    const pilihan2 = document.querySelector("#pilihan2");
    const pilihan3 = document.querySelector("#pilihan3");
    if (nomorSoal > 10) {
        pilihan1.setAttribute("class", "hide");
        pilihan2.setAttribute("class", "hide");
        pilihan3.setAttribute("class", "hide");
        soal.innerHTML = `visual=${visual} <br>
        audio=${audio} <br>
        kinestetik=${kinestetik} <br>`;
    } else {
        fetch(`${baseUrl}soal_VAK/${nomorSoal}`)
            .then((response) => response.json())
            .then((result) => {
                soal.innerHTML = result[nomorSoal - 1].soal;
                pilihan1.innerHTML = result[nomorSoal - 1].pilihan1;
                pilihan2.innerHTML = result[nomorSoal - 1].pilihan2;
                pilihan3.innerHTML = result[nomorSoal - 1].pilihan3;
            });
    }
};

const addVisual = () => {
    visual++;
};
const addAudio = () => {
    audio++;
};
const addKinestetik = () => {
    kinestetik++;
};
