import {Navigasi} from "./nav.js";

document.addEventListener("DOMContentLoaded", () => {
    M.AutoInit();
    Navigasi.loadTopNav();
    Navigasi.loadBotNav();
    firebaseAuth.onAuthStateChanged((user) => {
        if (user) {
            Navigasi.loadPage("home");
            bodyElement.classList.remove("body-form");
        } else {
            Navigasi.loadPage("form");
            Navigasi.loadFormNav();
            bodyElement.classList.add("body-form");
        }
    });
});
