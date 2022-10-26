'use strict';
////////////function calling other function//////////

const cutPieces = function cutFruitPieces(fruit){
    return fruit *4;
}



function fruitProcessor(apples,oranges){
  const applePieces =  cutPieces(apples);
  const orangePieces = cutPieces(oranges);
    const juice =`Juice with ${applePieces} pieces of  apple and ${orangePieces} pieces of oranges.`;
     return juice;

}
console.log(fruitProcessor(2,3));