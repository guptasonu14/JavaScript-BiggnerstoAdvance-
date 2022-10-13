'use strict';
//function expression
const calcAge2= function(birthYeah){
    return 2037 - birthYeah;

}

//Arrow function

const calcAge3 = birthYeah=> 2037-birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah,firstName) =>{
    const age =2037-birthYeah;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1991,'Jonas'));