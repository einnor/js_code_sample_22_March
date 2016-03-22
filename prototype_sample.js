/**
 * Cytonn Technologies
 *
 * @author: Ronnie Nyaga <rnyaga@cytonn.com>
 *
 * Project: js.app
 *
 */

 function Reptile(poisonous,legs,sound) {
 	this.poisonous = poisonous;
 	this.legs = legs;
   this.sound = sound;
 	this.isPoisonous = function(){
 		return this.poisonous;
   }
 }

var skin = prompt("What is the body covering of a reptile?");

 Reptile.prototype.skin = skin;
 Reptile.prototype.bodyTemp = "Cold";

 Reptile.prototype.getBodyTemperature = function(){
   return this.bodyTemp;
 }

 document.write("The body temperature of a reptile is :" + Reptile.prototype.getBodyTemperature())
