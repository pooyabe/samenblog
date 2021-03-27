$(document).ready(function (){
$(function(){
$(".browser-address").typed({
            strings: ["http://yourblog.samenblog.com", "youremail@samenblog.com"],
            typeSpeed: 50,
            // backspacing speed
            backSpeed: 10,
            // shuffle the strings
            // time before backspacing
            backDelay: 1000,
            // loop
            loop: true,
			showCursor: false
        });
});
$(function(){
        wow = new WOW(
        {
         boxClass:     'wow',      // default
		  animateClass: 'animated', // default
		  offset:       0,          // default
		  mobile:       false,       // default
		  live:         true        // default
		}
		)
		wow.init();
});
//Text Quote
var this_html = $('#new-posts .container .row .p').text();
var this_text = this_html.slice(0, 250);
var high_lighted_text = this_html.slice(250, 260);
$('#new-posts .container .row .p').html('<i class="fa fa-quote-right" aria-hidden="true"></i>' + this_text + '<span class="highlighted-text">' + high_lighted_text +  '</span> <i class="fa fa-quote-left" aria-hidden="true"></i>');
});