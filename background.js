var isStreamOnline;

var browser = browser || chrome;

function checkStream() {
    getJSON(checkStreamUrl, function(data) {      
        
        console.log(typeof(isStreamOnline) !== 'undefined' && !isStreamOnline);
        
        if(data.stream === null) {
            isStreamOnline = false;
            browser.browserAction.setIcon({path:"icons/maho-off-38.png"});
        }
        else {
            browser.storage.local.get('mahoStartNotification', function(result){
                if(typeof(isStreamOnline) === 'undefined' && typeof(result.mahoStartNotification) !== 'undefined' && result.mahoStartNotification) {
                    // Stream has come online, show notification
                    notifyStreamStart(data.stream.channel.status);
                }
                else if(typeof(isStreamOnline) !== 'undefined' && !isStreamOnline) {
                    // Stream has come online, show notification
                    notifyStreamStart(data.stream.channel.status);
                }
                isStreamOnline = true;
                browser.browserAction.setIcon({path:"icons/maho-on-38.png"});
            });
        }        
    }, function(status) {
        console.warn('Something went wrong.', status);
    });
}

function init() {
    checkStream();

    // Check every 30 seconds if the stream is online
    setInterval(checkStream, 30000);
}

init();




