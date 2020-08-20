
// Navbar
$(window).scroll(function(){
    if ($(".navbar").offset().top > 100){
        $(".navbar").addClass("navbar-scroll");
    }
    else {
        $(".navbar").removeClass("navbar-scroll");
    }
});
$('#show-empresas').on('shown.bs.collapse', function () {
	document.getElementById('show-more').innerHTML='<div class="chevron-an"><i class="fas fa-chevron-up fa-lg"></i></div>Show less'
})

$('#show-empresas').on('hidden.bs.collapse', function () {
	document.getElementById('show-more').innerHTML='Show more<div class="chevron-an"><i class="fas fa-chevron-down fa-lg"></i></div>'
})

// Video Play
$("#videoModal").on("show.bs.modal", function() {
	document.getElementById('innerVideo').innerHTML='<iframe src="https://player.vimeo.com/video/422376712?autoplay=1&title=0&amp;byline=0&amp;portrait=0&amp;color=1480ff&amp;playsinline=0&amp;autopause=0&amp;controls=0&amp;app_id=122963" allow="autoplay; fullscreen" allowfullscreen="" title="Welcome to apify" data-ready="true" frameborder="0"></iframe>'
});
$("#videoModal").on("hidden.bs.modal", function() {
	document.getElementById('innerVideo').innerHTML=''
});