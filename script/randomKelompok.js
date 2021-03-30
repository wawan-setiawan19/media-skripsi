let dataUrut;
let kelompokNilai1 = [],
  kelompokNilai2 = [],
  kelompokNilai3 = [],
  kelompokNilai4 = [],
  reverseKelompokNilai2 = [],
  reverseKelompokNilai4 = [];
let kelompokDummy;
let kelompok = [];
let dataSiswa = [
  // { nama: "John", nilai: 20 },
  // { nama: "Doe", nilai: 37 },
  // { nama: "Jane", nilai: 83 },
  // { nama: "Ujang", nilai: 93 },
  // { nama: "Marsel", nilai: 62 },
  // { nama: "Lyo", nilai: 48 },
  // { nama: "Ardit", nilai: 87 },
  // { nama: "Dodit", nilai: 50 },
  // { nama: "Dadang", nilai: 70 },
  // { nama: "Dewa", nilai: 86 },
  // { nama: "Irene", nilai: 69 },
  // { nama: "Iani", nilai: 34 },
  // { nama: "Upi", nilai: 62 },
  // { nama: "Ziva", nilai: 28 },
  // { nama: "Tiara", nilai: 36 },
  // { nama: "Mark", nilai: 80 },
  // { nama: "Boy", nilai: 22 },
  // { nama: "Ehsan", nilai: 89 },
  // { nama: "Echa", nilai: 47 },
  // { nama: "Abdul", nilai: 49 },
  // { nama: "Echa", nilai: 47 },
];

// firebaseDatabase.ref("users").on("value", user=>{
//     const userData = user.val();
//     console.log(userData);
// })

const urutData = () => {
  dataUrut = dataSiswa.sort((a, b) => b.nilai - a.nilai);
};

const kelompokNilai = () => {
  urutData();
  dataUrut.forEach((element) => {
    if (kelompokNilai1.length < dataUrut.length / 4) {
      kelompokNilai1.push(element);
    } else if (kelompokNilai2.length < dataUrut.length / 4) {
      kelompokNilai2.push(element);
    } else if (kelompokNilai3.length < dataUrut.length / 4) {
      kelompokNilai3.push(element);
    } else {
      kelompokNilai4.push(element);
    }
  });

  reverseKelompokNilai2 = kelompokNilai2.sort((a, b) => a.nilai - b.nilai);
  reverseKelompokNilai4 = kelompokNilai4.sort((a, b) => a.nilai - b.nilai);
};

const bagiKelompok = () => {
  kelompokNilai();

  for (let j = 0; j < kelompokNilai1.length; j++) {
    kelompokDummy = {
      anggota1: kelompokNilai1[j],
      anggota2: reverseKelompokNilai2[j],
      anggota3: kelompokNilai3[j],
      anggota4: reverseKelompokNilai4[j],
    };
    kelompok.push(kelompokDummy);
  }

  console.log(kelompok);
};

firebaseDatabase.ref("nilai").once("value", (user) => {
  const data = user.val();

  data.forEach((element) => {
    dataSiswa.push(element);
  });
  bagiKelompok();
  cetakAnggota();
});

cetakAnggota = () => {
  for (let i = 0; i < kelompok.length; i++) {
    if (nama === kelompok[i].anggota1.nama) return console.log(`kelompok ${i}`);
    if (nama === kelompok[i].anggota2.nama) return console.log(`kelompok ${i}`);
    if (nama === kelompok[i].anggota3.nama) return console.log(`kelompok ${i}`);
    if (nama === kelompok[i].anggota4.nama) return console.log(`kelompok ${i}`);
  }
};
