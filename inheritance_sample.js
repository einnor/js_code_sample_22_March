/**
 * Cytonn Technologies
 *
 * @author: Ronnie Nyaga <rnyaga@cytonn.com>
 *
 * Project: js.app
 *
 */


var Animal = function (legs,eyes){
	this.legs = legs;
  this.eyes = eyes;
  this.getNumberOfLegs = function(){ return this.legs; }
}

//Dog inherits from the class Animal
function Dog (legs,eyes,sound){
	Animal.call(this,legs,eyes);
	this.sound = sound;
	this.getSoundMade = function(){ return this.sound; }
}

var legs = prompt("How many legs does a dog have?");
var eyes = prompt("How many eyes does a dog have?");

var dog = new Dog(legs, eyes,'bark');
document.write("Number of legs: " + dog.getNumberOfLegs() + "\n\n");
document.write("Number of eyes: " + dog.getSoundMade() + "\n\n");
//dog.getNumberOfLegs();
//dog.getSoundMade();
