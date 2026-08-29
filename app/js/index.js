function openLogin(){
    document
        .getElementById("loginModal")
        .classList.remove("hidden");
}

function openRegister(){
    document
        .getElementById("registerModal")
        .classList.remove("hidden");
}

function register(){
    alert("Đăng ký thành công!");
    closeModal();
    openLogin();
}

function login(){
    alert("Đăng nhập thành công!");
    window.location.href = "home.html";
}

function closeModal(){
    document
        .getElementById("loginModal")
        .classList.add("hidden");

    document
        .getElementById("registerModal")
        .classList.add("hidden");
}

function switchToRegister(){
    document
        .getElementById("loginModal")
        .classList.add("hidden");

    document
        .getElementById("registerModal")
        .classList.remove("hidden");
}

function switchToLogin(){
    document
        .getElementById("registerModal")
        .classList.add("hidden");

    document
        .getElementById("loginModal")
        .classList.remove("hidden");
}