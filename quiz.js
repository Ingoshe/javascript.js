// Area and Perimeter of a Rectangle

//Area of Rectangle
let length=5;
let width=2;
let area=length*width;
console.log("Area:"+ area);

//Perimeter of Rectangle
let perimeter=2*(length+width);
console.log("Permieter:"+perimeter);


//sum of numbers between 1 and 'n'(positive integer)
//Numbers are divisible by 5 or 3

function numberSum(n) {
  let sum = 0;
  for (let g = 1; g <= n; g++) {
    if (g % 5 === 0 || g % 3 === 0) {
      sum = sum + g;
      console.log(g);
    }
  }

  return sum;
}

console.log(numberSum(47));

//fibonacci sequence

function fibonacci_sequence(n){
fs=[0,1]
if(n<=1){
    console.log(fs[0])
}
if(n==2){
    console.log(fs)
}
if(n>2){
    for(let i=1; i<=(n-2); i++){
        fs.push(fs[fs.length-1] + fs[fs.length-2])
    }
    console.log(fs);
}
}
fibonacci_sequence(1)
fibonacci_sequence(2)
fibonacci_sequence(3)
fibonacci_sequence(5)
fibonacci_sequence(10)


//groupBy

function groupBy() {
  let inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];
}

function groupBy(array, property) {
  return array.reduce((result, currentItem) => {
    (result[currentItem[property]] = result[currentItem[property]] || []).push(
      currentItem
    );
    return result;
  }, {});
}

let array = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "Chicago" },
  { name: "Charlie", age: 35, city: "New York" },
  { name: "Dave", age: 40, city: "Chicago" },
];

console.log(groupBy(array, "city"));
