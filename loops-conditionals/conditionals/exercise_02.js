/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/

// const age = 20;

// It is using a return in each if but it is not a function. In this case we have to put all the if's inside a function and pass the parameter

function checkAge(age) {
   if (age < 3) {
      console.log("You're just a baby!");
      return;
   }
   /*
   In this case, this checks "3 is GREATER or EQUAL to 3... 20 is greater than 3, the condition is met, enter this if and terminate the function.
   The solution is to check that it will also be less than 13 so that This way you can enter the following condition.
   In this way we are generating an age verification range.
   if (age >= 3) {
   */
   if (age >= 3 && age < 13) {
      console.log("You are in elementary school, kid.");
      return;
   }
   /*
   The same here, we must check that it will also be smaller than 18 to be able to access the next if condition.
   if (age >= 13) {
   */
   if (age >= 13 && age < 18) {
      console.log("Nice, you're a teenager!");
      return;
   }
   if (age >= 18) {
      console.log("Most places consider you an adult.");
      return;
   }
}

checkAge(20);

// console.log("What? How did this happen!?");
