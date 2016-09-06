 $(document).ready(function () {
   $('body').css('width', '99%');
   $('#wrapper').tubular({videoId: 'ab0TSkLe-E0'}); // where idOfYourVideo is the YouTube ID.
    function reset () {
    $("#toggleCSS").attr("href", "js/alertify.js-0.3.11/themes/alertify.default.css");
     /* alertify.set({
            labels : {
                ok     : "OK",
                cancel : "Cancel"
            },
            delay : 2000,
            buttonReverse : false,
            buttonFocus   : "ok"
        });*/
    }

    // ==============================
    // Standard Dialogs
    alertify.success("Welcome!");

    $('.bxslider').bxSlider();
});