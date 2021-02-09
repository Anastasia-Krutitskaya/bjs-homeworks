// Задача № 1 ---------------------------------------------
'use strict';
console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  return weapons.map(weapon => weapon.name)
}

function getCountReliableWeapons(durability) {
  const reliableWeapons = weapons.filter(weapon => weapon.durability > durability);
  return reliableWeapons.length;
}

function hasReliableWeapons(durability) {
  return weapons.some(weapon => weapon.durability > durability)
}

function getReliableWeaponsNames(durability) {
  return weapons
    .filter(weapon => weapon.durability > durability)
    .map(weapon => weapon.name)
}

function getTotalDamage() {
  const totalDamage = weapons.reduce((acc, weapon, index)=>{
    return acc + weapon.attack;
  }, 0);
  return totalDamage

}


// Задача № 2 --------------------------------------------------

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(100); 
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  const a = Array.from(arr1),
        b = Array.from(arr2);
  if (a.length === b.length) {
    return a.every( function(n,i) {
      return n === b[i]
      } )
    } else {
      return false
  } 
}

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]));  // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

function memorize(fn, limit) {
  const memory = [];
  const resultObject = {
    args: Array.from(arguments), // как передать сюда аргументы функции fn?  //Array.from(arguments)[0].arguments - не работает, а arguments это аргументы самой функции, 
    result: fn()
    }
  console.log(resultObject);
  memory.push(resultObject);
  function abc(...args) {        // сюда нужно передать аргументы функции fn, как?
    memory.find(compareArrays);
    if (find() === true ) {
      return resultObject.result
    } else {
      let fnResult = fn(...args);  // вычислить результат fn с переданными аргументами, опять как передать аргументы?
      memory.push(resultObject);
      if (memory.length > limit) {
        memory.shift()
      }
      return fnResult;
    }
  }
  return abc()
}

const mSum = memorize(sum, 5); 
sum(3, 4); // 7
mSum(3, 4); // 7
