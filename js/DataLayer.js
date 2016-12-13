/*
<script>
(function() {
    var xhr = new XMLHttpRequest();
    
	DomReady.ajaxSuccess(function( event, xhr, settings ) {
		dataLayer.push({
			'event': 'ajaxSuccess',
			'eventCategory': 'AJAX',
			'eventAction': settings.url,
			'eventLabel': xhr.responseText
		});
	});
    
    trafficscore.track.track(
    traffic_score_data.account_id,
    'SUBMITFORM',
    null,
    {form: fdata},
    true
  	);
}());
</script>
*/

<script>
(function($) {
	$(document).ajaxSuccess(function( event, xhr, settings ) {
		dataLayer.push({
			'event': 'ajaxSuccess',
			'eventCategory': 'AJAX',
			'eventAction': ajaxSettings.url,
			'eventLabel': xhr.responseText
		});
        
    trafficscore.track.track(
    traffic_score_data.account_id,
    'ajaxSuccess',
    null,
    {form: fdata},
    true
  	);
    
	});
})(jQuery);
</script>