$(document).ready(function (){
  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
		if(this.hash == "#myCarousel"){
			return false;
		}
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[id=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - $("nav").height()
        }, 800);
        return false;
      }
    }
  });
});
});