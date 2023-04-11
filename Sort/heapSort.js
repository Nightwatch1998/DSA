/**
 * 堆排序
 * @param {*} arr 
 */
function heapSort(arr){
    let n = arr.length
    // 建堆，从最后一个叶子结点的父节点开始
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    // 排序过程
    for(let i=n-1;i>0;i--){
        // 大根堆，最大的元素移动到堆尾
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr
}

/**
 * 堆化，将某个节点放置在合适的层
 * @param {*} arr 
 * @param {*} n 
 * @param {*} i 当前根节点
 */
function heapify(arr,n,i){
    let largest = i
    let left = 2*i+1
    let right = 2*i+2
    if(left<n&&arr[left]>arr[largest]){
        largest=left
    }
    if(right<n&&arr[right]>arr[largest]){
        largest=right
    }
    if(largest!==i){
        // 大的元素移动到父节点
        [arr[i],arr[largest]]=[arr[largest],arr[i]]
        heapify(arr,n,largest)
    }
}

module.exports = {
    heapSort
}