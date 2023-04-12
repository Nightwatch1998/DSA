function heapSort(arr){
    if(arr.length<=1){
        return arr
    }
    let n = arr.length
    // 从最后一个非叶子结点
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    // 倒序一次将当前节点和首节点交换，然后堆化
    for(let i=n-1;i>0;i--){
        [arr[i],arr[0]] = [arr[0],arr[i]]
        // 交换了之后i级以后的项都是排序好的
        heapify(arr,i,0)
    }
    return arr
}

/**
 * 堆化，将节点i放在合适的位置，不能超过n
 * @param {*} arr 
 * @param {*} n 
 * @param {*} i 
 */
function heapify(arr,n,i){
    let largest = i
    let left = 2*i+1
    let right = 2*i+2
    // 不存在也是false,left,right 不能超过n
    // 如果超过n的话，最后的元素就会上浮
    if(left<n&&arr[left]>arr[largest]){
        largest = left
    }
    if(right<n&&arr[right]>arr[largest]){
        largest = right
    }
    if(largest!==i){
        // 交换
        [arr[i],arr[largest]] = [arr[largest],arr[i]] 
        heapify(arr,n,largest)
    }
}

module.exports = {
    heapSort
}