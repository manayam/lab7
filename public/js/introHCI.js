'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".likeBtn").click(sendToAnalytic);
}

function sendToAnalytic(event) {
	event.preventDefault();
	console.log("clicked like button");
	ga('create', 'UA-114585530-1', 'auto');
	ga("send", "event", 'like', 'click');
}