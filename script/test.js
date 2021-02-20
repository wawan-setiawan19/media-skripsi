let visual = 0;
let audio = 0;
let kinestetik = 0;
const getTest = () => {
    let choices = document.querySelectorAll(".choices");
    let currentSoal = 1;

    choices.forEach((element) => {
        element.addEventListener("click", () => {
            currentSoal++;
            tampil(currentSoal);
            getSoal(currentSoal);
        });
    });

    tampil(currentSoal);
    getSoal(currentSoal);
};

const tampil = (progress) => {
    const progressBar = document.querySelector("#progressBar");
    if (progress <= 10) {
        progressBar.innerHTML = `${progress}/10`;
        progressBar.style.width = `${(progress / 10) * 100}%`;
    } else {
        progressBar.innerHTML = `Test Selesai`;
        progressBar.style.width = `100%`;
    }
};

const getSoal = (nomorSoal) => {
    const soal = document.querySelector(".pertanyaan");
    const pilihan1 = document.querySelector("#pilihan1");
    const pilihan2 = document.querySelector("#pilihan2");
    const pilihan3 = document.querySelector("#pilihan3");
    const result = document.querySelector(".result");
    if (nomorSoal > 10) {
        pilihan1.classList.add("hide");
        pilihan2.classList.add("hide");
        pilihan3.classList.add("hide");
        soal.classList.add("hide");
        result.classList.remove("hide");
        cekHasil();
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

const cekHasil = ()=>{
    let hasil_Akhir = '';
    const hasil = document.querySelector(".hasil");
    if(visual>audio){
        if(visual>=kinestetik){
            hasil_Akhir = 'Visual';
        }else{
            hasil_Akhir = 'Kinestetik'
        }
    }else if(audio>=kinestetik){
        hasil_Akhir = 'Audio';
    }else{
        hasil_Akhir = 'Kinestetik';
    }
    hasil.innerHTML = hasil_Akhir;
    let data = {
        gaya_belajar:hasil_Akhir
    }
    vak = hasil_Akhir;
    updateGayaBelajar(data,id);
    loadPage(page);
}
