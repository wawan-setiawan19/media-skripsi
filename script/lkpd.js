import { loadPage, loadToast } from "./nav.js";
import { showNotifikasiBadge } from "./notification.js";

let file;
let progrresBar, progressContainer;
const setAnggota = (data) => {
    kelompokSaya = [data.anggota1.nama, data.anggota2.nama, data.anggota3.nama, data.anggota4.nama];
};

const showAnggota = (kelompokSaya) => {
    progressContainer = document.querySelector(".progress");
    progrresBar = document.querySelector("#progressBar");
    const anggota = document.querySelector("#anggota");
    const uploadBtn = document.querySelector(".upload");
    file = document.querySelector(".file");
    let dummyAnggota = "";
    kelompokSaya.forEach((element) => {
        if (element) {
            dummyAnggota += `<li>${element}</li>`;
        }
    });
    anggota.innerHTML = dummyAnggota;
    cekFile();
    uploadBtn.addEventListener("click", uploadFile);
};

const cekFile = () => {
    const fileField = document.querySelector(".file-field");
    const reuploadContainer = document.querySelector(".reupload-container");
    const reuploadBtn = document.querySelector(".reUpload");
    const btnPostest = document.querySelector(".postest");
    if (lkpd == false) {
        fileField.classList.remove("hide");
        reuploadContainer.classList.add("hide");
        btnPostest.classList.add("hide");
    } else {
        reuploadContainer.classList.remove("hide");
        btnPostest.classList.remove("hide");
        fileField.classList.add("hide");
    }

    reuploadBtn.addEventListener("click", () => {
        fileField.classList.remove("hide");
        reuploadContainer.classList.add("hide");
    });

    btnPostest.addEventListener("click",()=>{
      loadPage("post-test")
    })
};

const uploadFile = () => {
    const fileUpload = file.files[0];
    let storageRef = firrbaseStorage.ref(`LKPD/${nama_kelompok}/${fileUpload.name}`);
    let uploadTask = storageRef.put(fileUpload);

    progressContainer.classList.remove("hide");
    uploadTask.on("state_changed", loadUpload, errUpload, completeUpload);
};

const completeUpload = () => {
    const filePath = document.querySelector(".file-path");
    filePath.value = "";
    loadToast(`${file.files[0].name} sudah diupload`);
    const data = {
        LKPD: "true",
    };

    firebaseDatabase.ref(`users/${uid}/data`).update(data, (err) => {
        if (err) {
            loadToast(err);
        } else {
            cekFile();
            showNotifikasiBadge("Post Test", "Sekarang kamu bisa mengerjakan postest");
        }
    });
};

const loadUpload = (data) => {
    let percentage = (data.bytesTransferred / data.totalBytes) * 100;
    progrresBar.style.width = `${percentage}%`;
};

const errUpload = (err) => {
    console.error(err);
};

export { setAnggota, showAnggota };
