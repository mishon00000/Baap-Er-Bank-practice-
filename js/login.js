document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email === 'muhtakim@gmail.com' && password === 'mishon') {
        window.location.href = 'bank.html';
    }

    else {
        alert ('Your password or email is wrong!! Please try again')
    }
})
