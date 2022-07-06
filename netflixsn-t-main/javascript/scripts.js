$(document).ready(function () {
  //MENU HAMBURGUESA
  $(".burguer_icon").click(function () {
    if ($("header.index ul").filter("escondido")) {
      $("header.index ul").addClass("desplegado");
      $("header.index ul").removeClass("escondido");
      $("header.index ul").slideDown();
    } else if($("header.index ul").filter("desplegado")){
      $("header.index ul").addClass("escondido");
      $("header.index ul").removeClass("desplegado");
      $("header.index ul").fadeOut();
      
    }
  });
  /* console.log("Entré"); */ //Entró, xd.
  $("#buscador").keyup(function () {
    /* console.log($(this).val()); */ //Funciona correctamente, escribe en consola el value del campo buscar.
    var value = $(this).val().toLowerCase();
    if ($(this).val().length > 0) {
      $("section.contenidos a,h2").hide();
      $("section.contenidos h2.resultados").slideDown();
      $("section.contenidos a").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1); // FILTRO DE BUSQUEDA FUNCIONAL
      });
    } else {
      $("section.contenidos h2.resultados").fadeOut();
      $("section.contenidos a,h2").show();
      $("a.home").hide();
    }
    /* $("p:contains("+$(this).val()+")"); */
  });

  //FILTRO SERIES - NAV INDEX -- FUNCIONANDO
  $("a.series").click(function () {
    console.log("Entre");
    $("section.contenidos a.serie").css("display", "inline-block");
    $("section.contenidos a.pelicula").css("display", "none");
  });

  //FILTRO PELICULAS - NAV INDEX -- FUNCIONANDO
  $("a.peliculas #genero").click(function () {
    console.log("Entre");
    $("section.contenidos a.pelicula").css("display", "inline-block");
    $("section.contenidos a.serie").css("display", "none");
  });

  //FILTRO PELICULAS & SERIES POR GENERO -- FUNCIONANDO, INTENTO DE FILTRAR POR CATEGORIA (PELICULA O SERIE) AL MISMO TIEMPO: SIN EXITO.
  $("#genero").change(function () {
    $("a.pelicula,a.serie").hide();
    switch ($(this).val()) {
      case "0":
        $("a.pelicula,a.serie").show();
        $("a.home").hide();
        break;
      case "1":
        $("a.drama").show();
        break;
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

  //FILTRO TEMPORADAS Y CAPITULOS (SERIES)
  $("#temporada").change(function () {
    console.log("Estoy funcionando");
    /* $("label[for='capitulo']").hide(); */
    $("select[name='capitulo']").hide();
    switch ($(this).val()) {
      case "0":
        $("select[name='capitulo']").hide();
        break;
      case "1":
        /* $("label[for='capitulo']").show(); */
        $("#capitulos_temp1").show();
        break;
      case "2":
        /* $("label[for='capitulo']").show(); */
        $("#capitulos_temp2").show();
        break;
      case "3":
        /* $("label[for='capitulo']").show(); */
        $("#capitulos_temp3").show();
        break;
      case "4":
        /* $("label[for='capitulo']").show(); */
        $("#capitulos_temp4").show();
        break;
      case "5":
        /* $("label[for='capitulo']").show(); */
        $("#capitulos_temp5").show();
        break;
      case "6":
        /* $("label[for='capitulo']").show(); */
        $("#capitulos_temp6").show();
        break;
      default:
        break;
    }
  });

  //SLIDER_PELICULAS y SERIES
  $("section.similares").slick({
    infinite: true,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 427,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  });
});
