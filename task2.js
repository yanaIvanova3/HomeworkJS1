/**
 * 
 */
//Напишете JavaScript, който да връща броя на anchors (<а>) в HTML
//документ.
var as = document.getElementById('anchors').getElementsByTagName('a');
console.log(as.length);