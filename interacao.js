const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e) => {
    e.preventDefault() // Irá retirar o comportamento padrão do formulário
    checkInputs() // Chama a função que será executada para validar os inputs
})

// Função que valida os inputs
function checkInputs() {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const password1Value = password1.value.trim()
    const password2Value = password2.value.trim()

    // Validação do campo Nome
    if (usernameValue === '') {
        setErrorFor(username, 'Preencha esse campo')
    } else {
        setSuccessFor(username)
    }

    // Validação do campo E-mail
    if (emailValue === '') {
        setErrorFor(email, 'Preencha o e-mail')
    } else if (!isValidEmail(emailValue)) {
        setErrorFor(email, 'E-mail inválido')
    } else {
        setSuccessFor(email)
    }

    // Validação da Senha
    if (password1Value === '') {
        setErrorFor(password1, 'Preencha a senha')
    } else if (password1Value.length < 8) {
        setErrorFor(password1, 'A senha precisa ter no mínimo 8 caracteres')
    } else {
        setSuccessFor(password1)
    }

    // Validação da Confirmação de Senha
    if (password2Value === '') {
        setErrorFor(password2, 'Confirme sua senha')
    } else if (password1Value !== password2Value) {
        setErrorFor(password2, 'As senhas não conferem')
    } else {
        setSuccessFor(password2)
    }
}

// Função para validar o formato de e-mail
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Função para mostrar o erro
function setErrorFor(input, message) {
    const formItem = input.parentElement
    const small = formItem.querySelector('small')

    small.innerText = message
    formItem.className = 'form-item error'

    // Mostrar ícone de erro
    const errorIcon = formItem.querySelector('.img-error')
    const successIcon = formItem.querySelector('.img-success')
    errorIcon.style.visibility = 'visible'
    successIcon.style.visibility = 'hidden'
}

// Função para mostrar o sucesso
function setSuccessFor(input) {
    const formItem = input.parentElement
    formItem.className = 'form-item success'

    // Mostrar ícone de sucesso
    const successIcon = formItem.querySelector('.img-success')
    const errorIcon = formItem.querySelector('.img-error')
    successIcon.style.visibility = 'visible'
    errorIcon.style.visibility = 'hidden'
}