/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut(2000);

})



$(document).ready(function(){



	$(".contactenos, .contactenos-menu").click(
		function(){
	$("#cuadro-contactos").toggle("low");
	}
	);

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 1200,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 550){
        	$(".contactenos").show();
            $("#navigation").css("background-color","rgba(34, 113, 179, 0.8)");
        }else{

        	$(".contactenos, #cuadro-contactos").hide();
            $("#navigation").css("background-color","rgba(10, 10, 10, 0.2)");
        }
    });
	
	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

	var slideHeight = $(window).height();
	
	$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);
	});
	
	
	/* ========================================================================= */
	/*	Portfolio Filtering
	/* ========================================================================= */	
	
	
    // portfolio filtering

    $(".project-wrapper").mixItUp();
	
	
	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
	});
	
	/* ========================================================================= */
	/*	Parallax
	/* ========================================================================= */	
	
	$('#facts').parallax("50%", 0.3);
	
	/* ========================================================================= */
	/*	Timer count
	/* ========================================================================= */

	"use strict";
    $(".number-counters").appear(function () {
        $(".number-counters [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });
	
	/* ========================================================================= */
	/*	Back to Top
	/* ========================================================================= */
	
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });
	
});

//enviar contacto
$('#enviar-contacto').click(function(){
	var nombre=$("#fname").val();
	var correo=$("#email").val();
	var telefono=$("#phone").val();
	var mensaje=$("#message").val();
  	var url = "enviar.php";

      $.ajax({

           type: "POST",

           url: url,

           data: {nombre:nombre, correo:correo, 
           		  telefono:telefono, mensaje:mensaje}, // Adjuntar los campos del formulario enviado.

           success: function(data)

           {
               
               $("#respuesta-mensaje").html(data)
               $("#fname").val("");
	       $("#email").val("");
		$("#phone").val("");
		$("#message").val("");

           }

  
   });

})


// ==========  START GOOGLE MAP ========== //
/*function initialize() {
    var myLatLng = new google.maps.LatLng(22.402789, 91.822156);

    var mapOptions = {
        zoom: 14,
        center: myLatLng,
        disableDefaultUI: true,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
        }
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);


    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: 'img/location-icon.png',
        title: '',
    });

}

google.maps.event.addDomListener(window, "load", initialize);*/
// ========== END GOOGLE MAP ========== //