'use strict';
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael','Steven','Peter'];
console.log(friends);

const years = new Array(1991,1984,2008,2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2]='jay';
console.log(friends);
//friends = ['Bob','Alices'];

const firstName ='jonas';
const jonas = ['Jonas','Schmedtman',2037-1991,'teacher',friends];
console.log(jonas);
console.log(jonas.length);


///Excercise

const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const years1 = [1990, 1967, 2002, 2010, 2018];
  
  const age1 = calcAge(years1[0]);
  const age2 = calcAge(years1[1]);
  const age3 = calcAge(years1[years1.length - 1]);
  console.log(age1, age2, age3);
  
  const ages = [calcAge(years1[0]), calcAge(years1[1]), calcAge(years[years.length - 1])];
  console.log(ages);