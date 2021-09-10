$(document).ready(main);

var contador = 0;

function main() {
    $('menu-bar').click(function() {
        if (contador == 0) {
            $('nav').animated({
            left: '0'
        });
        contador = 1;
    }
    else {
        $('nav').animated({
            left: '-100%'
        });
        contador = 0;
    }
});
$('.sub-menu').click(function() {
    $(this).children('.children').slideToggle();
  });
}
