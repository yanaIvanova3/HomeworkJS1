/**
 * 
 */
function mouseOver() {
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].onmouseover = maximize;
		images[i].onmouseout = minimize;
	}
}
function maximize() {
	this.className = "big";
}
function minimize(){
	this.className = "small";
}

