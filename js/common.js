$(document).ready(function () {
    $.get('../components/footer.html', function (data) {
        $('#footer').html(data);
    });
    $.get('../components/m-main-footer.html', function (data) {
        $('#m-main-footer').html(data);
    });
    $.get('../components/header.html', function (data) {
        $('#header').html(data);
    });
});

function backToPrevious() {
    window.history.go(-1);
    return false;
}

function logInSubmit() {
    window.location.href = "../views/index.html";
    return false;
}

function backToLogIn() {
    window.location.href = "../views/log-in.html";
    return false;
}