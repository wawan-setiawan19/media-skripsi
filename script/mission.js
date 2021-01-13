const getNewMission = () =>{
    let dataMisi = "";
    fetch(`${baseUrl}new_misi/`)
    .then(response => response.json())
    .then(data => {
        for(let i=1; i<=4; i++){
            if(data[i]==undefined){}
            else{
                dataMisi += `
                <div class="col s12 m6 l3">
                    <div class="card center gradient mission radius">
                        <div class="goldman truncate">${data[i].nama_misi}
                        </div>
                        <a href="" class="btn waves-effect btn-second radius">Cek Misi</a>
                    </div>
                </div>
                        `;
            }
        }
        document.querySelector("#mission").innerHTML = dataMisi;
    });
}

const getAllMission = () =>{
    let dataMisi = "";
    fetch(`${baseUrl}misi`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}
