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


var dog = new Dog(4, 2,‘bark’);
dog.getNumberOfLegs();
dog.getSoundMade();
