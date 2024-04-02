function greetings() {
  console.log ("Hello Everyone");
}
greetings();
function welcome(){
    console.log("Welcome");
}
welcome();
function careful(){
    console.log("Careful")
}
careful();
function welcome (name) {
  console.log("welcome to our yard"+ name )
}
welcome ( "Maddy" );
function area(length, width) {
  console.log("The area of the rectangle" +(length*width));
}
area(5,2);
function add_two_numbers(x,y){
    let add=x+y;
    console.log("Sum=",add)
}
add_two_numbers(10,10);
function add_three_numbers(x,y,z){
    let add=x+y+z;
    console.log("Sum",add)
}
add_three_numbers(5,6,7);
function multiply_three_numbers(x, y, z) {
  let multiply = x * y * z;
  console.log("Product", multiply);
}
multiply_three_numbers(5,5,5);
function subtract_two_numbers(a,b){
    let subtract=a-b;
    console.log("Difference",subtract)
}
subtract_two_numbers(20,10);
function divide_two_numbers(x, y) {
  let divide=x/y;
  console.log("Quotient",divide)
}
divide_two_numbers(20,10);
function area_of_circle(x,y){
    // x is PI,y is radius
    let area=x*y*y;
    console.log("Area of circle",area)
}
area_of_circle(Math.PI,5,5);
function circleArea(radius){
    return(Math.PI*radius*radius)
}
console.log(circleArea(35));
function add(x, y) {
  return x + y;
}
console.log("Sum",add(5,5));
console.log("Sum",add(90,5));
console.log("Sum",add(57,57));
