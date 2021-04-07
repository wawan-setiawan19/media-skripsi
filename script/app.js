import { Navigasi, loadPage } from "./nav.js";
import { requestPermission } from "./notification.js";
import { lihatKelompok } from "./randomKelompok.js";

document.addEventListener("DOMContentLoaded", () => {
    firebaseAuth.onAuthStateChanged((user) => {
        if (user) {
            uid = user.uid;
            nama = user.displayName;
            email = user.email;
            foto = user.photoURL;
            Navigasi.loadTopNav();
            Navigasi.loadBotNav();
            bodyElement.classList.remove("body-form");
            getUserProfile();
            requestPermission();
        } else {
            loadPage("form");
            Navigasi.loadFormNav();
            bodyElement.classList.add("body-form");
        }
    });
    M.AutoInit();
});

const getUserProfile = () => {
    firebaseDatabase.ref(`users/${uid}/data`).on("value", (user) => {
        const data = user.val();
        if (data) {
            nama = data.displayName;
            kelas = data.kelas;
            gaya_belajar = data.gaya_belajar;
            jenis_kelamin = data.jenis_kelamin;
            absen = data.absen;
            lkpd = data.LKPD;
            pretest = data.pretest;
            postest = data.postest;
            if(pretest !== undefined) lihatKelompok();
            if (lkpd == undefined) lkpd = false;
            if (postest == undefined) postest = 0;
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
            loadPage("lengkapi-data");
        }
    });
};

const isGayaBelajar = (gaya_belajar) => {
    if (gaya_belajar == null || gaya_belajar == undefined) loadPage("test-vak");
};

export { isGayaBelajar };
