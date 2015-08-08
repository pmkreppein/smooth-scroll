// Easy Smooth Scroll jQuery plugin for scrolling between two elements on 
// the same page.

// Simply add the class .smooth to any link you want to enable this plugin for,
// and make the target of the a element the ID on the page you want to scroll for.

// Example:

// <a class="smooth" href="#contact-us">Contact Us</a>

// -Will scroll smoothly too-

// <div id="contact-us">
// ...
// </div>

// Feel free to remove the console.log statements, they are just for my personal
// error checking, and to see when the script fires.

// Copyright (c) 2015 Peter M Kreppein
// Licensed under MIT License (http://opensource.org/licenses/MIT for more.)


console.log("Smooth Scroll Initialized");
$(".smooth").click(function(){
	event.preventDefault();
	//Get URL of link
	var fullUrl = this.href;
	//split url into two parts, with # as the denoting character
	var parts = fullUrl.split("#");
	//Get just the Anchor ID
	var target = parts[1];
	//Get offset as object, grab only top offset
	var targetOffset = $("#" + target).offset();
	var targetTop = targetOffset.top;
	//Animate The page between links
	$("html, body").animate({scrollTop: targetTop}, 1700);
	console.log("Scroooooooooooolllll!");
});
