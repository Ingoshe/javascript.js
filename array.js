let cars = ["Ford", "Nissan", "Subaru", "Audi"];
console.log(cars);

//iterate array
for(let i=0; i<cars.length; i++){
    console.log(cars[i])
}
// console.log(cars[0]);
// console.log(cars[3]);
// console.log(cars.length);
// console.log(cars[cars.length-1]);
cars[3] = "Mercedes";
console.log(cars);
cars.push("Rolls Royce");
console.log(cars);
cars.unshift("Jeep");
console.log(cars);
cars.pop();
console.log(cars);
cars.shift();
console.log(cars);
cars.splice(1, 2);
console.log(cars);

//printing or creating array
/*let currencies = ["Dollar", "Euro", "Pound", "Yen"];
console.log(currencies);
*/

//printing the third element in array(state index of desired element-starting from 0)
console.log(currencies[2]);

console.log(currencies.length);

//extracting last element from array
console.log(currencies[currencies.length - 1]);

//removing last element from array
currencies.pop();
console.log(currencies);

//removing first element from array
currencies.shift();
console.log(currencies);

//removing specified elements from array
currencies.splice(1,2)
console.log(currencies);

//array concatenation
/*let cars = ["Ford", "Nissan", "Subaru", "Audi"];
let currencies = ["Dollar", "Euro", "Pound", "Yen"];
let carcies = cars.concat(currencies);
console.log(carcies)
*/


//converting array to string
string1 = carcies.toString();
console.log(string1);

//converting string to array
arr = string1.split(",");
console.log(arr);

let currencies = ["Dollar", "Euro", "Pound", "Yen"];
let cars = cars.concat(currencies);
let carcies = currencies.concat(cars);
console.log(carcies);

//sort array
let countries=["Tanzania", "Uganda","Rwanda", "Kenya","Somalia"];
console.log(countries.sort())

//reverse array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.reverse());
