const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let matchPassword = false;

function validateForm() {
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = 'Please fill out all required fields.';
        message.style.color = 'pink';
        messageContainer.style.borderColor = 'pink';
        return;
    } 

    if (password1El.value === password2El.value) {
        matchPassword = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';

    } else {
        matchPassword = false;
        message.textContent = 'Password does not match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    if (isValid && matchPassword) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }

}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    console.log(user);
}
function createForm (event) {
    event.preventDefault();
    validateForm();
    if (isValid && matchPassword) {
        storeFormData();
    }
}

form.addEventListener('submit', createForm);