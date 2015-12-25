/**
 * 
 */
//Напишете JavaScript, който да връща innerHTML на първия anchor в
//HTML документ
function getInnerHTMLOfFirstAnchor() {
	var firstA = document.getElementsByTagName('a')[0].innerHTML
	console.log(firstA);
}