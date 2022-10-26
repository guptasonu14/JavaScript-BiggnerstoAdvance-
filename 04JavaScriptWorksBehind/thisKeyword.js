'use strict';

//////////////the This keyword/////////
console.log(this);

const calcAge = function(birthyear){
    console.log(2037 - birthyear);
    console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthyear=>{
    console.log(2037 - birthyear);
    console.log(this);
};
calcAgeArrow(1981);

const jonas ={
    year : 1991,
    calcAge: function(){
    console.log(this);
    console.log(2037-this.year);
    },
};
jonas.calcAge();


const matilda = {
    year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

