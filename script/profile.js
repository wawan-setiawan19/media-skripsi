import { isGayaBelajar } from "./app.js";
import { loadPage, loadToast } from "./nav.js";

let nameElement, profilePicture, kelasElement, gayaBelajarElement;
const getProfile = () => {
  nameElement = document.querySelector(".nama");
  profilePicture = document.querySelector(".profile-picture");
  kelasElement = document.querySelector(".kelas");
  gayaBelajarElement = document.querySelector(".gaya-belajar");
  showProfile(nama, foto, kelas, gaya_belajar);
  // isGayaBelajar(gaya_belajar);
};

const showProfile = (nama, foto, gaya_belajar, kelas) => {
  nameElement.innerHTML = nama;
  profilePicture.setAttribute("src", foto);
  kelasElement.innerHTML = kelas;
  gayaBelajarElement.innerHTML = gaya_belajar;
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
