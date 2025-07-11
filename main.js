/*
Instructions: Create a program to practice building and logging arrays.

Task 1: Create Arrays
Create two separate arrays using array literals for the following:
● An array of 5 grocery store items.
● An array of 3 numbers representing prices.

Task 2: Access and Log the Values
Use console.log() to log the arrays.
1. Log the entire array of grocery items.
2. Log the entire array of prices.
3. Log three individual items of your choice.
4. Log two prices of your choice.
*/

// Task 1:
let groceryItems = ["Salmon", "Rice", "Yogurt", "Protein Shakes", "Eggs"];
let groceryPrices = [15.99, 8.99, 6.99];
let groceryCombined = [groceryItems, groceryPrices];

// Task 2:
console.log(groceryItems);
console.log(groceryPrices);
console.log([groceryItems[0], groceryItems[2], groceryItems[3]]);
console.log([groceryPrices[0], groceryPrices[2]]);