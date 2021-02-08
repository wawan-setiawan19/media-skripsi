const botNavElement = document.querySelector("#bottomNav");
const topNavElement = document.querySelector("#topNav");
const bodyElement = document.querySelector("#main");
let apiToken = "";
let getUrl = location.hash.substr(1).split("/"); 
let page = getUrl[0];
// let page = location.hash.substr(1);

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
        topNavElement.innerHTML = xhr.responseText;
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
                    console.log(page);
                    if (page === "home") loadHome();
                    if (page === "profile") loadProfile();
                    if (page === "form") loadForm();
                    if (page === "detail-misi") cekMisi();
                    if (page === "test-vak") getTest();
                    M.AutoInit();
                }else if(xmlHttp.status === 404){
                    loadPage('404');
                    content.innerHTML = xmlHttp.responseText;
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

const loadProfile = ()=>{
    getProfile();
    getLogout();
}

const loadForm = () =>{
    getSignUp();
    getLogin();
}

const loadToast = (page) =>{
    M.toast({html: `${page}`, outDuration:100, classes:'gradient'});
    setTimeout(() => {
        M.Toast.dismissAll();
    }, 1500);
}
