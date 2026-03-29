document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let resultMessage = document.getElementById("resultMessage");
    emailError.textContent = "";
    passwordError.textContent = "";
    resultMessage.textContent = "";
    let valid = true;
    if (email === "") {
        emailError.textContent = "Email is required";
        valid = false;
    }
    if (password === "") {
        passwordError.textContent = "Password is required";
        valid = false;
    }
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email !== "" && !pattern.test(email)) {
        emailError.textContent = "Invalid email format";
        valid = false;
    }
    if (!valid) return;
    let correctEmail = "admin@gmail.com";
    let correctPassword = "1234";
    if (email === correctEmail && password === correctPassword) {
        resultMessage.style.color = "green";
        resultMessage.textContent = "Login Success ✅";
    } else {
        resultMessage.style.color = "red";
        resultMessage.textContent = "Invalid Credentials ❌";
    }
});