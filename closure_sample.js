/**
 * Cytonn Technologies
 *
 * @author: Ronnie Nyaga <rnyaga@cytonn.com>
 *
 * Project: js.app
 *
 */

 // In this example, an array is created where departments can be appended to it
var addDepartment = (function(){
	var departments = new Array();
  return function(dpt){
  	departments.push(dpt);
  return departments;
  }
})();
