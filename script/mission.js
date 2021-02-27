const getNewMission = () => {
    let dataMisi = "";
    fetch(`${baseUrl}new_misi/`)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(element=>{
                dataMisi += `
            <div class="col s12 m6 l3">
                <div class="card center gradient mission radius">
                    <div class="goldman truncate">${element.nama_misi}
                    </div>
                    <a href="#detail-misi/${element.id}" class="btn waves-effect btn-second radius" onclick = loadPage("detail-misi")>Cek Misi</a>
                </div>
            </div>
            `;
            })
            document.querySelector("#mission").innerHTML = dataMisi;
        });
};

const cekMisi = ()=>{
    if (vak == 0) {
        loadPage("test-vak");
    }
}