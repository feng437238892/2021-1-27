// let arr = [1, 2, 3, 4, 5, 6];
// let sum = arr.reduce(function (prev, cur, index, arr) {
//   console.log(prev, cur, index);
//   return prev + cur
// },5)
// console.log(sum)

// let arr1 = [1,2,3,4,5];
// console.log(arr1.reduce((a,b)=>a+b))//求和
// console.log(arr1.reduce((a,b)=>a*b))//求积


let arr = ['name','age','long','short','long','name','name']
//计算数组中每个元素出现的次数
let arrResult = arr.reduce((pre,cur)=>{
  console.log(pre,cur)
  if(cur in pre){
    pre[cur]++
  }else{
    pre[cur] = 1
  }
  return pre
},{})
console.log(arrResult,"arrResult")

//去除数组中重复的元素
let arrResult1 = arr.reduce((pre,cur)=>{
    if(!pre.includes(cur)){
      pre.push(cur)
    }
    return pre
},[])
console.log(arrResult1,"111111")

//对对象的属性求和
let person = [
  {
      name: 'xiaoming',
      age: 18
  },{
      name: 'xiaohong',
      age: 17
  },{
      name: 'xiaogang',
      age: 19
  }
]
let result = person.reduce((a,b)=>{
  a = a + b.age;
  return a
},0)
console.log(result)