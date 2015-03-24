$(document).ready(function() {
	$('.write-content textarea').markItUp(mySettings).livequery(function() {
		if ( !$(this).hasClass("markItUpEditor") ) {
		    $(this).markItUp(mySettings);
                }
	});
});