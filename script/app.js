import { Navigasi, loadPage } from "./nav.js";

document.addEventListener("DOMContentLoaded", () => {
    firebaseAuth.onAuthStateChanged((user) => {
        if (user) {
            uid = user.uid;
            nama = user.displayName;
            Navigasi.loadTopNav();
            Navigasi.loadBotNav();
            bodyElement.classList.remove("body-form");
            getUserProfile();
            loadPage(page);
        } else {
            loadPage("form");
            Navigasi.loadFormNav();
            bodyElement.classList.add("body-form");
        }
    });
    M.AutoInit();
});

const getUserProfile = () => {
    console.log(uid);
    firebaseDatabase.ref(`users/${uid}/data`).on("value", (user) => {
        const data = user.val();
        if (data) {
            nama = data.displayName;
            foto = data.photoURL;
            kelas = data.kelas;
            gaya_belajar = data.gaya_belajar;
            jenis_kelamin = data.jenis_kelamin;
            if (foto == null) {
                if (jenis_kelamin === "L") {
                    foto = "./assets/image/profile/l.svg";
                } else {
                    foto = "./assets/image/profile/p.svg";
                }
            }
            loadPage(page);
            isGayaBelajar(gaya_belajar);
        } else {
            loadPage('lengkapi-data')
        }
    });
};

const isGayaBelajar = (gaya_belajar) => {
    if (gaya_belajar == null || gaya_belajar == undefined) loadPage("test-vak");
};

export { isGayaBelajar };
