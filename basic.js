$(document).ready(function(){
/*    $('#btnUp').click(function(e){
	   $('html, body').animate({scrollTop: 0}, {duration:'slow'});
    });*/

    $(window).scroll(function() {
    	checkSecondBar();
	});
});

function checkSecondBar(){

	var scrolled = window.pageYOffset;// || document.documentElement.scrollTop;
	//scrollButton = $('#btnUp');
	secondBar = $('#second_bar');

	if(scrolled>299){
		secondBar.fadeIn(200);
		//scrollButton.fadeIn(200);
	} else {
		secondBar.fadeOut(200);
		//scrollButton.fadeOut(200);
	}

}
