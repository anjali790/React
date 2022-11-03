//unit test cases:-
function getName(){
    return `My name is Vasanth`;
}

let output = getName();
let expectedOutput = "My name is Vasanth";

if(output === expectedOutput){
    console.log("passed");
}else{
    throw new Error("Test case failed");
}


