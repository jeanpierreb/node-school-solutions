// 1. Introduction
// console.log('hello');

// 2. Variables
// let example = 'some string';
// console.log(example);

// 3. Strings
//let someString='this is a string'
//console.log(someString)

// 4. String length
// let example = 'example string'
// console.log(example.length)

// 5. String replace
// let pizza = 'pizza is alright'
// pizza = pizza.replace('alright', 'wonderful')
// console.log(pizza);

// 6. Numbers
// var n = 123456789
// console.log(n);

// 7. Rouding
// var roundUp =1.5
// console.log(Math.round(roundUp));

// 8. Number to String
// var n = 128
// console.log(n.toString());

// 9. If statements
// let fruit = 'orange'
//
// if (fruit.length > 5) {
// 	console.log('The fruit name has more than five characters.');
// } else {
// 	console.log('The fruit name has five characters or less.');
// }

// 10. For Loops
// let n = 0
// let limit = 10
//
// for (let i = 0; i < limit; i++) {
// 	n += i
// }
//
// console.log(n);

// 11. Arrays
// let pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni']
// console.log(pizzaToppings);

// 12. Array filtering
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let filtered = numbers.filter(num => num % 2 === 0)
// console.log(filtered);

// 13. ACCESSING ARRAY VALUES
// let food = ['apple', 'pizza', 'pear']
// console.log(food[1]);

// 14. LOOPING THROUGH ARRAYS
// let pets = ['cat', 'dog', 'rat']
// pets = pets.map(i => i + 's')
// console.log(pets);

// 15. Objects
// let pizza = {
// 	toppings: ['cheese', 'sauce', 'pepperoni'],
// 	crust: 'deep dish',
// 	serves: 2
// }
// console.log(pizza);

// 16. Object properties
// let food = {
// 	types: 'only pizza'
// }
//
// console.log(food.types);

// 17. Functions
// let eat = (food) => `${food} tasted really good.`
// console.log(eat('bananas'));

// 18. Function arguments
// let math = (x, y, z) => y * z + x
// console.log(math(53,61,67));

// 19. Scope
var a = 1, b = 2, c = 3;

(function firstFunction(){
		var b = 5, c = 6;

		(function secondFunction(){
				var b = 8;
				console.log("a: "+a+", b: "+b+", c: "+c);
				(function thirdFunction(){
						var a = 7, c = 9;

						(function fourthFunction(){
								var a = 1, c = 8;

						})();
				})();
		})();
	})();
