// Задача № 1 ---------------------------------------------
'use strict';
console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  return weapons.map(weapon => weapon.name)
}

function getCountReliableWeapons(durability) {
  return weapons.filter(weapon => weapon.durability > durability).length;
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
  return weapons.reduce((acc, weapon, index)=> acc + weapon.attack , 0)
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

function compareArrays(a, b) {
  return a.length === b.length && a.every((n,i) => n === b[i] )
 }

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]));  // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

function memorize(fn, limit) {
  const memory = []; 
  return function(...args) {  
    const funcArgs = arguments;      
    const findResult = memory.find(memoryStorage => compareArrays(memoryStorage.args, funcArgs));
    if (findResult !== undefined ) {
      return findResult.result
    }
    let fnResult = fn(...args);  
    const resultObject = {
      args: Array.from(arguments), 
      result: fnResult
      }
    memory.push(resultObject);
    if (memory.length > limit) {
      memory.shift();
    }
    return fnResult;  
  }
 
}

const mSum = memorize(sum, 5); 
sum(3, 4); // 7
mSum(3, 4); // 7


