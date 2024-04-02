

function funktion(){
    let localVar="I'm a local variable";
    console.log(localVar);//Accessible here
}
funktion()
console.log(localVar);//Not accessible here (outside function) 