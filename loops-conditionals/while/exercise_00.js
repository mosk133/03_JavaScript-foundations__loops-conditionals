/*
    1. Create a variable called "loggedIn" that starts off as false.
    2. Create a while loop that runs while "loggedIn" is false.
    3. Each loop iteration, print out: "Incorrect login credentials".
    4. After 3 loop iterations, change "loggedIn" to true.
    5. After the loop is done, print out: "Successfully logged in!".

    HINT: Be careful of an infinite loop!
*/

let loggedIn = false
let counter = 0;

while (loggedIn === false){
    console.log ("Incorrect login credentials");
    counter ++;
    if (counter === 3){
        loggedIn = true;
        console.log ("Successfully logged in!");
    }
}
