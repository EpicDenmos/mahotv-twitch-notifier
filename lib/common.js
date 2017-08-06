var STREAMER_ID = 'MahO_Tv';
var checkStreamUrl = 'https://api.twitch.tv/kraken/streams/'+STREAMER_ID+'?client_id=4vvo62clzhydthffekuubxdubj33t5';

var browser = browser || chrome;

function getJSON(url, successHandler, errorHandler) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.onreadystatechange = function() {
        var status;
        var data;
        if (xhr.readyState == 4) { // `DONE`
            status = xhr.status;
            if (status == 200) {
                data = JSON.parse(xhr.responseText);
                successHandler && successHandler(data);
            } else {
                errorHandler && errorHandler(status, xhr.responseText);
            }
        }
    };
    xhr.send();
};

function notifyStreamStart(streamTitle) {

    createNotification(streamTitle);

    // // Check if notifications are supported
    // if (!("Notification" in window)) {
    //     console.log('Notification not supported');
    // }
    // // Check if notifications are allowed
    // else if (Notification.permission === "granted") {
    //     console.log('Notification allowed');

    //     // Create notification
    //     createNotification(streamTitle);
    // }
    // // Otherwise ask for permission
    // else if (Notification.permission !== 'denied') {
    //     console.log('Notification denied : ' + Notification.permission);
        
    //     Notification.requestPermission(function (permission) {
    //         if(!('permission' in Notification)) {
    //             console.log('Notification not allowed');
    //             Notification.permission = permission;
    //         }
    //         if (permission === "granted") {
    //             console.log('Notification not granted');
    //             createNotification(streamTitle);
    //         }
    //     });
    // }
}


//function createNotification(streamTitle) {
//    var options = {};
//    options.icon = 'icons/maho.jpeg';
//    options.body = streamTitle;
//    new Notification("Le stream de MahO_Tv commence !!!", options);
//}

function createNotification(streamTitle) {
    var options = {};
    options.type = "basic";
    options.iconUrl = 'icons/maho.jpeg';
    options.message = streamTitle;
    options.title = "Le stream de MahO_Tv commence !!!";
    browser.notifications.create("Le stream de MahO_Tv commence !!!", options);
}

var isFirefox = typeof InstallTrigger !== 'undefined';