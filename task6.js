/**
 * 
 */
var images = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg"];

function randomImage(images, path) {
    path = path || 'images/';
    var randomNum = Math.floor( Math.random() * images.length );
    var imageNum = images[randomNum];
    var image = '<img src="' + path + imageNum + '" alt = "">';
    document.write(image); 
    document.close();
}