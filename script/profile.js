const getProfile = () => {
    const nameElement = document.querySelector(".nama");
    const profilePicture = document.querySelector(".profile-picture");
    // const kelasElement = document.querySelector(".kelas");
    // const gayaBelajarElement = document.querySelector(".gaya-belajar");
    // jenkel = jenkel.toLowerCase();

    nameElement.innerHTML = nama;
    // kelasElement.innerHTML = kelas;
    // gayaBelajarElement.innerHTML = vak;
    profilePicture.setAttribute("src", foto);
};

const updateGayaBelajar = (gaya,id) => {
    fetch(`${baseUrl}ubah_data/${id}`, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(gaya),
    });
};

export {getProfile}