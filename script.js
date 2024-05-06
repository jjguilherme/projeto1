const loginForm = document.querySelector("#login-form");
const cadastroForm = document.querySelector("#cadastro-form");

if (loginForm) {
    const eField = loginForm.querySelector(".email");
    const eInput = eField.querySelector("input");
    const pField = loginForm.querySelector(".password");
    const pInput = pField.querySelector("input");

    loginForm.onsubmit = (e) => {
        e.preventDefault();

        (eInput.value == "") ? eField.classList.add("shake", "error"): checkEmail();
        (pInput.value == "") ? pField.classList.add("shake", "error"): checkPass();

        setTimeout(() => {
            eField.classList.remove("shake");
            pField.classList.remove("shake");
        }, 500);

        eInput.onkeyup = () => { checkEmail(); }
        pInput.onkeyup = () => { checkPass(); }

        function checkEmail() {
            if (eInput.value == "") {
                eField.classList.add("error");
                eField.classList.remove("valid");
            } else {
                eField.classList.remove("error");
                eField.classList.add("valid");
            }
        }

        function checkPass() {
            if (pInput.value == "") {
                pField.classList.add("error");
                pField.classList.remove("valid");
            } else {
                pField.classList.remove("error");
                pField.classList.add("valid");
            }
        }

        if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
            console.log("Autenticação bem-sucedida. Redirecionando...");
            setTimeout(() => {
                window.location.href = "principal.html";
            }, 1000);
        }
    }
}

if (cadastroForm) {
    const nameField = cadastroForm.querySelector(".name");
    const nameInput = nameField.querySelector("input");
    const eField = cadastroForm.querySelector(".email");
    const eInput = eField.querySelector("input");
    const pField = cadastroForm.querySelector(".password");
    const pInput = pField.querySelector("input");
    const passConfirmField = cadastroForm.querySelector(".password-confirm");
    const passConfirmInput = passConfirmField.querySelector("input");

    cadastroForm.onsubmit = (e) => {
        e.preventDefault();

        (nameInput.value == "") ? nameField.classList.add("shake", "error"): checkName();
        (eInput.value == "") ? eField.classList.add("shake", "error"): checkEmail();
        (pInput.value == "") ? pField.classList.add("shake", "error"): checkPass();
        (passConfirmInput.value == "" || passConfirmInput.value !== pInput.value) ? passConfirmField.classList.add("shake", "error"): checkPassConfirm();

        setTimeout(() => {
            nameField.classList.remove("shake");
            eField.classList.remove("shake");
            pField.classList.remove("shake");
            passConfirmField.classList.remove("shake");
        }, 500);

        nameInput.onkeyup = () => { checkName(); }
        eInput.onkeyup = () => { checkEmail(); }
        pInput.onkeyup = () => { checkPass(); }
        passConfirmInput.onkeyup = () => { checkPassConfirm(); }

        function checkName() {
            if (nameInput.value == "") {
                nameField.classList.add("error");
                nameField.classList.remove("valid");
            } else {
                nameField.classList.remove("error");
                nameField.classList.add("valid");
            }
        }

        function checkEmail() {
            let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!eInput.value.match(pattern)) {
                eField.classList.add("error");
                eField.classList.remove("valid");
                let errorTxt = eField.querySelector(".error-txt");

                (eInput.value != "") ? errorTxt.innerText = "Coloque um e-mail válido": errorTxt.innerText = "E-mail não pode ficar em branco!";
            } else {
                eField.classList.remove("error");
                eField.classList.add("valid");
            }
        }

        function checkPass() {
            if (pInput.value == "") {
                pField.classList.add("error");
                pField.classList.remove("valid");
            } else {
                pField.classList.remove("error");
                pField.classList.add("valid");
            }
        }

        function checkPassConfirm() {
            if (passConfirmInput.value == "" || passConfirmInput.value !== pInput.value) {
                passConfirmField.classList.add("error");
                passConfirmField.classList.remove("valid");
            } else {
                passConfirmField.classList.remove("error");
                passConfirmField.classList.add("valid");
            }
        }

        if (!nameField.classList.contains("error") && !eField.classList.contains("error") && !pField.classList.contains("error") && !passConfirmField.classList.contains("error")) {
            
            const successMessage = document.createElement("div");
            successMessage.classList.add("success-message");
            successMessage.innerText = "Usuário cadastrado com sucesso!";
            cadastroForm.appendChild(successMessage);

            // Redireciona após um pequeno atraso
            setTimeout(() => {
                window.location.href = cadastroForm.getAttribute("action");
            }, 2000); // 2000 milissegundos = 2 segundos
        }
    }
}
