function indexMainContentChange(e, target) {
    var targetId = e.target.id;
    var myLink = "../components/" + targetId + ".html";
    $('#main-content').empty();
    $('#main-content').load(myLink);
    changeFooterActive(e, target);
}

function changeFooterActive(e, target) {
    e.preventDefault();
    $('.footer-nav-ul li').removeClass('custom-nav-active');
    $(target).closest('li').addClass('custom-nav-active');
}