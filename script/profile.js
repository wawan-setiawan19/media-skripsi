import { loadPage, loadToast } from "./nav.js";

let nameElement, profilePicture, kelasElement, gayaBelajarElement, nilaiPreTestElement, kelompokElement;
const getProfile = () => {
  nameElement = document.querySelector(".nama");
  profilePicture = document.querySelector(".profile-picture");
  kelasElement = document.querySelector(".kelas");
  gayaBelajarElement = document.querySelector(".gaya-belajar");
  nilaiPreTestElement = document.querySelector("#nilaiPretest");
  kelompokElement = document.querySelector(".kelompok");
  showProfile(nama, foto, kelas, gaya_belajar, pretest, nama_kelompok);
};

const showProfile = (nama, foto, gaya_belajar, kelas, pretest, nama_kelompok) => {
  nameElement.innerHTML = nama;
  profilePicture.setAttribute("src", foto);
  kelasElement.innerHTML = kelas;
  gayaBelajarElement.innerHTML = gaya_belajar;
  nilaiPreTestElement.innerHTML = `NILAI PRETEST ${pretest}`;
  kelompokElement.innerHTML = `KELOMPOK ${nama_kelompok}`
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
