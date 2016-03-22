/**
 * Cytonn Technologies
 *
 * @author: Ronnie Nyaga <rnyaga@cytonn.com>
 *
 * Project: js.app
 *
 */



// Function that takes length and width, and returns the area of a rectangle
function areaOfRectangle(length,width){
	return length * width;
}

var length = prompt('Enter length: ');
var width = prompt('Enter width: ');
alert('Area: ' + areaOfRectangle(length,width));
