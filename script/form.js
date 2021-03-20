import { loadToast } from "./nav.js";
class Form {
  static getButton = () => {
    const btnSignUp = document.querySelector("#btnSignUp");
    const btnLogin = document.querySelector("#btnLogin");
    const btnLoginGoogle = document.querySelector("#btnGoogle");
    const passwordLogin = document.querySelector("#password_login");
    const password = document.querySelector("#password");

    btnLogin.addEventListener("click", this.handleLogin);
    btnLoginGoogle.addEventListener("click", this.handleLoginGoogle);
    btnSignUp.addEventListener("click", this.handleSignUp);

    const toogleIconLogin = document.querySelector("#iconPasswordLogin");
    const toogleIconSignUp = document.querySelector("#iconPasswordSignUp");
    let visible = false;

    const handleClickVisible = () => {
      if (!visible) {
        visible = true;
        passwordLogin.setAttribute("type", "text");
        password.setAttribute("type", "text");
        toogleIconLogin.innerHTML = "visibility";
        toogleIconSignUp.innerHTML = "visibility";
      } else {
        visible = false;
        passwordLogin.setAttribute("type", "password");
        password.setAttribute("type", "password");
        toogleIconLogin.innerHTML = "visibility_off";
        toogleIconSignUp.innerHTML = "visibility_off";
      }
      console.log(visible);
    };
    toogleIconLogin.addEventListener("click", handleClickVisible);
    toogleIconSignUp.addEventListener("click", handleClickVisible);
  };

  static getLogout = () => {
    const btnLogout = document.querySelector("#btnLogout");
    btnLogout.addEventListener("click", this.handleLogout);
  };

  static handleLogin = (e) => {
    const email = document.querySelector("#email_login");
    const password = document.querySelector("#password_login");
    e.preventDefault();
    firebaseAuth
      .signInWithEmailAndPassword(email.value, password.value)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        loadToast(err.message);
      });
  };

  static handleLoginGoogle = (e) => {
    e.preventDefault();

    firebaseAuth
      .signInWithPopup(googleProvider)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  static handleLogout = (e) => {
    e.preventDefault();
    firebaseAuth
      .signOut()
      .then(() => {
        loadToast("Sampai jumpa kembali agen");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  static handleSignUp = (e) => {
    const email = document.querySelector("#email");
    const nis = document.querySelector("#nis");
    const kelas = document.querySelector("#kelas");
    const password = document.querySelector("#password");
    const nama = document.querySelector("#nama_lengkap");
    let uid = "";
    let dataUser = {
      displayName: nama.value,
      nis: nis.value,
      kelas: kelas.value,
      email: email.value,
      password: password.value,
      jenis_kelamin: jenis_kelamin,
    };
    firebaseAuth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((register) => {
        console.log(register.user.uid);
        uid = register.user.uid;
        this.simpanData(uid, dataUser);
      })
      .catch((err) => {
        console.error(err);
        loadToast(err.message);
      });

    e.preventDefault();
    console.log(dataUser);
  };

  static simpanData = (id, data) => {
    firebaseDatabase.ref("users/" + id).set({
      data: data,
    });
  };
}

export default Form;
