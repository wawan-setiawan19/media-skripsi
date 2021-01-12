const botNavElement = document.querySelector("#bottomNav");
const topNavElement = document.querySelector("#topNav");

let page = location.hash.substr(1);
if(page == "") page = "home";

const loadBotNav = () => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () =>{
        if(this.readyState === 4){
            if(this.status !== 200) return;
        }

        botNavElement.innerHTML = xhr.responseText;
    };

    xhr.open("GET", "./components/bottom-nav.html");
    xhr.send();
}

const loadFormNav = () => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () =>{
        if(this.readyState === 4){
            if(this.status !== 200) return;
        }

        botNavElement.innerHTML = xhr.responseText;
    };

    xhr.open("GET", "./components/form-nav.html");
    xhr.send();
}

const loadTopNav = () =>{
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4){
            if(xhr.status !== 200) return;
        }

        topNavElement.innerHTML = xhr.responseText;
    };

    xhr.open("GET", "./components/top-nav.html");
    xhr.send();
}

const loadPage = (page) =>{
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = () => {
            if(xmlHttp.readyState === 4){
                const content = document.querySelector("#body-content");
                if(xmlHttp.status === 200){
                    content.innerHTML= xmlHttp.responseText;
                    if (page === "home") loadHome();
                    M.AutoInit();
                }else if(xmlHttp.status === 404){
                    content.innerHTML = `<p>Halaman tidak ada</p>`;
                }else{
                    content.innerHTML = `<p>Ups.. halaman tidak dapat diakses</p>`;
                }
            }
        };
        
        xmlHttp.open("GET",`pages/${page}.html`,true);
        xmlHttp.send();
}

const changeActive = () =>{
    console.log(this);
}

const loadHome = () =>{
    getNewMission();
    getAllGuides();
    loadScramble();
}

const loadToast = (page) =>{
    M.toast({html: `${page}`, outDuration:100, classes:'gradient'});
    setTimeout(() => {
        M.Toast.dismissAll();
    }, 1500);
}

if(apiToken !== ""){
    loadPage(page);
    loadBotNav();
    loadTopNav();
}else{
    loadPage("form");
    loadFormNav();
}
