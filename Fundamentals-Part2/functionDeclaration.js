////////Function declaration vs Expressions/////
'use Strict';

//function decleration
function calcAge1(birthYeah){
   return 2037 - birthYeah;

}
const age1 = calcAge1(1991);


//function expression
const calcAge2= function(birthYeah){
    return 2037 - birthYeah;

}
const age2 = calcAge2(1991);

console.log(age1,age2);