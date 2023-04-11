function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    // left right 已经是升序排序
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return mergeSort(left,right)
}

function merge(left,right){
    // 双指针标记索引
    let i = 0
    let j = 0
    let result = []
    while(i<left.length&&j<right.length){
        if(left[i]<right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
        return [...result,...left.slice(i),...right.slice(j)]
    }
}

module.exports={
    mergeSort
}

