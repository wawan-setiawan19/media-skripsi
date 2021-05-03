import { handleSelesai } from "./posttest.js";
import { handleSelesaiPre } from "./pretest.js";
let timerElement;

const getTimer = (jenis_tes, waktu) => {
    timerElement = document.querySelector(".timer");
    timerElement.classList.remove("hide");
    let menit = waktu;
    let detik = 0;
    const timer = setInterval(() => {
        detik--;
        if (detik < 0) {
            detik = 59;
            menit--;
        }
        displayTimer(menit, detik);
        if (menit === 0 && detik === 0) {
            clearInterval(timer);
            if (jenis_tes === "pre") {
                handleSelesaiPre();
            } else {
                handleSelesai();
            }
        }
    }, 1000);

    const displayTimer = (menit, detik) => {
        let displayMenit = menit;
        let displayDetik = detik;

        if (detik < 10) displayDetik = `0${detik}`;
        if (menit < 10) displayMenit = `0${menit}`;

        timerElement.innerHTML = `${displayMenit}:${displayDetik}`;
    };
};

const hideTimer = () =>{
    timerElement.classList.add('hide');
}

export { getTimer, hideTimer };
