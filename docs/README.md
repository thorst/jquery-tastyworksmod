Cleans up the trade.tastyworks.com website using a simple bookmarklet.
1. Removes the left most side bar
1. Removes the Home, Follow, Journal, and TastyTrade links
1. Makes the screen full  width

To save either:
1. Drag the link below to your bookmarks bar
2. Right-click > Copy Link Address, then create a new bookmark, paste the link code in, and save

To use:
1. Log in to tastyworks
1. Click the bookmarklet

[Tastyworks Mod](javascript:(function()%7B%24(".page-sidebar").remove();%24(".dough-wrapper").css(%7Bmargin%3A0%2Cwidth%3A"100%25"%7D);window.dispatchEvent(new Event("resize"));%24("a[href='#/homePage'],a[href='#/followPage'],a[href='#/journalPage'],a[href='#/tastytradePage']").remove();%7D)())


You can see the very simple code by looking at the code.js file in the repo. If you want to remove pieces of my code simply edit the file and turn it into a bookmarklet yourself using the following website.

[https://mrcoles.com/bookmarklet/](https://mrcoles.com/bookmarklet/)

Repo:
[https://github.com/thorst/jquery-tastyworksmod](https://github.com/thorst/jquery-tastyworksmod)
