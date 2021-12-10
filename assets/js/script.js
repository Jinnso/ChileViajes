$(function() {
    /*
   Crea un navbar de transparente a color 
    */
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('nav').addClass("fondo-navbar");
        } else {
            $('nav').removeClass("bg-transparent");
        }
    });


    /*
    Tiene como función hacer una animación al momento de hacer click en el menú del navbar
    */
    $("a").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var gato = this.hash;
            $("html, body").animate({
                scrollTop: $(gato).offset().top

            }, 900, function() {
                window.location.hash = gato;
            })
        }
    });

    /*
    Muestra un pequeño mensaje en el h3 ubicado en el footer
    */
    $('[data-toggle="tooltip"]').tooltip()

    /*
    Crea 3 pequeñas ventanas en los contenedores el ícono Font Awesome en la seccion Quienes Somos
    */
    $('[data-toggle="popover1"]').popover();
    $('[data-toggle="popover2"]').popover();
    $('[data-toggle="popover3"]').popover();
});