// Mudar de Login > Cadastro
const formSignin = document.querySelector('#signin');
const formSignup = document.querySelector('#signup');
const btnColor = document.querySelector('.btnColor');

document.querySelector('#btnSignin').addEventListener('click', () => {
    formSignin.style.left = "25px";
    formSignup.style.left = "450px";
    btnColor.style.left = "0px";
    updateCaptcha("signin");
});

document.querySelector('#btnSignup').addEventListener('click', () => {
    formSignin.style.left = "-450px";
    formSignup.style.left = "25px";
    btnColor.style.left = "110px";
    updateCaptcha("signup");
});

// Captcha - Código de Verificação
const allValue = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const captchaValueSignin = document.getElementById("captchaValueSignin");
const captchaValueSignup = document.getElementById("captchaValueSignup");
const inputCaptchaSignin = document.getElementById("inputCaptchaSignin");
const inputCaptchaSignup = document.getElementById("inputCaptchaSignup");

function generateCaptcha() {
    let cValue = "";
    for (let i = 0; i < 6; i++) {
        let cVal = allValue[Math.floor(Math.random() * allValue.length)];
        cValue += cVal;
    }
    return cValue;
}

function updateCaptcha(formType) {
    let captchaValue;
    let inputCaptcha;
    if (formType === "signin") {
        captchaValue = captchaValueSignin;
        inputCaptcha = inputCaptchaSignin;
    } else {
        captchaValue = captchaValueSignup;
        inputCaptcha = inputCaptchaSignup;
    }
    const cValue = generateCaptcha();
    captchaValue.innerText = cValue;
    inputCaptcha.value = "";
}

window.addEventListener('load', () => {
    updateCaptcha("signin");
});

// Função para validar se o usuário aceitou os termos ao cadastrar
function validateForm(formType) {
    let password, password2, email;

    // Seleciona os campos com base no tipo de formulário
    if (formType === 'signin') {
        password = document.getElementById('signinPassword').value;
        email = document.getElementById('signinEmail').value;
    } else if (formType === 'signup') {
        password = document.getElementById('signupPassword').value;
        password2 = document.getElementById('signupPassword2').value;
        email = document.getElementById('signupEmail').value;
    } else {
        console.error('Tipo de formulário inválido');
        return false;
    }

    const inputCaptcha = formType === 'signin' ? inputCaptchaSignin : inputCaptchaSignup;
    const captchaValue = formType === 'signin' ? captchaValueSignin : captchaValueSignup;

    // Verifica se todos os campos foram preenchidos
    if (formType === 'signup') {
        if (password.trim() === "" || password2.trim() === "" || email.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return false;
        }
        // Verifica se as senhas coincidem
        if (password !== password2) {
            alert("As senhas não coincidem.");
            return false;
        }
    } else if (formType === 'signin') {
        if (password.trim() === "" || email.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return false;
        }
    }

    // Verifica se o email é válido
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Email inválido. Por favor, insira um email válido.");
        return false;
    }

    // Verifica se o captcha está correto
    if (captchaValue.innerText !== inputCaptcha.value) {
        alert("Captcha inválido. Por favor, tente novamente.");
        updateCaptcha(formType);
        return false;
    }

    // Verifica se o usuário aceitou os termos apenas no cadastro
    if (formType === 'signup' && !inputAceitarTermos.checked) {
        alert("Você deve aceitar os termos e condições para continuar.");
        return false;
    }

    // Redireciona após validação bem-sucedida
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 100);

    return false; // Impede o envio real do formulário
}

// Seleciona o botão para abrir o pop-up
const botaoTermosECondicoes = document.getElementById('termos-e-condicoes');

// Seleciona o pop-up
const popupTermosECondicoes = document.getElementById('popup-termos-e-condicoes');

// Adiciona evento de clique ao botão para abrir o pop-up
botaoTermosECondicoes.addEventListener('click', () => {
    popupTermosECondicoes.style.display = 'block';
});

// Seleciona o botão para fechar o pop-up
const botaoFecharPopup = document.getElementById('fechar-popup');

// Adiciona evento de clique ao botão para fechar o pop-up
botaoFecharPopup.addEventListener('click', () => {
    popupTermosECondicoes.style.display = 'none';
});

// Seleciona os botões do pop-up
const botaoAceitarTermos = document.getElementById('aceitar-termos-btn');
const botaoRecusarTermos = document.getElementById('recusar-termos-btn');
const inputAceitarTermos = document.getElementById('aceitar-termos');

// Adiciona evento de clique ao botão "Aceitar"
botaoAceitarTermos.addEventListener('click', () => {
    inputAceitarTermos.checked = true; // Ativa o input do tipo radio
    popupTermosECondicoes.style.display = 'none'; // Fecha o pop-up
});

// Adiciona evento de clique ao botão "Recusar"
botaoRecusarTermos.addEventListener('click', () => {
    window.close(); // Fecha a página
});
