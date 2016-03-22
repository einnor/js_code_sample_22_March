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

 Reptile.prototype.skin = "Scales";
 Reptile.prototype.bodyTemp = "Cold";

 Reptile.prototype.getBodyTemperature = function(){
   return this.bodyTemp;
 }
