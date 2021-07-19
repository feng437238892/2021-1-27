const peoples = [
  { name: 'Tom', age: 20 },
  { name: 'Jerry', age: 16 },
  { name: 'Mario', age: 19 },
  { name: 'Yoshi', age: 23 }
];
//find方法找到数组中符合条件的元素并返回它
const findMario = peoples.find(people => people.name === 'Mario')
console.log(findMario)
//findIndex()方法可以找到数组中符合条件的元素并返回它的索引
const findMario1 = peoples.findIndex(people => people.name === 'Mario')
console.log(findMario1)
//some()用于检测数组中的元素是否符合条件，当找到第一个符合条件的就会终止，并返回true，全部不符合就返回false
const someFn = peoples.some(people => people.age >= 18)
console.log(someFn,"someFns")

//every()方法用于检测数组中的元素是否符合条件，当找到第一个不符合条件的就会终止
const everyFn = peoples.every(people => people.age >= 15);
console.log(everyFn);