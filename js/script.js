// get the curent year automatically

$('.year').text(new Date().getFullYear());

// to get current location
$('.body').scrollspy({
    target: '#mainNavbar',
  });

//Smooth Scrolling

$('#mainNavbar a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate({
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });