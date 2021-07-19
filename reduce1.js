var arr = [1, 2, 3, 4, 2, 2, 3, 4, 2, 4];
let arrResult = arr.reduce(function(pre,cur){
  console.log(pre,cur)
  if(cur in pre){
    pre[cur]++
  }else{
    pre[cur] = 1
  }
  return pre
},{})
console.log(arrResult,"arrResult")