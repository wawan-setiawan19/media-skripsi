let dataUrut;
let kelompokNilai1 = [],
  kelompokNilai2 = [],
  kelompokNilai3 = [],
  kelompokNilai4 = [],
  reverseKelompokNilai2 = [],
  reverseKelompokNilai4 = [];
let kelompokDummy;
let kelompok = [];
let dataSiswa = [];

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

};

const lihatKelompok = () => {
  firebaseDatabase.ref("nilai").once("value", (user) => {
    const data = user.val();

    data.forEach((element) => {
      dataSiswa.push(element);
    });
    bagiKelompok();
    cetakAnggota();
  });
};

const cetakAnggota = () => {
  for (let i = 0; i < kelompok.length; i++) {
    if (nama === kelompok[i].anggota1.nama) return (nama_kelompok = i + 1);
    if (nama === kelompok[i].anggota2.nama) return (nama_kelompok = i + 1);
    if (nama === kelompok[i].anggota3.nama) return (nama_kelompok = i + 1);
    if (nama === kelompok[i].anggota4.nama) return (nama_kelompok = i + 1);
  }
};

export { lihatKelompok };
