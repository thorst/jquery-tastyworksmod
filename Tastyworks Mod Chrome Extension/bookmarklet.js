
$(function(){
var myVar = setInterval(	myTimer, 1000);

function myTimer() {
if($(".page-sidebar").length>0) {
	$(".page-sidebar").remove();
	$(".dough-wrapper").css({margin:0,width:"100%"});
	window.dispatchEvent(new Event("resize"));
	$("a[href='#/homePage'],a[href='#/followPage'],a[href='#/journalPage'],a[href='#/tastytradePage']").remove();
	clearInterval(myVar);
}
}

});
