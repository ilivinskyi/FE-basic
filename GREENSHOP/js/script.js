function showModal() {
    document.getElementById('modal').style.display='block'
}

function closeModal() {
    document.getElementById('modal').style.display='none'
}

function signupWithGoogle() {
    alert("Signup with google button clicked")
}

function signupWithFacebook() {
    alert("Signup with facebook button clicked")
}

function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.src = 'img/eye-open.svg';
    } else {
        passwordField.type = 'password';
        eyeIcon.src = 'img/eye-closed.svg';
    }
}