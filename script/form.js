import { loadToast } from "./nav.js";

class Form {
    static getButton = () => {
        const btnSignUp = document.querySelector("#btnSignUp");
        const btnLogin = document.querySelector("#btnLogin");
        const btnLoginGoogle = document.querySelector("#btnGoogle");

        btnLogin.addEventListener("click", this.handleLogin);
        btnLoginGoogle.addEventListener("click", this.handleLoginGoogle);
    };

    static handleLogin = (e) => {
        e.preventDefault();
        const email = document.querySelector("#email_login");
        const password = document.querySelector("#password_login");
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
}

export default Form;
