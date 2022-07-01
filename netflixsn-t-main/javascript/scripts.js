$(document).ready(function(){
    /* console.log("Entré"); */ //Entró, xd.
    $("#buscador").keyup(function(){
        /* console.log($(this).val()); */ //Funciona correctamente, escribe en consola el value del campo buscar.
        $("section.contenidos article,h2").hide()
        $("section.contenidos h2.resultados").slideDown();
        /* $("p:contains("+$(this).val()+")"); */
        $("article").filter($(this).val()).show();
    });
});