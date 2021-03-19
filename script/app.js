import {Navigasi, loadPage} from "./nav.js";

document.addEventListener("DOMContentLoaded", () => {
    M.AutoInit();
    firebaseAuth.onAuthStateChanged((user) => {
        if (user) {
            loadPage(page);
            Navigasi.loadTopNav();
            Navigasi.loadBotNav();
            bodyElement.classList.remove("body-form");
            console.log(user);
            nama = user.displayName;
            foto = user.photoURL; 
        } else {
            loadPage("form");
            Navigasi.loadFormNav();
            bodyElement.classList.add("body-form");
        }
    });
});
