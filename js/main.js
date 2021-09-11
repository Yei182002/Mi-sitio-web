$(document).ready(main);

var contador = 1;

function main() {
    $('.menu-bar').click(function() {
        if (contador == 1) {
            $('nav').animated({
            left: '0'
        });
        contador = 0;
    }
    else {
        $('nav').animated({
            left: '-100%'
        });
        contador = 1;
    }
});
$('.sub-menu').click(function() {
    $(this).children('.children').slideToggle();
  });
}
