function flat(arr,depth = 1){
  if(depth>0){
    return arr.reduce((pre,cur)=>{
      return pre.concat(Array.isArray(cur)?flat(cur,depth-1):cur)
    },[])
  }
  return arr.slice()
}
let a = [[1,2,3,[4,5,[6,7]]],8,9]
console.log(flat(a,3))