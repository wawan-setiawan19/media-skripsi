import { dataMateri } from "./materi.js";

const getMateri = () => {
  const materiElement = document.querySelector("#daftarMateri");
  const livecode = document.querySelector(".livecode");
  let media = ''
  let dummy = '';
  dataMateri.forEach((element) => {
    if (gaya_belajar === "Kinestetik") livecode.classList.remove('hide');
    if (gaya_belajar === "Visual") media = element.mediaMateri;
    if (gaya_belajar === "Audio") media = element.videoMateri;
    dummy += `
      <li>
        <div class="collapsible-header gradient no-border guide-header">
          <div class="condensed" id="judulMateri">${element.judulMateri}</div>
        </div>
        <div class="collapsible-body border-gradient">
          <div class="materi" id="pembukaan">${element.pembukaan}</div>
          <div class="definisi" id="definisiMateri">${element.materi}</div>
          <div id="mediaMateri">${media}</div>
        </div>
      </li>
    `;
  });
  materiElement.innerHTML = dummy;
};

export { getMateri };
