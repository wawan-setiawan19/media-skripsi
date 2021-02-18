const getProfile = () => {
    const nameElement = document.querySelector(".nama");
    const kelasElement = document.querySelector(".kelas");
    const gayaBelajarElement = document.querySelector(".gaya-belajar");
    const profilePicture = document.querySelector(".profile-picture");
    jenkel = jenkel.toLowerCase();

    nameElement.innerHTML = nama;
    kelasElement.innerHTML = kelas;
    gayaBelajarElement.innerHTML = vak;
    profilePicture.setAttribute("src", `../assets/image/profile/${jenkel}.svg`);
};
