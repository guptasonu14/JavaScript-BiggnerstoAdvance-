'use strict';

function logger(){
    console.log('My Name is Sonu');
}

//calling/running/invoking the function
logger();
logger();
/////////////////////////////////////////

function fruitProcessor(apples,oranges){
    const juice =`Juice with ${apples} apples and ${oranges} oranges.`;
     return juice;

}
const applesJuice = fruitProcessor(5, 0);
console.log(applesJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);
