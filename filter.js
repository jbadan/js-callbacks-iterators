
// Write code that uses the filter function, and the below isCool function to 
// return a list of people who are cool.


var people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];
var isCool = function(person) {
	return person.coolnessScore > 20;
}

var peopleAreCool = people.filter(isCool);

// for(var i = 0; i < peopleAreCool.length; i++){
// 	console.log(peopleAreCool[i].name+" is cool.")
// };

peopleAreCool.forEach(function(coolPerson){
	console.log(coolPerson.name+" is cool");
})


// Example results:
//
// Bob is cool
// Isolde is cool
