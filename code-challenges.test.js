// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("nameJob", () => {
	it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
		const people = [
			{ name: "ford prefect", occupation: "a hitchhiker" },
			{ name: "zaphod beeblebrox", occupation: "president of the galaxy" },
			{ name: "arthur dent", occupation: "a radio employee" },
		]
		// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
		expect(nameJob(people)).toEqual([
			"Ford Prefect is a hitchhiker.",
			"Zaphod Beeblebrox is president of the galaxy.",
			"Arthur Dent is a radio employee.",
		])
	})
})

// FAILED:  ReferenceError: nameJob is not defined

// b) Create the function that makes the test pass.

// Pseudo

// Input: array of objects
// Output: array with a sentence about each person with their name capitalized.
// Expected: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// Process

// Declare a function called nameJob with the paramater array
// My first thought is to use .map() to iterate through the object and return only the values of each object
// Use the keys { name, occupation } to return the values
// For name we need to split(" ") into two seperate words ex.) "ford", "perfect"
// Then map again to go through the name "strings" and select character at the 0 index so we can use toUpperCase
// Once the name strings are capitalized we can remove the original lowercase character with slice at the 1st position and it will be replaced by the capitalized value followed by the rest of the word.
// Then we join them back in to one string.
// I can use the + sign to include the string " is " the occupation value of the object, and finally the period "."
// If I return the entire chain I should see the desired outcome

// Function

const nameJob = (array) => {
	return array.map(
		({ name, occupation }) =>
			name
				.split(" ")
				.map((string) => string.charAt(0).toUpperCase() + string.slice(1))
				.join(" ") +
			" is " +
			occupation +
			"."
	)
}

// PASSED

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("numsDiv3", () => {
	it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
		const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
		// Expected output: [ 2, 0, -1, 0 ]
		const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
		// Expected output: [ 2, 1, -1 ]
		expect(numsDiv3(hodgepodge1)).toEqual([2, 0, -1, 0])
		expect(numsDiv3(hodgepodge2)).toEqual([2, 1, -1])
	})
})

// FAILED:   ReferenceError: numsDiv3 is not defined

// b) Create the function that makes the test pass.

// Pseudo

// Input: array
// Output: array of only the remainders of the numbers divided by 3
// Expected: [ 2, 0, -1, 0 ], [ 2, 1, -1 ]

// Process

// Declare a function called numDiv3 with a parameter of array
// Declare a variable called numbers that is equal to array.filter value === number
// Return numbers and map through each value with modulo 3
// This should return all the remainders of each number divided by 3

// Function:

const numsDiv3 = (array) => {
	const numbers = array.filter((value) => typeof value === "number")
	return numbers.map((value) => value % 3)
}

// PASSED

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("numSum", () => {
	it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
		const cubeAndSum1 = [2, 3, 4]
		// Expected output: 99
		const cubeAndSum2 = [0, 5, 10]
		// Expected output: 1125
		expect(numSum(cubeAndSum1)).toEqual(99)
		expect(numSum(cubeAndSum2)).toEqual(1125)
	})
})

// FAILED: ReferenceError: numSum is not defined

// b) Create the function that makes the test pass.

// Pseudo

// Input: array
// Output: sum of values ** 3
// Expected: 99, 1125

// Process

// Declare the function numSum with a parameter of array
// Declare a variable newArr
// Set the newArr to array.map so it takes the index and cubes each value (** 3)
// Return newArr.reduce to add a + b

// Function

const numSum = (array) => {
	const newArr = array.map((index) => index ** 3)
	return newArr.reduce((a, b) => a + b)
}
// PASSED
