$(document).ready(function() {
    $(document).delegate('#open-menu-icon', "click", function() {
        $('.nav-menu').slideToggle(350);
    });
});