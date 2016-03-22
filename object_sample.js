/**
 * Cytonn Technologies
 *
 * @author: Ronnie Nyaga <rnyaga@cytonn.com>
 *
 * Project: js.app
 *
 */


//Method 1 to create an Object
var dog = {
    	legs: 4,
    	body: "hair",
    	sound: "bark",
    	getSoundMade: function() {
       		return this.sound;
    	},
     	getNumberOfLegs: function() {
      		return this.legs;
    	}
};
dog.legs;		//Returns 4
dog.getSoundMade();		//Executes method and returns "bark"
dog.getNumberOfLegs();		//Executes method and returns 4



//Method 2 to create an object
var fish = new Object();
fish.body = "scales";
fish.legs = 0;
fish.getNumberOfLegs = function(){
  return fish.legs;
};



//Method 3 to create an object
function Reptile(poisonous,legs,sound) {
	this.poisonous = poisonous;
	this.legs = legs;
  this.sound = sound;
	this.isPoisonous = function(){
		return this.poisonous;
  }
}


var poisonous = prompt("Is a snake poisonous? (true or false) :");
var legs = prompt("How many legs does a snake have? :");

var snake = new Reptile(poisonous,legs,"hiss");

document.write("Poisonous : " + snake.isPoisonous() + "\n\n");
document.write("Legs : " + snake.legs + "\n\n");
//snake.legs;				 //Returns value of property1
//snake.isPoisonous();				// Returns true
