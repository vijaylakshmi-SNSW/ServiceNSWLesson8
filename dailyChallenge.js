// Go through the work for the Array Extension questions from Week 1 Day 4 and convert all the callback functions to arrow functions. Do the same for all the String Extension Method Questions from Week 1 Day 5. My links to these exercises are below:

// https://github.com/LukeParkerTAFE/ServiceNSWLesson4/blob/master/ArrayExtensionQuestions.js

// https://github.com/LukeParkerTAFE/ServiceNSWLesson5/blob/master/Exercises.js

let pets = [
    {
        name: "Rex",
        age: 4,
        ownerName: "Luke"
    }, {
        name: "Spot",
        age: 7,
        ownerName: "Jade"
    }, {
        name: "Scooby",
        age: 3,
        ownerName: "Shaggy"
    }, {
        name: "Lucky",
        age: 1,
        ownerName: "Luke"
    }, {
        name: "Sadie",
        age: 3,
        ownerName: "Daniel"
    }, {
        name: "Duke",
        age: 5,
        ownerName: "Sabine"
    }
];


//Q2. 
const petfinding = pet => pet.name;
let newArray = pets.map(petfinding);
console.log(newArray);

// Q1.
const ownedByLuke = pet => pet.ownerName == "Luke" ;
    
let lukesPets = pets.filter(ownedByLuke);

//Q3.
const findShaggysPet =(pet) => pet.ownerName == "Shaggy"
let shaggysPet = pets.find(findShaggysPet);
console.log(shaggysPet);

//Q4.

const filterCallback= pet => {
    let lessThan5 (pet.age < 5)
    let hasS  (pet.name[0] == "S" || pet.ownerName[0] == "S");
    return lessThan5 && hasS;
}

let filteredPets = pets.filter(filterCallback);
console.log(filteredPets);

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
let sentence = "The quick brown fox jumps over the lazy dog.";

// 1 Write function that searches for a string inside the sentence above. The function should return true if the string is found or false otherwise
const searchString= searchTerm => sentence.includes(searchTerm)
   
// console.log(searchString("brown"));
// console.log(searchInSentence("cat"));

// 2 Write function that searches for a string inside the sentence above. The function should return the index of the first occurrence of the string if the string is found or -1 otherwise
const findIndex= searchTerm => sentence.indexOf(searchTerm)

// console.log(findIndex("brown"));
// console.log(findIndexInSentence("program"));

// 3 Write a function that takes a string and returns the first three characters of that string
const firstThreeChars= (myString) => myString.substring(0, 3)

// console.log(firstThreeChars(sentence));

// 4 Write a function that takes a string and returns the last two characters of that string
const lastTwoChars= (myString) => myString.substring(myString.length - 2)
    
// console.log(lastTwoChars(sentence)); // Outputs "g."
// console.log(lastTwoChars("Luke")); // Outputs "ke"

// 5 Write a function that converts a string into an array of words where a word is any string separated by a space.
const splitArray= (myString) => myString.split(" ")
    

// console.log(splitArray(sentence));

// 6 Write a function that counts the number of times a string appears inside the sentence string above
const countOccurrences= searchTerm => {
    let count = 0;
    let startIndex = 0;
    while (true) {
        let index = sentence.indexOf(searchTerm, startIndex);
        if (index == -1) {
            break;
        }
        count++;
        startIndex = index + 1;
    }
    return count;
}
 console.log(countOccurrences("the"));
