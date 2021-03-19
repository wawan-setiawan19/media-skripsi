import { loadPage } from "./nav.js";

class Menu {
    static getBottomButton = () => {
        const btnHome = document.querySelector("#btnHomeBottom");
        const btnMisi = document.querySelector("#btnMissionsBottom");
        const btnAkun = document.querySelector("#btnProfileBottom");
        btnHome.addEventListener("click", () => {
            this.handleClick("home");
        });
        btnMisi.addEventListener("click", () => {
            this.handleClick("missions");
        });
        btnAkun.addEventListener("click", () => {
            this.handleClick("profile");
        });
    };
    static getTopButton = () => {
        const btnHome = document.querySelector("#btnHomeTop");
        const btnMisi = document.querySelector("#btnMissionsTop");
        const btnAkun = document.querySelector("#btnProfileTop");
        btnHome.addEventListener("click", () => {
            this.handleClick("home");
        });
        btnMisi.addEventListener("click", () => {
            this.handleClick("missions");
        });
        btnAkun.addEventListener("click", () => {
            this.handleClick("profile");
        });
    };

    static handleClick = (page) => {
        loadPage(page);
    };
}

export default Menu;
