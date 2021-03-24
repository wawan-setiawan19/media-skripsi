import { loadPage } from "./nav.js";
import { updateGayaBelajar } from "./profile.js";

const dataSoal = [
  {
    id: "1",
    soal: "Saya lebih suka.....",
    pilihan1: "Melihat gambar",
    pilihan2: "Mendengarkan musik",
    pilihan3: "Berolahraga",
    created_at: "2021-02-07 23:20:20",
    updated_at: null,
  },
  {
    id: "2",
    soal: "Ketika saya menjawab pertanyaan, saya lebih suka....",
    pilihan1: "Menjawab pertanyaan dengan jawaban singkat",
    pilihan2: "Menjawab pertanyaan dengan jawaban yang panjang",
    pilihan3: "Menjawab pertanyaan diikuti dengan isyarat tangan",
    created_at: "2021-02-07 16:21:45",
    updated_at: "2021-02-07 16:21:45",
  },
  {
    id: "3",
    soal: "Ketika saya belajar, saya lebih suka untuk....",
    pilihan1: "Membaca buku dan melihat ilustrasi",
    pilihan2: "Mendengarkan guru",
    pilihan3: "Mempraktikan langsung",
    created_at: "2021-02-09 13:12:55",
    updated_at: "2021-02-09 13:12:55",
  },
  {
    id: "4",
    soal: "Ketika saya membaca teks di buku, maka saya akan....",
    pilihan1: "Membaca dengan cepat",
    pilihan2: "Membaca dengan suara keras",
    pilihan3: "Membaca dengan menggunakan jari sebagai penunjuk",
    created_at: "2021-02-14 10:26:13",
    updated_at: "2021-02-14 10:26:13",
  },
  {
    id: "5",
    soal: "Ketika saya menonton film, saya akanlebih ingat dengan.....",
    pilihan1: "Pemandangan dan setting film",
    pilihan2: "Dialog pada film",
    pilihan3: "Gerakan yang ada di film",
    created_at: "2021-02-14 10:30:14",
    updated_at: "2021-02-14 10:30:14",
  },
  {
    id: "6",
    soal:
      "Ketika saya ingin ke cafe, maka saya akan lebih suka mendatangi cafe yang......",
    pilihan1: "Memiliki spot foto yang instagramable",
    pilihan2: "Memiliki live music dan setting audio yang nyaman didengar",
    pilihan3: "Memiliki tempat duduk yang nyaman",
    created_at: "2021-02-14 10:34:40",
    updated_at: "2021-02-14 10:34:40",
  },
  {
    id: "7",
    soal: "Ketika saya mendapat hadiah spesial, saya akan .......",
    pilihan1: "Merasa senang dengan tersenyum kecil",
    pilihan2: "Merasa senang dan kegirangan hingga berteriak histeris",
    pilihan3: "Merasa senang sambil loncat kegirangan",
    created_at: "2021-02-14 10:36:10",
    updated_at: "2021-02-14 10:36:10",
  },
  {
    id: "8",
    soal:
      "Ketika saya bertemu dengan orang yang baru saya kenali, saya akan ingat...",
    pilihan1: "Wajah dan penampilannya",
    pilihan2: "Nama dan logat berbicaranya",
    pilihan3: "Sikap dan gerak-geriknya",
    created_at: "2021-02-14 10:37:27",
    updated_at: "2021-02-14 10:37:27",
  },
  {
    id: "9",
    soal: "Ketika saya menghadapi sebuah masalah, saya akan.....",
    pilihan1: "Membuat daftar langkah-langkah untuk menyelesaikan masalah",
    pilihan2:
      "Menelfon teman atau orang yang dipercaya untuk membicarakan masalah",
    pilihan3:
      "Menguraikan masalah lalu menyelesaikan masalah sesuai dengan langkah yang sedang terlintas di fikiran",
    created_at: "2021-02-14 10:39:11",
    updated_at: "2021-02-14 10:39:11",
  },
  {
    id: "10",
    soal: "Ketika saya sedang bersedih, saya akan.....",
    pilihan1: "Menulis kata-kata indah",
    pilihan2: "Mendengarkan lagu-lagu",
    pilihan3: "Menonton video",
    created_at: "2021-02-14 10:39:50",
    updated_at: "2021-02-14 10:39:50",
  },
];

const cekTest = () => {
  if (gaya_belajar) {
    loadPage("home");
  } else {
    getTest();
  }
};
const getTest = () => {
  let choices = document.querySelectorAll(".choices");
  let currentSoal = 1;

  choices.forEach((element) => {
    element.addEventListener("click", () => {
      currentSoal++;
      tampil(currentSoal);
      getSoal(currentSoal);
    });
  });

  tampil(currentSoal);
  getSoal(currentSoal);
};

const tampil = (progress) => {
  const progressBar = document.querySelector("#progressBar");
  if (progress <= 10) {
    progressBar.innerHTML = `${progress}/10`;
    progressBar.style.width = `${(progress / 10) * 100}%`;
  } else {
    progressBar.innerHTML = `Test Selesai`;
    progressBar.style.width = `100%`;
  }
};

const getSoal = (nomorSoal) => {
  const soal = document.querySelector(".pertanyaan");
  const pilihan1 = document.querySelector("#pilihan1");
  const pilihan2 = document.querySelector("#pilihan2");
  const pilihan3 = document.querySelector("#pilihan3");
  const result = document.querySelector(".result");
  if (nomorSoal > 10) {
    pilihan1.classList.add("hide");
    pilihan2.classList.add("hide");
    pilihan3.classList.add("hide");
    soal.classList.add("hide");
    result.classList.remove("hide");
    cekHasil();
  } else {
    soal.innerHTML = dataSoal[nomorSoal - 1].soal;
    pilihan1.innerHTML = dataSoal[nomorSoal - 1].pilihan1;
    pilihan2.innerHTML = dataSoal[nomorSoal - 1].pilihan2;
    pilihan3.innerHTML = dataSoal[nomorSoal - 1].pilihan3;
  }
};

const cekHasil = () => {
  let hasil_Akhir = "";
  const hasil = document.querySelector(".hasil");
  if (visual > audio) {
    if (visual >= kinestetik) {
      hasil_Akhir = "Visual";
    } else {
      hasil_Akhir = "Kinestetik";
    }
  } else if (audio >= kinestetik) {
    hasil_Akhir = "Audio";
  } else {
    hasil_Akhir = "Kinestetik";
  }
  hasil.innerHTML = hasil_Akhir;
  let data = {
    gaya_belajar: hasil_Akhir,
  };
  gaya_belajar = hasil_Akhir;
  updateGayaBelajar(data, uid);
};

export { cekTest };
