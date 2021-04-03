const firebaseConfig = {
  apiKey: "AIzaSyCCbBhMtvcr7ZySS2jgS_AQ2UDyWJb94eQ",
  authDomain: "skripsi-73969.firebaseapp.com",
  projectId: "skripsi-73969",
  storageBucket: "skripsi-73969.appspot.com",
  messagingSenderId: "632555080516",
  appId: "1:632555080516:web:3b5d5e032bb2dc77e36511",
  measurementId: "G-L79FK9PSMJ",
};

firebase.initializeApp(firebaseConfig)

const firebaseDatabase = firebase.database();
const firebaseAuth = firebase.auth();
const firrbaseStorage = firebase.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const botNavElement = document.querySelector("#bottomNav");
const topNavElement = document.querySelector("#topNav");
const bodyElement = document.querySelector("#main");
let getUrl = location.hash.substr(1).split("/");
let page = getUrl[0];

let uid = "";
let email = "";
let nama = "";
let nis = "";
let absen = "";
let foto = "";
let jenis_kelamin = "L";
let gaya_belajar = "";
let kelas = "";
let lkpd = true;
let pretest = 0;
let postest = 0;
let visual = 0;
let audio = 0;
let kinestetik = 0;
let nama_kelompok = 0;
let kelompokSaya;

jk = (value) => {
  jenis_kelamin = value;
};

const addVisual = () => {
  visual++;
};
const addAudio = () => {
  audio++;
};
const addKinestetik = () => {
  kinestetik++;
};
