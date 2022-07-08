$(document).ready(function () {

  //LOCALSTORAGE DEL INPUT DE LOGIN
  $("input#username_login").keyup(function(){
    var userNameStoraged = $("#username_login").val();
    localStorage.setItem("Username",userNameStoraged);
  });


  var regexText = /^[a-zA-Z\s]+$/;
  var regexEmail = /^[a-zA-Z0-9._.-]+\@[a-zA-Z0-9._.-]+\.[a-zA-Z]+$/
  var regexUsername = /^[a-zA-Z0-9]+$/;
  var regexPassword = /^(?=\w*\d{2})(?=\w*[a-zA-Z])\S{8}$/;
  var regexCardKey = /^[1-9]{3}$/;
  var regexCardNumber = /^[0-9]{16,19}$/;
  var error = false;
  
  /* if(($("#nombre").val().length < 1) && 
  ($("#nombre").val().length < 1) && 
  ($("#nombre").val().length < 1) && 
  ($("#nombre").val().length < 1) && 
  ($("#nombre").val().length < 1) && 
  ($("#nombre").val().length < 1) && 
  ($("#nombre").val().length < 1) && 
  ($("#nombre").val().length < 1)){

    $("#input_submit").css('background-color','grey');
  } else{
    $("#input_submit").css('background-color','green');
  } */

  $("#submit_valido").click(function(e){
    var mensajeError = "";
    /* $("#mensajes_error").empty(); */
    //Validacion de input "Nombre"
    if(regexText.test($("input#nombre").val())){
      console.log("El nombre esta bien");
    } else {
      console.log("El nombre esta mal");
      error = true;
      mensajeError += "<p>* El nombre unicamente acepta letras</p>";
      /* $("#mensajes_error").empty(); */
      /* $("#mensajes_error").append(mensajeError); */
    }

    //Validacion de input "Apellido"
    if(regexText.test($("input#apellido").val())){
      console.log("El apellido esta bien");
    } else {
      console.log("El apellido esta mal");
      error = true;
      mensajeError += "<p>* El apellido unicamente acepta letras</p>";
      /* $("#mensajes_error").empty(); */
      /* $("#mensajes_error").append(mensajeError); */
    }

    //Validacion de input "Mail"
    if(regexEmail.test($("input#mail").val())){
      console.log("El mail esta bien");
    } else {
      console.log("El mail esta mal");
      error = true;
      mensajeError += "<p>* Formato de eMail incorrecto</p>";
      /* $("#mensajes_error").empty(); */
      /* $("#mensajes_error").append(mensajeError); */
    }

    //Validacion de input "Usuario"
    if(regexUsername.test($("input#usuario").val())){
      console.log("El usuario esta bien");
    } else {
      console.log("El usuario esta mal");
      error = true;
      mensajeError += "<p>* Nombre de usuario solo acepta letras y numeros</p>";
      /* $("#mensajes_error").empty(); */
      /* $("#mensajes_error").append(mensajeError); */
    }

    //Validacion input "Contraseña"
    if(regexPassword.test($("input#pass0").val())){
      console.log("La contraseña esta bien");
    } else {
      console.log("La contraseña esta mal");
      error = true;
      mensajeError += "<p>* 8 caracteres exactos para la contraseña</p>";
      /* $("#mensajes_error").empty(); */
      /* $("#mensajes_error").append(mensajeError); */
    }

    //Validacion input "Repetir contraseña"
    if($("input#pass0").val() == $("input#pass1").val()){
      console.log("Las contraseñas coinciden");
    } else {
      console.log("Las contraseñas no coinciden");
      error = true;
      mensajeError += "<p>* Las contraseñas no coinciden</p>";
      /* $("#mensajes_error").empty(); */
      /* $("#mensajes_error").append(mensajeError); */
    };

    //Validacion codigo de tarjeta
    if(regexCardKey.test($("input#input_cod").val())){
      console.log("El codigo de la tarjeta esta bien");
    } else if($("input#input_cod").val() == "000"){
      console.log("El codigo de la tarjeta esta mal");
      error = true;
      mensajeError += "<p>* El codigo de la tarjeta NO PUEDE SER 000</p>";
      /* $("#mensajes_error").empty(); */
      /* $("#mensajes_error").append(mensajeError); */
    } else {
      console.log("El codigo de la tarjeta esta mal");
      error = true;
      mensajeError += "<p>* El codigo de la tarjeta debe ser de 3 digitos y no contener al cero</p>";
      /* $("#mensajes_error").empty(); */
      /* $("#mensajes_error").append(mensajeError); */
    }

    //Validacion numero de la tarjeta
    if(regexCardNumber.test($("input#input_num").val())){
      console.log("El numero de la tarjeta está bien");
    } else {
      console.log("El numero de la tarjeta esta mal");
      error = true;
      mensajeError += "<p>* El numero de la tarjeta es incorrecto</p>";
      /* $("#mensajes_error").empty(); */
      /* $("#mensajes_error").append(mensajeError); */
    }

    if(error){
      e.preventDefault();
      $("#mensajes_error").empty();
      $("#mensajes_error").append(mensajeError);
    } else{
      location.href = "login.html";
    }
  });



  //MENU HAMBURGUESA
  $(".burguer_icon").click(function () {
    if ($("header.index ul").is(":visible")){
      $("header.index ul").slideUp();
    } else {
      $("header.index ul").slideDown();
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
  $("a.peliculas").click(function(){
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
