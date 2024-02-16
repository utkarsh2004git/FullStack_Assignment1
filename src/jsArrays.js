import response from './response.js';

// Using map to create a list of objects with only name and year properties
const mappedArray = response.map(item => ({
  name: item.name,
  year: item.year
}));

console.log("Mapped array:");
console.log(mappedArray);

// Using filter to select objects with year higher than 2020
const filteredArray = response.filter(item => 
    {item.year > 2020
    });

console.log("\nFiltered array:");
console.log(filteredArray);
