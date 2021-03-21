import {loadPage} from "./nav.js";
const dataMisi = [
    {
        id: 1,
        nama_misi: "Percabangan",
        deskripsi:
            "Misi ini merupakan misi level A, untuk menjalankan misi ini kamu akan dibantu oleh agen rahasia lain. semoga sukses",
    },
];
const getAllMission = () => {
    let dummy = "";
    dataMisi.forEach((element) => {
        dummy += `
            <div class="col s12 m6 l3">
                <div class="card center gradient mission radius">
                    <div class="goldman truncate">${element.nama_misi}
                    </div>
                    <a href="#detail-misi/${element.id}" class="btn waves-effect btn-second radius" onclick = loadPage("detail-misi")>Cek Misi</a>
                </div>
            </div>
            `;
        // console.log(element);
    });
    document.querySelector("#mission").innerHTML = dummy;
};

export { getAllMission };
