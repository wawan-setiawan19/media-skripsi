const displayNotif = (title, options) => {
    if (Notification.permission === "granted") {
        navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification(title, options);
        });
    } else {
        console.error("Tidak ada izin");
    }
};

const showNotifikasiBadge = (judul,isi) => {
    const title = judul;
    const options = {
        body: isi,
        badge: "./assets/icons/favicon.png",
    };

    displayNotif(title, options);
};


const requestPermission = () => {
    Notification.requestPermission().then((result) => {
        if (result === "denied") {
            console.log("Fitur tidak diizinkan");
        } else if (result === "default") {
            console.error("Pengguna menutup kotak dialog permintaan izin");
        }

        console.log("Fitur notifikasi diizinkan");
    });
};

export { requestPermission, showNotifikasiBadge };
