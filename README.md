# jquery-tastyworksmod
Cleans up the trade.tastyworks.com website using a simple bookmarklet


[test](javascript:(function()%7B%24(".page-sidebar").remove();%24(".dough-wrapper").css(%7Bmargin%3A0%2Cwidth%3A"100%25"%7D);window.dispatchEvent(new Event("resize"));%24("a[href='#/homePage'],a[href='#/followPage'],a[href='#/journalPage'],a[href='#/tastytradePage']").remove();%7D)())
