$(document).ready(function() {

	var html = '';
	for (var i = 1; i <= 50; i ++) {
		html += '<div class="shape-container--'+i+' shape-animation"><div class="random-shape"></div></div>';
	}
	  
	document.querySelector('.shape').innerHTML += html;
	
	var $allShapes = $("[class*='shape-container--']");
	});

setInterval (function() { $("#d").css("left", dirL); $("#d").css("top", dirR); moveDir(); } , 50)
const words = ["I'm  Dreamer.", "I'm  Doer" , "I'm a Developer"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 500);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 200);
	};
	loopDeleting();
};

typingEffect();







