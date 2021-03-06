import { isGayaBelajar } from "./app.js";
import Form from "./form.js";
import getAllGuides from "./guides.js";
import Menu from "./menu.js";
import { getButton } from "./pretest.js";
import { getButtonPost } from "./posttest.js";
import { getProfile } from "./profile.js";
import { cekTest } from "./test.js";
import { getMateri } from "./misi.js";
import { getButtonChat } from "./chat.js";
import { showAnggota } from "./lkpd.js";

class Navigasi {
  static loadBotNav = () => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          botNavElement.innerHTML = xhr.responseText;
          Menu.getBottomButton();
          Form.getMobileLogout();
        }
      }
    };

    xhr.open("GET", "./components/bottom-nav.html");
    xhr.send();
  };

  static loadFormNav = () => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (this.readyState === 4) {
        if (xhr.status !== 200) return;
      }
      botNavElement.innerHTML = xhr.responseText;
      topNavElement.innerHTML = xhr.responseText;
    };

    xhr.open("GET", "./components/form-nav.html");
    xhr.send();
  };

  static loadTopNav = () => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          topNavElement.innerHTML = xhr.responseText;
          Menu.getTopButton();
          Form.getLogout();
        }
      }
    };

    xhr.open("GET", "./components/top-nav.html");
    xhr.send();
  };
}

if (page === "") page = "home";
const loadPage = (page) => {
  const xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4) {
      const content = document.querySelector("#body-content");
      if (xmlHttp.status === 200) {
        content.innerHTML = xmlHttp.responseText;
        if (page === "home") loadHome();
        if (page === "profile") loadProfile();
        if (page === "form") Form.getButton();
        if (page === "missions") cekPreTest();
        if (page === "test-vak") cekTest();
        if (page === "lengkapi-data") Form.getButtonLengkapiData();
        if (page === "pre-test") getButton();
        if (page === "post-test") getButtonPost();
        M.AutoInit();
      } else if (xmlHttp.status === 404) {
        loadPage("404");
        content.innerHTML = xmlHttp.responseText;
      } else {
        content.innerHTML = `<p>Ups.. halaman tidak dapat diakses</p>`;
      }
    }
  };

  xmlHttp.open("GET", `pages/${page}.html`, true);
  xmlHttp.send();
};

const loadHome = () => {
  getAllGuides();
  isGayaBelajar(gaya_belajar);
};

const loadProfile = () => {
  getProfile();
  Form.getLogout();
};

const loadToast = (message) => {
  M.toast({ html: `${message}`, outDuration: 100, classes: "gradient" });
  setTimeout(() => {
    M.Toast.dismissAll();
  }, 1500);
};

const cekPreTest = () => {
  if (pretest == undefined || pretest == null) {
    loadPage("pre-test");
  } else {
    getMateri();
    getButtonChat();
    showAnggota(kelompokSaya);
  }
};

export { Navigasi, loadToast, loadPage };
