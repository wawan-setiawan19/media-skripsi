    const baseUrl = "http://127.0.0.1:8000/api/";
let inputJK = "L";
let jk = (value) => {
    inputJK = value;
};

const getSignUp = () => {
    const btnSignUp = document.querySelector("#btnSignUp");
    const inputNis = document.querySelector("#nis");
    const inputNama = document.querySelector("#nama_lengkap");
    const inputKelas = document.querySelector("#kelas");
    const inputPassword = document.querySelector("#password");

    btnSignUp.addEventListener("click", () => {
        let data = {
            nis: inputNis.value,
            name: inputNama.value,
            kelas: inputKelas.value,
            jenis_kelamin: inputJK,
            password: inputPassword.value,
        };

        signup(data);
        inputNis.value = "";
        inputNama.value = "";
        inputPassword.value = "";
        inputKelas.value = "";
    });
};

const getLogin = () => {
    const btnLogin = document.querySelector("#btnLogin");
    const inputNis = document.querySelector("#nis_login");
    const inputPassword = document.querySelector("#password_login");

    btnLogin.addEventListener("click", () => {
        let data = {
            nis: inputNis.value,
            password: inputPassword.value,
        };
        login(data);
    });
};

const getLogout = () => {
    const btnLogout = document.querySelector("#btnLogout");

    btnLogout.addEventListener("click", () => {
        apiToken = "";
        deleteUser(id);
        M.toast({ html: "sampai bertemu lagi agen!!" });
        loadPage("form");
        loadFormNav();
        bodyElement.classList.add("body-form");
    });
};

const login = (data) => {
    fetch(`${baseUrl}login`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            const errors = data.error;
            if (errors) {
                M.toast({ html: errors });
            } else {
                M.toast({ html: "Selamat Menjalankan misi agen" });
                apiToken = data.meta.token;
                id = data.meta.id;
                saveUser(data);
                bodyElement.classList.remove("body-form");
                
            }
        });
};

const signup = (data) => {
    fetch(`${baseUrl}register`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            const error = data.errors;
            if (error) {
                for (const key in error) {
                    console.log(error[key][0]);
                    M.toast({ html: error[key][0] });
                }
            } else {
                M.toast({
                    html: "Yeaay selamat kamu berhasil menjadi agen SIA",
                });
                window.location.replace("http://localhost:5500/#login");
            }
        });
};

const me = (data) => {
    fetch(`${baseUrl}me?api_token=${data}`)
        .then((response) => response.json())
        .then((result) => {
            nama = result.data.name;
            kelas = result.data.kelas;
            jenkel = result.data.jenis_kelamin;
            if (page === "profile") {
                getProfile();
            }
        });
};

cek();
