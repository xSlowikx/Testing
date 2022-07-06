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
    
    //FILTRO SERIES - NAV INDEX -- FUNCIONANDO
    $("a.series").click(function(){
        console.log("Entre");
            $("section.contenidos a.serie").css('display','inline-block');
            $("section.contenidos a.pelicula").css('display','none');
    });

    //FILTRO PELICULAS - NAV INDEX -- FUNCIONANDO
    $("a.peliculas #genero").click(function(){
        console.log("Entre");
            $("section.contenidos a.pelicula").css('display','inline-block');
            $("section.contenidos a.serie").css('display','none');
    });

    //FILTRO PELICULAS & SERIES POR GENERO -- FUNCIONANDO, INTENTO DE FILTRAR POR CATEGORIA (PELICULA O SERIE) AL MISMO TIEMPO SIN EXITO.
    $("#genero").change(function(){
        $("a.pelicula,a.serie").hide();
        switch($(this).val()){
            case "0":
                $("a.pelicula,a.serie").show();
                $("a.home").hide();
                break;
            case "1":
                $("a.drama").show();
                break
            case "2":
                $("a.comedia").show();
                break;
            case "3":
                $("a.accion").show();
                break;
            case "4":
                $("a.historia").show();
                break;
            case "5":
                $("a.aventura").show();
                break;
            default:
                break;
        }
    });
});