const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];
    if (name.value === '' || name.value == null) {
        messages.push('Name is required');
    }

    if (password.value.length <= 7) {
        messages.push('Password must be longer than 8 characters');
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters');
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password')
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = messages.join(', ')
    }

})