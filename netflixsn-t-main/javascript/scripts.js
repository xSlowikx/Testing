$(document).ready(function(){
    
    //Filtro de busqueda sin terminar
    /* console.log("Entré"); */ //Entró, xd.
    $("#buscador").keyup(function(){
        /* console.log($(this).val()); */ //Funciona correctamente, escribe en consola el value del campo buscar.
        $("section.contenidos article,h2").hide()
        $("section.contenidos h2.resultados").slideDown();
        /* $("p:contains("+$(this).val()+")"); */
        $("a").filter("#"+$(this).val()).css('display','inline-block');
    });
    
    //FILTRO SERIES - NAV INDEX
    $("a.series").click(function(){
        console.log("Entre");
        if($("section.contenidos a:contains(.serie)")){
            $("section.contenidos a.serie").css('display','inline-block');
            $("section.contenidos a.pelicula").css('display','none');
        } else {
        }
    });

    //FILTRO PELICULAS - NAV INDEX
    $("a.peliculas").click(function(){
        console.log("Entre");
        if($("section.contenidos a:contains(.pelicula)")){
            $("section.contenidos a.pelicula").css('display','inline-block');
            $("section.contenidos a.serie").css('display','none');
        } else {
        }
    });
});