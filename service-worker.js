importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if (workbox) {
    console.log("Workbox Loaded");
} else {
    console.log("Gagal Load Workbox");
}

workbox.precaching.precacheAndRoute(
    [
        { url: "/", revision: "1" },
        { url: "/assets/font/Goldman-Bold.ttf", revision: "1" },
        { url: "/assets/font/Roboto-Condensed.ttf", revision: "1" },
        { url: "/assets/icons/favicon.png", revision: "1" },
        { url: "/assets/icons/icons-512.png", revision: "2" },
        { url: "/assets/icons/icons-192.png", revision: "1" },
        {
            url: "/assets/image/materi/flowchart-bersarang-kasus.jpg",
            revision: "1",
        },
        {
            url: "/assets/image/materi/flowchart-if-else-if-kasus.svg",
            revision: "1",
        },
        { url: "/assets/image/materi/flowchart-if-else.png", revision: "1" },
        { url: "/assets/image/materi/flowchart-if-else-if.png", revision: "1" },
        { url: "/assets/image/materi/flowchart-percabangan-if.jpg", revision: "1" },
        { url: "/assets/image/materi/flowchart-soal9.svg", revision: "1" },
        { url: "/assets/image/materi/flowchart-switch-case.png", revision: "1" },
        { url: "/assets/image/materi/flowchart.svg", revision: "1" },
        { url: "/assets/image/materi/perbedaan-ifelif-wc.jpg", revision: "1" },
        { url: "/assets/image/materi/percabangan-bersarang.jpg", revision: "1" },
        { url: "/assets/image/materi/percabangan-if-else-if.jpg", revision: "1" },
        { url: "/assets/image/materi/percabangan-if-else.jpg", revision: "1" },
        { url: "/assets/image/materi/percabangan-if.jpg", revision: "1" },
        { url: "/assets/image/materi/percabangan-switch-case.jpg", revision: "1" },
        { url: "/assets/image/materi/percabangan.jpg", revision: "1" },
        { url: "/assets/image/profile/l.svg", revision: "1" },
        { url: "/assets/image/profile/p.svg", revision: "1" },
        { url: "/assets/image/404.png", revision: "1" },
        { url: "/assets/image/main_banner.png", revision: "1" },
        { url: "/assets/image/misi.png", revision: "1" },
        { url: "/components/bottom-nav.html", revision: "1" },
        { url: "/components/form-nav.html", revision: "1" },
        { url: "/components/top-nav.html", revision: "1" },
        { url: "/pages/404.html", revision: "1" },
        { url: "/pages/form.html", revision: "3" },
        { url: "/pages/home.html", revision: "2" },
        { url: "/pages/lengkapi-data.html", revision: "1" },
        { url: "/pages/missions.html", revision: "1" },
        { url: "/pages/post-test.html", revision: "1" },
        { url: "/pages/pre-test.html", revision: "1" },
        { url: "/pages/profile.html", revision: "1" },
        { url: "/pages/test-vak.html", revision: "1" },
        { url: "/script/app.js", revision: "3" },
        { url: "/script/chat.js", revision: "1" },
        { url: "/script/config.js", revision: "1" },
        { url: "/script/form.js", revision: "3" },
        { url: "/script/guides.js", revision: "1" },
        { url: "/script/lkpd.js", revision: "1" },
        { url: "/script/materi.js", revision: "1" },
        { url: "/script/materialize.min.js", revision: "1" },
        { url: "/script/menu.js", revision: "1" },
        { url: "/script/misi.js", revision: "1" },
        { url: "/script/nav.js", revision: "1" },
        { url: "/script/notification.js", revision: "2" },
        { url: "/script/posttest.js", revision: "1" },
        { url: "/script/pretest.js", revision: "2" },
        { url: "/script/profile.js", revision: "1" },
        { url: "/script/randomKelompok.js", revision: "1" },
        { url: "/script/soal.js", revision: "1" },
        { url: "/script/test.js", revision: "1" },
        { url: "/style/materialize.min.css", revision: "1" },
        { url: "/style/style.css", revision: "1" },
        { url: "/index.html", revision: "1" },
        { url: "/manifest.json", revision: "7" },
        { url: "/service-worker.js", revision: "16" },
    ],
    {
        ignoreUrlParamatersMatching: [/.*/],
    }
);

workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
    })
);

workbox.routing.registerRoute(
    new RegExp("/pages/"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "pages",
    })
);

workbox.routing.registerRoute(
    new RegExp("/script/"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "script",
    })
);

workbox.routing.registerRoute(
    new RegExp("/assets/"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "assets",
    })
);

workbox.routing.registerRoute(
    new RegExp("/components/"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "components",
    })
);

workbox.routing.registerRoute(
    new RegExp("/style/"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "style",
    })
);
