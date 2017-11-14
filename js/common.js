$(document).ready(function () {
    $.get('../components/footer.html', function (data) {
        $('#footer').html(data);
    });
    $.get('../components/m-main-footer.html', function (data) {
        $('#m-main-footer').html(data);
    });
});

function changeFooterActive(e, target) {
    e.preventDefault();
    $('.footer-nav-ul li').removeClass('custom-nav-active');
    $(target).closest('li').addClass('custom-nav-active');
}


function backToPrevious() {
    window.history.go(-1);
    return false;
}

function logInSubmit() {
    window.location.href = "../views/index.html";
    return false;
}