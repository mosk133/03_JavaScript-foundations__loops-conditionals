/*
    Create a program that starts with a number variable.
    The program will return whether the variable is even or odd.

    Change the variable to test if it works for different cases.
    Print the result as follows: Number 8 is even | Number 9 is odd.

    HINT: The modulus operator ( % ) is your friend.
*/

let number = 3;

if (number%2==0){
    console.log("Number "+number+" is even");
}else{
    console.log("Number "+number+" is odd")
}

number = 4;

if (number%2==0){
    console.log("Number "+number+" is even");
}else{
    console.log("Number "+number+" is odd")
}
