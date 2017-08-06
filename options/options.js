$(function(){

    var browser = browser || chrome;

    function init() {
        
        browser.storage.local.get('mahoStartNotification', function(result) {
            console.log(result);
            $("#start_notification").prop('checked', result.mahoStartNotification);
        });

    }

    $('#submit').click(function() {
        browser.storage.local.set({
            mahoStartNotification: $("#start_notification").is(":checked")
        });
    });
    
    init();
});