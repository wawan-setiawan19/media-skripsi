const setAnggota = (data) => {
  kelompokSaya = [
    data.anggota1.nama,
    data.anggota2.nama,
    data.anggota3.nama,
    data.anggota4.nama,
  ];
};

const showAnggota = (kelompokSaya) => {
  const anggota = document.querySelector("#anggota");
  let dummyAnggota = "";
  kelompokSaya.forEach((element) => {
    if (element) {
      dummyAnggota += `<li>${element}</li>`;
    }
  });
  anggota.innerHTML = dummyAnggota;
};

export { setAnggota, showAnggota };
