const guides = [
    {
        id: 1,
        judul_panduan: "Apa itu SIA",
        deskripsi:
            "SIA merupakan kependekan dai STAD Intelegence Agency. SIA merupakan website untuk media pembelajaran mata pelajaran algoritma dan pemrograman dasar menggunakan model belajar STAD",
    },
    {
        id: 2,
        judul_panduan: "Bagaimana cara menggunakannya?",
        deskripsi:
            "Kamu harus terdaftar terlebih dahulu atau login menggunakan akun google, silahkan isi form pendaftaraan, nanti kamu akan diberikan beberapa pelejaran mengenai pemrograman dasar yang pada website ini disebut misi",
    },
    {
        id: 3,
        judul_panduan: "Setelah daftar kemana?",
        deskripsi:
            "Setelah daftar kamu bisa login menggunakan form untuk login, setelah login silahkan kerjakan misi yang ada",
    },
    {
        id: 4,
        judul_panduan: "Apa itu Misi?",
        deskripsi:
            "Setelah daftar kamu bisa login menggunakan form untuk login, setelah login silahkan kerjakan misi yang ada, misi adalah serangkaian kegiatan yang harus dikerjakan",
    },
    {
        id: 5,
        judul_panduan: "Apa itu gaya belajar",
        deskripsi:
            "Gaya belajar adalah cara belajar dari seorang murid, terdapat tiga gaya belajar yaitu visual, audio, dan kinestetik",
    },
];
const getAllGuides = () => {
    let dataGuide = "";

    guides.forEach((element) => {
        dataGuide += `
                <li>
                        <div class="collapsible-header gradient no-border guide-header">
                            <div class="goldman">${element.judul_panduan}</div>
                        </div>
                        <div class="collapsible-body border-gradient">
                            <p>${element.deskripsi}</p>
                        </div>
                </li>
            `;
    });
    document.querySelector("#guides").innerHTML = dataGuide;
};

export default getAllGuides;
