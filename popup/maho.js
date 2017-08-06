$(function(){

    var browser = browser || chrome;
    
    function init() {
        getJSON(checkStreamUrl, function(data) {
            if(data.stream === null) {
                $('#stream_status').text('OFFLINE').removeClass('label-success').addClass('label-danger');
            }
            else {
                $('#stream_status').text('ONLINE').removeClass('label-danger').addClass('label-success');
                $('#stream_preview').attr("src",data.stream.preview.medium);
                $('#stream_title').text(data.stream.channel.status);
                $('#stream_game').text(data.stream.channel.game);                
                $('#go_to_twitch').text('-> Aller sur Twitch');
            }
        }, function(status) {
            console.warn('Something went wrong.', status);
        });
    
    }
    
    $('#go_to_twitch').click(function() {
        browser.tabs.create({ url: 'https://www.twitch.tv/maho_tv' });
    });

    init();
});