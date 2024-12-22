document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        if (!validate()) {
            event.preventDefault();
        }
    });
});

const setError = (errorMessageId, errorText) => {
    const errorMessage = document.getElementById(errorMessageId);
    errorMessage.innerText = errorText;
};

const isEmpty = (value) => {
    return value === ""
}

const isEmail = (value) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) &&
    /^[a-zA-Z0-9._%+-]+$/.test(value.split('@')[0]);
}

const validate = () => {
    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    let isCorrect = true
    let err = !isEmail(email)
    setError("email-error", err ? "Некорректная почта!" : "")
    isCorrect &&= !err
    err = isEmpty(name)
    setError("name-error", err ? "Имя не должно быть пустым!" : "")
    isCorrect &&= !err
    err = isEmpty(message)
    setError("message-error", err ? "Сообщение не должно быть пустым!" : "")
    isCorrect &&= !err
    return isCorrect
}
