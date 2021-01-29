let id;
let dbPromised = idb.open("users", 1, function (upgradeDb) {
    let usersObjectStore = upgradeDb.createObjectStore("apiToken", {
        keyPath: "id",
    });
    usersObjectStore.createIndex("token", "token", { unique: false });
});

function saveUser(user) {
    dbPromised
        .then((db) => {
            const tx = db.transaction("apiToken", "readwrite");
            const store = tx.objectStore("apiToken");
            store.put(user.meta);
            return tx.complete;
        })
        .then(() => {
            console.log("Kompetisi berhasil tersimpan");
        });
}

function getById(nis) {
    return new Promise((resolve, reject) => {
        dbPromised
            .then((db) => {
                const tx = db.transaction("apiToken", "readonly");
                const store = tx.objectStore("apiToken");

                return store.get(nis);
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
            store.getAll().then(data=>console.log(data));
            store.delete(id);
            return tx.complete;
        })
        .then(function () {
            console.log("Item deleted");
        });
}

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