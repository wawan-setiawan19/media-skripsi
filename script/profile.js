import { loadPage, loadToast } from "./nav.js";

let nameElement,
    profilePicture,
    kelasElement,
    gayaBelajarElement,
    nilaiPreTestElement,
    nilaiPostestElement,
    peningkatanElement,
    kelompokElement;
const getProfile = () => {
    nameElement = document.querySelector(".nama");
    profilePicture = document.querySelector(".profile-picture");
    kelasElement = document.querySelector(".kelas");
    gayaBelajarElement = document.querySelector(".gaya-belajar");
    nilaiPreTestElement = document.querySelector("#nilaiPretest");
    nilaiPostestElement = document.querySelector("#nilaiPosttest");
    peningkatanElement = document.querySelector("#peningkatan");
    kelompokElement = document.querySelector(".kelompok");
    peningkatan = postest - pretest;
    showProfile(nama, foto, kelas, gaya_belajar, pretest, nama_kelompok, postest, peningkatan);
};

const showProfile = (nama, foto, gaya_belajar, kelas, pretest, nama_kelompok, postest, peningkatan) => {
    nameElement.innerHTML = nama;
    profilePicture.setAttribute("src", foto);
    kelasElement.innerHTML = kelas;
    gayaBelajarElement.innerHTML = gaya_belajar;
    nilaiPreTestElement.innerHTML = `NILAI PRETEST ${pretest}`;
    nilaiPostestElement.innerHTML = `NILAI POSTEST ${postest}`;
    peningkatanElement.innerHTML = `PENINGKATAN ${peningkatan}`;
    kelompokElement.innerHTML = `KELOMPOK ${nama_kelompok}`;
};

const updateGayaBelajar = (gaya, id) => {
    firebaseDatabase.ref(`users/${id}/data`).update(gaya, (err) => {
        if (err) {
            loadToast(err);
        } else {
            loadToast("gaya belajar berhasil diperbaharui");
        }
    });
    loadPage(page);
};

export { getProfile, updateGayaBelajar };
