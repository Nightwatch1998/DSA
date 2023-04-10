function quickSort(arr){
    if(arr.length==1){
        return arr
    }
    let pivotIndex = Math.floor(arr.length/2)
    let pivot = arr[pivotIndex]
    let left = []
    let right = []
    for(let i=0;i<arr.length;i++){
        if(i==pivotIndex){
            continue
        }
        let cur = arr[i]
        if(cur<pivot){
            left.push(cur)
        }else{
            right.push(cur)
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

module.exports ={
    quickSort
}