'use strict';

const e = require("express");

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(clickLikeBtn);
}

function clickLikeBtn() {
	e.preventDefault();
	ga('create', 'UA-190111028-1','auto');
	ga('send','event','like','click');
}