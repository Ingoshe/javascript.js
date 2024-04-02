let colors= ["red","green","pink","yellow","purple","blue"];
console.log(colors);

//access second element of array
console.log(colors[1]);

//add color yellow to the end of the array
colors.push("grey")
console.log(colors);

//remove the first element of array
colors.shift()
console.log(colors);

//reverse order of elements in array
console.log(colors.reverse());

//sort the colors in array alphabetically 
console.log(colors.sort());

//find length  of array
console.log(colors.length);

//iterate through array to print all colors 
for(let i=0;i<colors.length;i++){
    console.log(colors[i]);
}

//remove the last element 
colors.pop()
console.log(colors);

//convert array to string
string1 = colors.toString();
console.log(string1);

