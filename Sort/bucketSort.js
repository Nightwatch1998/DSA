/**
 * 桶排序
 * @param {*} arr 待排序数组
 * @param {*} bucketSize 桶的容量
 */
function bucketSort(arr,bucketSize=5){
    if(arr.length<=0){
        return arr
    }
    // 找到最大值和最小值
    let maxVal = 0
    let minVal = 0
    for(let i=0;i<arr.length;i++){
        maxVal = arr[i] > maxVal ? arr[i] : maxVal
        minVal = arr[i] < minVal ? arr[i] : minVal
    }
    // 确定桶的数量并创建桶
    let bucketCount = Math.floor((maxVal-minVal)/bucketSize)+1
    let buckets = new Array(bucketCount)
    for(let i=0;i<buckets.length;i++){
        buckets[i] = []
    }

    // 数组元素分配到桶中
    for(let i=0;i<arr.length;i++){
        let bucketIndex = Math.floor((arr[i]-minVal)/bucketSize)
        buckets[bucketIndex].push(arr[i])
    }

    // 对每个桶进行排序
    arr.length = 0
    for(let i=0;i<buckets.length;i++){
        insertionSort(buckets[i])
        arr = buckets.reduce((prev,cur)=>prev.concat(cur))
    }
    return arr
}

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let temp = arr[i]
        let j = i 
        while(j>=1&&arr[j-1]>temp){
            arr[j]=arr[j-1]
            j--
        }
        arr[j] = temp
    }
}

module.exports = {
    bucketSort
}