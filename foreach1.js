/*
	For Each:
	Use the .forEach iterator to loop over the following array of foods and say you like them.
 */
 
var foods = ["pizza", "tacos", "ice cream"];

foods.forEach(function(type){
  console.log("I like "+type);
})

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"