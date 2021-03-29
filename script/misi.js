import { dataMateri } from "./materi.js";

const getMateri = () => {
  const materiElement = document.querySelector("#daftarMateri");

  let dummy = '';
  dataMateri.forEach((element) => {
    dummy += `
      <li>
        <div class="collapsible-header gradient no-border guide-header">
          <div class="goldman" id="judulMateri">${element.judulMateri}</div>
        </div>
        <div class="collapsible-body border-gradient">
          <div class="materi" id="pembukaan">${element.pembukaan}</div>
          <div class="definisi" id="definisiMateri">${element.materi}</div>
          <div id="mediaMateri">${element.mediaMateri}</div>
        </div>
      </li>
    `;
  });
  materiElement.innerHTML = dummy;
};

export { getMateri };
