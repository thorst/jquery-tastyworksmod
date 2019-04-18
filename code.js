$(".page-sidebar").remove();                      // Remove sidebar
$(".dough-wrapper").css({margin:0,width:"100%"}); // Make full width
window.dispatchEvent(new Event("resize"));        // Trigger window resize event
// Remove superfluous links
$("a[href='#/homePage'],a[href='#/followPage'],a[href='#/journalPage'],a[href='#/tastytradePage']").remove();
