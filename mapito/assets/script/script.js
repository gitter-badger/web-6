$(document).ready(function(){
	 $("#play").mouseenter(function() {
        $('img',this).attr("src", "assets/img/play_h.svg");
     }).mouseleave(function() {
        $('img',this).attr("src", "assets/img/play.svg");
     });
});