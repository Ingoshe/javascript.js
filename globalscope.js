let globalVar="i'm a global variable";

function funktion(){
    console.log(globalVar);//Accessible here
}
funktion(globalVar);
console.log(globalVar);//Accessible outside function 