// Observe changes to Today %
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

$(function(){
	// When asterick in total pop and ext dont wrap
	$("<style type='text/css'> .pop-ext-pill.asterisk{ width:50%;} .alerts-list-item {margin:0;padding:0;} .alerts-list-item>.icon-font {font-size:15px;top:0px;} .alerts-list-item>.trigger-info{display:none;}	</style>").appendTo("head");
	
	var phase1 = setInterval(correctTab, 1000);
	var phase2 = setInterval(myTimer, 1000);
	
	function correctTab() {
		// When everything is loaded
		if($("a[href='#/portfolioPage']").length>0 && $(".page-sidebar").length>0) {
			
			// Clear the timer
			clearInterval(phase1);
			
			// Make sure we are on the portfolio tab
			window.location = "#/portfolioPage";
			
			// Order the alerts-list-item
			var mylist = $('.alerts-list');
			var listitems = mylist.children('li').get();
			listitems.sort(function(a, b) {
			   return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
			})
			$.each(listitems, function(idx, itm) { mylist.append(itm); })
			
			// Remove the sidebar, make full screen, and remove uneeded buttons
			$(".dough-wrapper").css({margin:0,width:"100%"});
			window.dispatchEvent(new Event("resize"));
			$("a[href='#/homePage'],a[href='#/followPage'],a[href='#/journalPage'],a[href='#/tastytradePage']").remove();
		}
	}
	
	var on_off_pref = true;

    chrome.storage.onChanged.addListener(function (changes, namespace) {
        for (key in changes) {
            var storageChange = changes[key];
            on_off_pref = storageChange.newValue;
            /*console.log('Storage key "%s" in namespace "%s" changed. ' +
                'Old value was "%s", new value is "%s".',
                key,
                namespace,
                storageChange.oldValue,
                storageChange.newValue);*/
        }
    });
	
	// I like to have the days gainers on top and the days losers on bottom
	var observer = new MutationObserver(function(mutations, observer) {
		 //console.log(on_off_pref);
		 if (on_off_pref=== 'y') {
			$( ".portfolio-page-table-header-cell.portfolio-page-table-cell-day-gain-change-percentage" ).trigger( "click" ).trigger( "click" );
		 }
	});
	
	function myTimer() {
		// So wait until the total is shown
		if ($(".portfolio-page-account-total").length>0) {
			
			// Stop the timer
			clearInterval(phase2);
			
			// Bind to changes
			observer.observe($(".portfolio-page-account-total")[0], {
			  subtree: true,
			  childList: true,
			  characterData: true
			});
		}
	}
});
