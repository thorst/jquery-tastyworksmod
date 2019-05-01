function saveChanges() {
    // Get a value.
    if ($('#autosortimg').is(':hidden')) {
        localStorage.mydata = 'n';
    } else {
        localStorage.mydata = 'y';
    }
    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({
        'value': localStorage.mydata
    }, function () {

    });
}

$(document).ready(function () {
    if (localStorage.getItem('mydata')) {
        if (localStorage.mydata == 'n') {
            $('#autosortimg').hide();
        } else {
           $('#autosortimg').show();
        }
    } else {
        if ($('#autosortimg').is(':hidden')) {
            localStorage.setItem('mydata', 'n');
        } else {
            localStorage.setItem('mydata', 'y');
        }
    }

    $('#autosort').click(function () {
		$('#autosortimg').toggle();
        saveChanges();
    });

});
