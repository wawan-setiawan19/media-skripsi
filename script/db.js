let id,
    nama = "Nama Agen",
    kelas = "Kelas",
    jenkel = "L",
    vak;
let dbPromised = idb.open("users", 1, function (upgradeDb) {
    let apiObjectStore = upgradeDb.createObjectStore("apiToken", {
        keyPath: "id",
    });
    let userObjectStore = upgradeDb.createObjectStore("userData", {
        keyPath: "id",
    });

    userObjectStore.createIndex("user", "user", { unique: false });
    apiObjectStore.createIndex("token", "token", { unique: false });
});

function saveUser(user) {
    dbPromised
        .then((db) => {
            const txMeta = db.transaction("apiToken", "readwrite");
            const txData = db.transaction("userData", "readwrite");
            const metaData = txMeta.objectStore("apiToken");
            const userData = txData.objectStore("userData");
            metaData.put(user.meta);
            userData.put(user.data);
            return txMeta.complete, txData.complete;
        })
        .then(() => {
            page = "home";
            loadPage("home");
            cek();
        });
}

function getById(id) {
    return new Promise((resolve, reject) => {
        dbPromised
            .then((db) => {
                const tx = db.transaction("userData", "readonly");
                const store = tx.objectStore("userData");

                return store.get(id);
            })
            .then((user) => {
                resolve(user);
            });
    });
}

function getAll() {
    return new Promise((resolve, reject) => {
        dbPromised
            .then((db) => {
                const tx = db.transaction("apiToken", "readonly");
                const store = tx.objectStore("apiToken");
                return store.getAll();
            })
            .then((user) => {
                resolve(user);
            });
    });
}

function deleteUser(id) {
    dbPromised
        .then(function (db) {
            var tx = db.transaction("apiToken", "readwrite");
            var store = tx.objectStore("apiToken");
            store.delete(id);
            return tx.complete;
        })
        .then(function () {
            console.log("Item deleted");
        });
}

const cek = () => {
    getAll().then((users) => {
        if (users.length < 1) {
            loadPage("form");
            loadFormNav();
            bodyElement.classList.add("body-form");
        } else {
            me(users[0].token);
            id = users[0].id;
            loadPage(page);
            loadBotNav();
            loadTopNav();
            bodyElement.classList.remove("body-form");
        }
    });
    getById(20).then(users=>{
        vak = users.gaya_belajar;
    });
};
