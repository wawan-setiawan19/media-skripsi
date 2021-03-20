import { Navigasi, loadPage } from "./nav.js";

document.addEventListener("DOMContentLoaded", () => {
    M.AutoInit();
    firebaseAuth.onAuthStateChanged((user) => {
        if (user) {
            loadPage('home');
            Navigasi.loadTopNav();
            Navigasi.loadBotNav();
            bodyElement.classList.remove("body-form");
        } else {
            loadPage("form");
            Navigasi.loadFormNav();
            bodyElement.classList.add("body-form");
        }
    });
});
