(function($) {
    $(document).ajaxSuccess(function(event, xhr, settings) {
        dataLayer.push({
            'event': 'ajaxSuccess',
            'eventCategory': 'AJAX',
            'eventAction': ajaxSettings.url,
            'eventLabel': xhr.responseText
        });

        score_event.track.track(
            score_event_data.account_id,
            'ajaxSuccess',
            null, { form: fdata },
            true
        );

    })
})(jQuery);