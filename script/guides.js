const getAllGuides = () =>{
    let dataGuide = "";

    fetch(`${baseUrl}panduan`)
    .then(response => response.json())
    .then(data=>{
        data.forEach(element => {
            dataGuide += `
                <li>
                        <div class="collapsible-header gradient no-border guide-header">
                            <div class="goldman">${element.judul_panduan}</div>
                        </div>
                        <div class="collapsible-body border-gradient">
                            <p>${element.deskripsi}</p>
                        </div>
                </li>
            `
        });
        document.querySelector("#guides").innerHTML = dataGuide;
    })
}
