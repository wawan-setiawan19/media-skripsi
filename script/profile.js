import { isGayaBelajar } from "./app.js";
import { loadPage, loadToast } from "./nav.js";

let nameElement, profilePicture, kelasElement, gayaBelajarElement, nilaiPreTestElement;
const getProfile = () => {
  nameElement = document.querySelector(".nama");
  profilePicture = document.querySelector(".profile-picture");
  kelasElement = document.querySelector(".kelas");
  gayaBelajarElement = document.querySelector(".gaya-belajar");
  nilaiPreTestElement = document.querySelector("#nilaiPretest");
  showProfile(nama, foto, kelas, gaya_belajar, pretest);
  // isGayaBelajar(gaya_belajar);
};

const showProfile = (nama, foto, gaya_belajar, kelas, pretest) => {
  nameElement.innerHTML = nama;
  profilePicture.setAttribute("src", foto);
  kelasElement.innerHTML = kelas;
  gayaBelajarElement.innerHTML = gaya_belajar;
  nilaiPreTestElement.innerHTML = `Nilai Pretest ${pretest}`;
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
